'use strict'

const Model = use('Model')

class Order extends Model {
  orderProducts() {
    return this.belongsToMany('PRODUCTS/Product')
      .pivotModel(use('ORDERS/OrderProduct'))
  }

  users() {
    return this.belongsToMany('AUTHS/User')
      .pivotModel(use('USERS/UserOrder'))
  }

  customers() {
    return this.belongsTo('USERS/Customer', 'customer_id', 'id')
  }
}

module.exports = Order
