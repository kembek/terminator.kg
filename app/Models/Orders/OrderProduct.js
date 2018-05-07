'use strict'

const Model = use('Model')

class OrderProduct extends Model {
  static get table() {
    return 'order_products'
  }

  static get primaryKey() {
    return null
  }

  static get incrementing() {
    return false
  }

  product() {
    return this.belongsTo('PRODUCTS/Product', 'product_id', 'id')
  }

  order() {
    return this.belongsTo('ORDERS/Order', 'order_id', 'id')
  }
}

module.exports = OrderProduct
