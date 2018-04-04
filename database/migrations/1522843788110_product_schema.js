'use strict'

const Schema = use('Schema')

class ProductSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.increments()
      table.string('title').notNullable().unique('ui_products_title')
      table.string('link').notNullable().unique('ui_products_link')
      table.text('information').notNullable()
      table.string('sku').notNullable().unique('ui_products_sku')
      table.string('upc').notNullable().unique('ui_products_upc')
      table.text('description').notNullable()
      table.string('thumbnail').notNullable()
      table.integer('category_id').notNullable().unsigned()
      table.boolean('is_hit').notNullable().defaultTo(false)
      table.boolean('is_recommend').notNullable().defaultTo(false)
      table.float('price', 12, 2).notNullable().unsigned()
      table.integer('quantity').notNullable().unsigned()
      table.integer('stock_status_id').notNullable().unsigned()
      table.integer('user_id').notNullable().unsigned()
      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductSchema
