'use strict'

const Schema = use('Schema')

class ProductImageSchema extends Schema {
  up() {
    this.create('product_images', (table) => {
      table.primary(['product_id', 'image_id', 'color_id'])
      table.integer('product_id').notNullable().unsigned()
      table.integer('image_id').notNullable().unsigned()
      table.integer('color_id').notNullable().unsigned()
    })
  }

  down() {
    this.drop('product_images')
  }
}

module.exports = ProductImageSchema
