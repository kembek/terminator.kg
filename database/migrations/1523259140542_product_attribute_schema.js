'use strict'

const Schema = use('Schema')

class ProductAttributeSchema extends Schema {
  up () {
    this.create('product_attributes', (table) => {
      table.primary(['product_id', 'attribute_id'])
      table.integer('product_id').notNullable().unsigned()
      table.integer('attribute_id').notNullable().unsigned()
      table.text('text').notNullable()
    })
  }

  down () {
    this.drop('product_attributes')
  }
}

module.exports = ProductAttributeSchema
