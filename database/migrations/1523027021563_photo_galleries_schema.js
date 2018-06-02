'use strict'

const Schema = use('Schema')

class PhotoGalleriesSchema extends Schema {
  up() {
    this.create('photo_galleries', (table) => {
      table.integer('product_id').notNullable().unsigned().primary('pk_product_id_photo_galleries')
      table.integer('sort').notNullable().unsigned().defaultTo(0)
      table.string('img_url').notNullable().unique('ui_photo_galleries_img_url')
    })
  }

  down() {
    this.drop('photo_galleries')
  }
}

module.exports = PhotoGalleriesSchema
