'use strict'

const Schema = use('Schema')

class AttributeGroupAttributeSchema extends Schema {
  up() {
    this.create('attribute_group_attributes', (table) => {
      table.primary(['attribute_group_id', 'attribute_id'])
      table.integer('attribute_group_id').notNullable().unsigned()
      table.integer('attribute_id').notNullable().unsigned()
    })
  }

  down() {
    this.drop('attribute_group_attributes')
  }
}

module.exports = AttributeGroupAttributeSchema
