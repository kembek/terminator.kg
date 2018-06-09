'use strict'

const Category = use('PRODUCTS/Category')
const CircularJSON = require('circular-json')

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

    async function recCat(object) {
      const childs = await Category.query().where({
        parent_id: object.id,
        is_status: true
      })
      
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

    for (var i = 0; i < category.length; i++) {
      category[i].childs = await recCat(category[i])
      arrCat.push(category[i])
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

  async image({ response }) {

  }
}

module.exports = CategoryController
