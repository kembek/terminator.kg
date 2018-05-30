'use strict'

const Basic = use('App/Validators/Basic')

class Category extends Basic {
  get rules() {
    let category = {
      parent_id: 'integer',
      sort: 'integer',
      thumbnail: 'required|min:4|max:255|unique:product_categories, thumbnail',
      title: 'required|min:3|max:255|unique:product_categories, title',
      meta_keywords: 'string|max:255',
      meta_description: 'string|max:255',
      is_status: 'required|boolean'
    }

    if (this.ctx.request.method() === 'PUT') {
      category.thumbnail = `required|string|min:4|max:255|unique:products, thumbnail, id, ${productId}`
      category.title = `required|string|max:255|unique:products, title, id, ${productId}`

      return category
    }

    return category
  }

  get sanitizationRules() {
    let category = {
      parent_id: 'to_int',
      sort: 'to_int',
      is_status: 'toBoolean'
    }

    return category
  }
}

module.exports = Category
