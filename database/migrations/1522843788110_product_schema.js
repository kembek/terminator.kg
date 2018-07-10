'use strict'

const Schema = use('Schema')

class ProductSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.increments()
      table.integer('stock_status_id').notNullable().unsigned().defaultTo(1)
      table.integer('user_id').notNullable().unsigned()
      table.integer('sort').notNullable().defaultTo(0)
      table.string('thumbnail').notNullable()
      table.string('title').notNullable().unique('ui_products_title')
      table.string('link').notNullable().unique('ui_products_link')
      table.text('description', 'longtext').defaultTo('')
      table.text('video', 'longtext').defaultTo('')
      table.text('photos', 'longtext').defaultTo('')
      table.string('meta_keywords').notNullable().defaultTo('')
      table.string('meta_description').notNullable().defaultTo('')
      table.string('meta_keywords_atributes').notNullable().defaultTo('')
      table.string('meta_description_atributes').notNullable().defaultTo('')
      table.string('meta_keywords_video').notNullable().defaultTo('')
      table.string('meta_description_video').notNullable().defaultTo('')
      table.string('meta_keywords_review').notNullable().defaultTo('')
      table.string('meta_description_review').notNullable().defaultTo('')
      table.string('meta_keywords_photos').notNullable().defaultTo('')
      table.string('meta_description_photos').notNullable().defaultTo('')
      table.boolean('is_status').defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.dropIfExists('products')
  }
}

module.exports = ProductSchema
