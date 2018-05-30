'use strict'

const Schema = use('Schema')

class AttributeSchema extends Schema {
  up () {
    this.create('attributes', (table) => {
      table.increments()
      table.integer('user_id').notNullable().unsigned()
      table.string('title').notNullable().unique('ui_attributes_title')
    })
  }

  down () {
    this.drop('attributes')
  }
}

module.exports = AttributeSchema
