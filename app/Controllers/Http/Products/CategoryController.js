'use strict'

const Categories = use('PRODUCTS/Categories')
const ProductCategory = use('PRODUCTS/ProductCategory')
const Color = use('PRODUCTS/ProductColor')
const Product = use('PRODUCTS/Product')
const Helpers = use('Helpers')
const {
  validate
} = use('Validator')
const Drive = use('Drive')

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
      parent_id: null
    })

    async function recCat(object) {
      const childs = await Categories.query().where({
        parent_id: object.id
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
    let category = await Categories.query().where({
      link: link
    })

    if (category != false) {
      category = category[0]
      category.products = await ProductCategory.query()
        .where({
          category_id: category.id
        })
        .select('product_category.product_id', 'products.stock_status_id', 'products.user_id', 'products.thumbnail', 'products.title', 'products.link', 'products.description', 'products.information', 'products.meta_keywords', 'products.meta_desription', 'products.is_hit', 'products.is_recommend', 'products.created_at', 'products.updated_at')
        .innerJoin('products', 'products.id', 'product_category.product_id')
        .orderBy('products.updated_at', 'ASC')
      //.innerJoin('stock_statuses', 'stock_statuses.id', 'products.stock_status_id')


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

  async create() {

  }

  async image(request) {
    const image = request.file('thumbnail', {
      type: ['image'],
      size: '2mb',
      allowedExtensions: ['jpg', 'png', 'jpeg', 'svg']
    })

    if (!image) {
     await new Category().exceptions('This field required!!!', 400)
    }

    let image_name = `${new Date().getTime()}.${image.subtype}`

    await image.move(Helpers.resourcesPath('static/images'), {
      name: image_name
    })

    if (!image.moved()) {
      return image.error()
    }

    return image_name
  }

  async store({
    request,
    response,
    auth
  }) {

    let data = request.only(['parent_id', 'user_id', 'sort', 'title', 'meta_keywords', 'meta_description', 'is_status'])
    console.log(data)
    data.thumbnail = await this.image(request)

    const validation = await validate(data, {
      thumbnail: `required|string|min:3|max:255|unique:product_category, thumbnail`
    })

    if (validation.fails()) {
      return validation.messages()
    }

    try {
      const category = await Category.findOrCreate({
        title: data.title
      }, data)

      return response.apiSuccess(category)
    } catch (error) {
      new Category().exceptions(error.message, error.status, error.code)
    }
  }

  async show() {}

  async edit() {}

  async update({
    request,
    response,
    params,
    auth
  }) {
    const data = request.all()
    
    try {
      data.thumbnail = await this.image(request)

      const category = await Categories.findOrFail(params.id)
      category.merge(data)
      await category.save()

      return response.apiUpdated(category)
    } catch (error) {
      new Category().exceptions(error.message, error.status, error.code)
    }
  }

  async destroy({
    params,
    response
  }) {
    try {
      const category = await Categories.findOrFail(params.id)

      await category.delete()
      return response.apiDeleted(category)
    } catch (error) {
      new Categories().exceptions(error.message, error.status, error.code)
    }
  }

}

module.exports = CategoryController
