'use strict'

const Schema = use('Schema')

class ProductCategorySchema extends Schema {
  up () {
    this.create('product_categories', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('product_categories')
  }
}

module.exports = ProductCategorySchema
