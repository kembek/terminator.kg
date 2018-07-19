'use strict'

const Model = use('Model')

class ProductColor extends Model {
  static get table() {
    return 'product_colors'
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

  color() {
    return this.belongsTo('SETTINGS/Color', 'color_id', 'id')
  }

  images() {
    return this.hasMany('PRODUCTS/Image', 'product_color_id', 'product_color_id')
  }

  prices() {
    return this.hasOne('PRODUCTS/Price', 'id', 'product_color_id')
  }

}

module.exports = ProductColor
