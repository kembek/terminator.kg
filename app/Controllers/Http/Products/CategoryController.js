'use strict'

const Categories = use('PRODUCTS/Categories')
const ProductCategory = use('PRODUCTS/ProductCategory')
const Color = use('PRODUCTS/ProductColor')
const Images = use('App/Controllers/Http/ImagesController')

const {
  validate
} = use('Validator')

class CategoryController {
  async all({
    response
  }) {
    const categories = await Categories.query().orderBy('sort', 'ASC').with('parent').fetch()

    return response.apiCollection(categories)
  }


  async index({
    response
  }) {
    const categories = await Categories.query().where({
      parent_id: null,
      is_status: true
    }).orderBy('sort', 'ASC')

    async function recCat(object) {
      const childs = await Categories.query().where({
        parent_id: object.id,
        is_status: true
      }).orderBy('sort', 'ASC')

      if (childs != false) {
        object.childs = []
        for (var i = 0; i < childs.length; i++) {
          childs[i].childs = await recCat(childs[i])
          object.childs.push(childs[i])
        }
      }
      return object.childs
    }

    let arrCat = []

    for (var i = 0; i < categories.length; i++) {
      categories[i].childs = await recCat(categories[i])
      arrCat.push(categories[i])
    }

    return response.apiCollection(arrCat)
  }

  async category({
    request,
    params,
    response
  }) {
    let {
      link
    } = params

    let {
      page
    } = request.only(['page'])

    let category = await Categories.query().where({
      link: link
    })

    if (page) {
      page = JSON.parse(page)
    } else
      page = 0

    if (category != false) {
      category = category[0]
      category.products = await ProductCategory.query()
        .where({
          category_id: category.id,
          is_status: true
        })
        .offset(page * 36)
        .limit(36)
        .select('product_category.product_id', 'products.stock_status_id', 'products.user_id', 'products.thumbnail', 'products.title', 'products.link', 'products.created_at', 'products.updated_at')
        .innerJoin('products', 'products.id', 'product_category.product_id')
        .orderBy('products.sort', 'ASC')
      //.innerJoin('stock_statuses', 'stock_statuses.id', 'products.stock_status_id')

      if (page) {
        //category.products = category.products.splice(page * 9, (page +1) * 9)
      }

      for (var i = 0; i < category.products.length; i++) {
        category.products[i].prices = await Color.query().where({
            product_id: category.products[i].product_id
          })
          .innerJoin('product_prices', 'product_prices.product_color_id', 'product_colors.id')
          .orderBy('product_prices.price', 'ASC').with('images').fetch()
      }
      // .innerJoin('product_colors', 'product_colors.product_id', 'product_category.product_id')
      // .innerJoin('colors', 'colors.id', 'product_colors.color_id')


      return response.apiCollection(category)
    }

    return response.status(404).send({
      status: 404,
      message: "Not Found"
    })
  }

  async block({
    response
  }) {
    let category = await Categories.query().where({
      is_two_block: true
    }).orderBy('sort', 'ASC')
    try {
      return response.apiCollection(category)
    } catch (error) {
      return response.status(404).send({
        status: 404,
        message: "Not Found"
      })
    }
  }

  async create({
    request,
    response
  }) {
    let data = request.only(['title', 'parent_id', 'is_status', 'is_two_block',
      'thumbnail', 'link', 'meta_keywords', 'meta_description', 'sort', 'user_id'
    ])

    try {
      try {
        data.parent_id = JSON.parse(data.parent_id)
        data.sort = JSON.parse(data.sort)
        data.is_status = JSON.parse(data.is_status)
        data.is_two_block = JSON.parse(data.is_two_block)
        data.thumbnail = JSON.parse(data.thumbnail)
        if (data.link == null || data.link == '')
          delete data.link
      } catch (error) {}


      if (data.thumbnail != null && data.thumbnail != '')
        data.thumbnail = await Images.image(request, 'categories')

      const category = await Categories.findOrCreate({
        title: data.title
      }, data)

      const categories = await Categories.query().where({
        id: category.id
      }).with('parent').fetch()

      return response.apiCreated(categories)

    } catch (error) {
      new Categories().exceptions(error.message, error.status, error.code)
    }
  }




  async update({
    request,
    response,
    params,
    auth
  }) {
    let data = request.only(['title', 'parent_id', 'is_status', 'is_two_block',
      'thumbnail', 'link', 'meta_keywords', 'meta_description', 'sort'
    ])

    try {
      try {
        data.parent_id = JSON.parse(data.parent_id)
        data.sort = JSON.parse(data.sort)
        data.is_status = JSON.parse(data.is_status)
        data.is_two_block = JSON.parse(data.is_two_block)
        data.thumbnail = JSON.parse(data.thumbnail)
        if (data.link == null || data.link == '')
          delete data.link
      } catch (error) {}

      const category = await Categories.findOrFail(params.id)
      if (data.thumbnail != null && data.thumbnail != category.thumbnail)
        data.thumbnail = await Images.image(request, 'categories')

      category.merge(data)
      await category.save()

      const categories = await Categories.query().where({
        id: category.id
      }).with('parent').fetch()

      return response.apiUpdated(categories)

    } catch (error) {
      new Categories().exceptions(error.message, error.status, error.code)
    }
  }

  async destroy({
    params,
    response
  }) {
    try {
      const category = await Categories.findOrFail(params.id)
      await category.delete()
      await Images.delete('categories', category.thumbnail)
      return response.apiDeleted(category)
    } catch (error) {
      new Categories().exceptions(error.message, error.status, error.code)
    }
  }

}

module.exports = CategoryController
