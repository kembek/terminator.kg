'use strict'

const Schema = use('Schema')

class ProductImagesSchema extends Schema {
  up() {
    this.create('product_images', (table) => {
      table.increments()
      table.integer('product_color_id').notNullable().unsigned()
      table.integer('sort').notNullable().unsigned().defaultTo(0)
      table.string('url').notNullable()
      table.string('title').defaultTo('')
      table.timestamps()
    })
  }

  down() {
    this.dropIfExists('product_images')
  }
}

module.exports = ProductImagesSchema
