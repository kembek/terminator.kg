'use strict'

const Model = use('Model')

class ProductImage extends Model {
  static get table() {
    return 'product_images'
  }

  static get primaryKey() {
    return null
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

  product() {
    return this.belongsTo('PRODUCTS/Product', 'product_id', 'id')
  }
}

module.exports = ProductImage
