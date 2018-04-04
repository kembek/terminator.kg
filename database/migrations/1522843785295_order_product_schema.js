'use strict'

const Schema = use('Schema')

class OrderProductSchema extends Schema {
  up() {
    this.create('order_products', (table) => {
      table.primary(['order_id', 'product_id'])
      table.integer('order_id').notNullable().unsigned()
      table.integer('product_id').notNullable().unsigned()
      table.timestamps()
    })
  }

  down() {
    this.drop('order_products')
  }
}

module.exports = OrderProductSchema
