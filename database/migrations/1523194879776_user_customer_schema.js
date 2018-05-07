'use strict'

const Schema = use('Schema')

class UserCustomerSchema extends Schema {
  up() {
    this.create('user_customers', (table) => {
      table.integer('user_id').notNullable().unsigned()
      table.integer('customer_id').notNullable().unsigned()
      table.datetime('created_at').notNullable()
    })
  }

  down() {
    this.dropIfExists('user_customers')
  }
}

module.exports = UserCustomerSchema
