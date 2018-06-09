'use strict'

const Category = use('PRODUCTS/Category')

class CategoryController {

  async index({ response }) {
    // // await Category.query().with('childs').fetch()
    // let parentCat = await Category.query().where('parent_id', null)

    // let resp = []
    // for (let i = 0; i < parentCat.length; ++i) {
    //   const childCat = await Category.query().where('parent_id', parentCat[i].id)

    //   if(childCat) {
    //     parentCat[i].child = childCat
    //     const childCatThd = await Category.query().where('parent_id', parentCat[i].child.id)

    //   }

    //   resp[i] = parentCat[i]
    // }
    const resp = await Category.all()
    return response.apiCollection(resp)
  }

  async category({ response }) {

    const category = await Category.query().where({
      parent_id: null,
      is_status: true
    })

    let arrCat = []
    for (let i = 0; i < category.length; ++i) {
      const child = await Category.query().where({
        parent_id: category[i].id,
        is_status: true
      })

      let tmp = category[i]
      tmp.child = child

      for (let j = 0; j < tmp.child.length; ++j) {
        const chl = await Category.query().where({
          parent_id: tmp.child[j].id,
          is_status: true
        })

        tmp.child[j].child = chl
      }

      arrCat[i] = tmp
    }

    return response.apiCollection(arrCat)

  }

  async create() {
  }

  async store({ request, response, auth }) {
    // const user = await auth.getUser()
    const data = request.only(['parent_id', 'user_id', 'sort', 'thumbnail', 'title', 'meta_keywords', 'meta_description', 'is_status'])

    try {
      const category = await Category.findOrCreate(
        { title: data.title }, data)

      return response.apiSuccess(category)

    } catch (error) {
      new Category().exceptions(error.message, error.status, error.code)
    }
  }

  async show() {
  }

  async edit() {
  }

  async update({ request, response, params, auth }) {
    const data = request.only(['parent_id', 'user_id', 'sort', 'thumbnail', 'title', 'meta_keywords', 'meta_description', 'is_status'])

    try {
      const category = await Category.findOrFail(params.id)
      category.merge(data)
      await category.save()

      return response.apiUpdated(category)
    } catch (error) {
      new Category().exceptions(error.message, error.status, error.code)
    }
  }

  async destroy({ params, request, response, auth }) {
    try {
      const category = await Category.findOrFail(params.id)

      const product = await category.product().fetch()
      await product.productVideo().delete()
      await product.productImages().delete()
      await product.prices().delete()
      await product.productColors().delete()

      await category.delete()
      return response.apiDeleted(category)
    } catch (error) {
      new Category().exceptions(error.message, error.status, error.code)
    }
  }

  async image({response}) {
    
  }
}

module.exports = CategoryController
