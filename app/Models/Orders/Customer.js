'use strict'

const Model = use('Model')

class Customer extends Model {

  static get table() {
    return 'customers'
  }

  orders() {
    return this.hasMany('ORDERS/Order', 'id', 'customer_id')
  }

}

module.exports = Customer
