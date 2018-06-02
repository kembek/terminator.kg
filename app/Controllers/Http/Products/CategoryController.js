'use strict'

const Category = use('PRODUCTS/Category')

class CategoryController {

  async index({ response }) {
    const category = await Category.all()

    return response.apiCollection(category)
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
}

module.exports = CategoryController
