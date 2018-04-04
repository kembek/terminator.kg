'use strict'

const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('title').notNullable().unique('ui_products_title')
      table.string('link').notNullable().unique('ui_products_link')
      table.text('information').notNullable()
      table.string('sku').notNullable().unique('ui_products_sku')
      table.text('description').notNullable()
      table.string('thumbnail').notNullable()
      table.integer('category_id').notNullable().unsigned()
      table.boolean('is_hit').notNullable().defaultTo(false)
      table.boolean('is_recommend').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
