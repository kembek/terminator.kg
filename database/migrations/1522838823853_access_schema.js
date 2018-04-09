'use strict'

const Schema = use('Schema')

class AccessSchema extends Schema {
  up() {
    this.create('accesses', (table) => {
      table.integer('group_id').notNullable().unsigned().primary('pk_group_id_accesses')
      table.enu('post', ['111', '11', '0']).notNullable().defaultTo('0')
      table.enu('product', ['111', '11', '0']).notNullable().defaultTo('0')
      table.enu('order', ['111', '11', '0']).notNullable().defaultTo('0')
      table.enu('access', ['111', '11', '0']).notNullable().defaultTo('0')
      table.enu('setting', ['111', '11', '0']).notNullable().defaultTo('0')
    })
  }

  down() {
    this.drop('accesses')
  }
}

module.exports = AccessSchema
