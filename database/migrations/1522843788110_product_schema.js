'use strict'

const Schema = use('Schema')

class ProductSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.increments()
      table.integer('stock_status_id').notNullable().unsigned()
      table.integer('user_id').notNullable().unsigned()
      table.integer('category_id').notNullable().unsigned()
      table.string('thumbnail').notNullable()
      table.string('title').notNullable().unique('ui_products_title')
      table.string('link').notNullable().unique('ui_products_link')
      table.text('description', 'longtext').notNullable()
      table.text('information', 'longtext').notNullable()
      table.string('meta_keywords')
      table.string('meta_desription')
      table.boolean('is_hit').notNullable().defaultTo(false)
      table.boolean('is_recommend').notNullable().defaultTo(false)
      table.boolean('is_status').notNullable().defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.dropIfExists('products')
  }
}

module.exports = ProductSchema
