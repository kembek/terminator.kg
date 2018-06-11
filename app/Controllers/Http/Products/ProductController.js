'use strict'

const Product = use('PRODUCTS/Product')

class ProductController {
  async index({ request, response }) {
    const product = await Product.all()

    return response.apiCollection(product)
  }
  async product({ request, response }) {

    let { link } = params
    const product = await Product.query().where({
      link: link
    })

    return response.apiCollection(product)
  }
  
  async create() {
  }

  async store({ request, response, auth }) {
    const data = request.only(['stock_status_id', 'thumbnail', 'title', 'description', 'information', 'meta_keywords', 'meta_description', 'is_hit', 'is_recommend', 'is_status', 'user_id'])

    try {
      const product = await Product.findOrCreate({ title: data.title }, data)

      return response.apiCreated(product)
    } catch (error) {
      new Product().exceptions(error.message, error.status, error.code)
    }
  }

  async show() {
  }

  async edit() {
  }

  async update({ request, response, params, auth }) {
    const data = request.only(['stock_status_id', 'thumbnail', 'title', 'description', 'information', 'meta_keywords', 'meta_description', 'is_hit', 'is_recommend', 'is_status', 'user_id'])

    try {
      const product = await Product.findOrFail(params.id)
      product.merge(data)
      await product.save()

      return response.apiUpdated(product)
    } catch (error) {
      new Product().exceptions(error.message, error.status, error.code)
    }
  }

  async destroy({ request, response, params, auth }) {
    try {
      const product = await Product.findOrFail(params.id)

      await product.orderProducts().delete()
      await product.prices().delete()
      await product.images().delete()
      await product.colors().delete()
      await product.productImages().delete()
      await product.productVideo().delete()
      await product.delete()

      return response.apiDeleted()
    } catch (error) {
      new Product().exceptions(error.message, error.status, error.code)
    }
  }
}

module.exports = ProductController
