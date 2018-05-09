'use strict'

const Model = use('Model')

class Order extends Model {

  static get table() {
    return 'orders'
  }

  orderProducts() {
    return this.belongsToMany('PRODUCTS/Product')
      .pivotModel(use('ORDERS/OrderProduct'))
  }

  users() {
    return this.belongsToMany('AUTHS/User')
      .pivotModel(use('USERS/UserOrder'))
  }

  customers() {
    return this.belongsTo('ORDERS/Customer', 'customer_id', 'id')
  }
}

module.exports = Order
