'use strict'

const Schema = use('Schema')

class AttributeGroupSchema extends Schema {
  up() {
    this.create('attribute_groups', (table) => {
      table.increments()
      table.integer('user_id').notNullable().unsigned()
      table.string('title').notNullable().unique('ui_attribute_groups_title')
    })
  }

  down() {
    this.drop('attribute_groups')
  }
}

module.exports = AttributeGroupSchema
