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
      table.text('description').notNullable()
      table.text('information').notNullable()
      table.decimal('price', 11, 2).notNullable().unsigned()
      table.string('meta_keywords').notNullable()
      table.string('meta_desription').notNullable()
      table.boolean('is_hit').notNullable().defaultTo(false)
      table.boolean('is_recommend').notNullable().defaultTo(false)
      table.boolean('is_status').notNullable().defaultTo(1)
      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductSchema
