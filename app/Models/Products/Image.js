'use strict'

const Model = use('Model')

class Image extends Model {

  static get table() {
    return 'images'
  }

  productColor() {
    return this.belongsTo('PRODUCTS/ProductColor', 'product_color_id', 'id')
  }
}

module.exports = Image
