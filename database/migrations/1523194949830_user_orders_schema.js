'use strict'

const Schema = use('Schema')

class UserOrderProductsSchema extends Schema {
  up() {

    this.create('user_orders', (table) => {
      table.integer('user_id').notNullable().unsigned()
      table.integer('order_id').notNullable().unsigned()
      table.datetime('created_at').notNullable()
    })
  }

  down() {
    this.drop('user_order_products')
  }
}

module.exports = UserOrderProductsSchema
