'use strict'

const Basic = use('App/Models/Basic')

class Product extends Basic {
  static get table() {
    return 'products'
  }

  stockStatus() {
    return this.belongsTo('SETTINGS/StockStatus', 'stoc_status_id', 'id')
  }

  user() {
    return this.belongsTo('AUTHS/User', 'user_id', 'id')
  }

  category() {
    return this.belongsTo('PRODUCTS/ProductCategory', 'categroy_id', 'id')
  }

  productImages() {
    return this.hasMany('PRODUCTS/ProductImage', 'id', 'product_id')
  }

  productVideo() {
    return this.hasMany('PRODUCTS/ProductVideo', 'id', 'product_id')
  }

  colors() {
    return this.belongsToMany('SETTINGS/Color')
      .pivotModel(use('PRODUCTS/ProductColor'))
  }

  images() {
    return this.manyThrough('PRODUCTS/ProductColor', 'images')
  }

  prices() {
    return this.manyThrough('PRODUCTS/ProductColor', 'prices')
  }

  orderProducts() {
    return this.belongsToMany('ORDERS/Order')
      .pivotModel(use('ORDERS/OrderProduct'))
  }
}

module.exports = Product
