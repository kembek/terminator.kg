'use strict'

const Schema = use('Schema')

class OrderSchema extends Schema {
  up() {
    this.create('orders', (table) => {
      table.increments()
      table.string('email', 80).notNullable()
      table.string('username', 80).notNullable()
      table.string('phone', 80).notNullable()
      table.boolean('is_status').notNullable().defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('orders')
  }
}

module.exports = OrderSchema
