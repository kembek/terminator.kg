'use strict'

const Model = use('Model')

class ProductPrice extends Model {
  static get table() {
    return 'product_prices'
  }

  static get primaryKey() {
    return 'product_color_id'
  }

  static get incrementing() {
    return false
  }

  static get createdAtColumn() {
    return undefined
  }

  static get updatedAtColumn() {
    return undefined
  }

  productColor() {
    return this.belongsTo('PRODUCTS/ProductColor', 'product_color_id', 'id')
  }
}

module.exports = ProductPrice
