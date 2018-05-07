'use strict'

const Schema = use('Schema')

class OrderProductSchema extends Schema {
  up() {
    this.create('order_products', (table) => {
      table.primary(['product_id', 'order_id'])
      table.integer('product_id').notNullable().unsigned()
      table.integer('order_id').notNullable().unsigned()
      table.timestamps()
    })
  }

  down() {
    this.dropIfExists('order_products')
  }
}

module.exports = OrderProductSchema
