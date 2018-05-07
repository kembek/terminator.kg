'use strict'

const Schema = use('Schema')

class PhotoGalleriesSchema extends Schema {
  up() {
    this.create('product_images', (table) => {
      table.integer('product_id').notNullable().unsigned()
      table.integer('sort').notNullable().unsigned().defaultTo(0)
      table.string('url').notNullable().unique('ui_product_images_url')
    })
  }

  down() {
    this.dropIfExists('product_images')
  }
}

module.exports = PhotoGalleriesSchema
