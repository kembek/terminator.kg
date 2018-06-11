'use strict'

const Schema = use('Schema')

class ProductCategorySchema extends Schema {
  up () {
    this.create('product_category', (table) => {
      table.primary(['product_id', 'category_id'])
      table.integer('product_id').notNullable().unsigned()
      table.integer('category_id').notNullable().unsigned()
    })
  }

  down () {
    this.drop('product_category')
  }
}

module.exports = ProductCategorySchema
