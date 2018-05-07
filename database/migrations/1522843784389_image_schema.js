'use strict'

const Schema = use('Schema')

class ImageSchema extends Schema {
  up() {
    this.create('images', (table) => {
      table.increments()
      table.integer('product_color_id').notNullable().unsigned()
      table.integer('sort').notNullable().unsigned().defaultTo(0)
      table.string('url').notNullable().unique('ui_images_url')
      table.string('title').notNullable().unique('ui_images_title')
      table.timestamps()
    })
  }

  down() {
    this.dropIfExists('images')
  }
}

module.exports = ImageSchema
