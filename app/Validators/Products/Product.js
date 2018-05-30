'use strict'

class Product {
  get rules() {
    const productId = this.ctx.params.id

    let product = {
      stock_status_id: 'integer',
      user_id: 'required|integer',
      category_id: 'required|integer',
      thumbnail: `required|string|min:4|max:255|unique:products, thumbnail, id, ${productId}`,
      title: `required|string|max:255|unique:products, title, id, ${productId}`,
      description: 'required|string',
      information: 'required|string',
      meta_keywords: 'string',
      meta_description: 'string',
      is_hit: 'required|boolean',
      is_recommend: 'required|boolean',
      is_status: 'required|boolean'
    }

    if (this.ctx.request.method() === 'PUT') {
      product.thumbnail = `required|string|min:4|max:255|unique:products, thumbnail, id, ${productId}`
      product.title = `required|string|max:255|unique:products, title, id, ${productId}`

      return product
    }

    return product
  }

  get sanitizationRules() {
    let product = {
      stock_status_id: 'to_int',
      user_id: 'to_int',
      category_id: 'to_int',
      is_hit: 'toBoolean',
      is_recommend: 'toBoolean',
      is_status: 'toBoolean'
    }

    return product
  }
}

module.exports = Product
