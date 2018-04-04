'use strict'

const Schema = use('Schema')

class ProductImageSchema extends Schema {
  up () {
    this.create('product_images', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('product_images')
  }
}

module.exports = ProductImageSchema
