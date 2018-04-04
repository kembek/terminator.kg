'use strict'

const Schema = use('Schema')

class ImageSchema extends Schema {
  up() {
    this.create('images', (table) => {
      table.increments()
      table.string('url').notNullable().unique('ui_images_url')
      table.string('title').notNullable().unique('ui_images_title')
      table.integer('album_id').notNullable().unsigned().defaultTo(0)
      table.timestamps()
    })
  }

  down() {
    this.drop('images')
  }
}

module.exports = ImageSchema
