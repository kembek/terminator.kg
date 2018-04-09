'use strict'

const Schema = use('Schema')

class OrderSchema extends Schema {
  up() {
    this.create('orders', (table) => {
      table.increments()
      table.integer('customer_id').notNullable().unsigned()
      table.integer('quantity').notNullable().unsigned()
      table.decimal('price', 11, 2).notNullable().unsigned()
      table.decimal('total', 11, 2).notNullable().unsigned()
      table.string('comment')
      table.boolean('is_status').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('orders')
  }
}

module.exports = OrderSchema
