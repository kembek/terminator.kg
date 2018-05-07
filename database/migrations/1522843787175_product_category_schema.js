'use strict'

const Schema = use('Schema')

class ProductCategorySchema extends Schema {
  up() {
    this.create('product_categories', (table) => {
      table.increments()
      table.integer('parent_id').unsigned()
      table.integer('user_id').notNullable().unsigned()
      table.integer('sort').notNullable().unsigned().defaultTo(0)
      table.string('thumbnail').notNullable().unique('ui_product_categories_thumbnail')
      table.string('title').notNullable().unique('ui_product_categories_title')
      table.string('link').notNullable().unique('ui_product_categories_link')
      table.string('meta_keywords')
      table.string('meta_desription')
      table.boolean('is_status').notNullable().defaultTo(1)
      table.timestamps()
    })
  }

  down() {
    this.dropIfExists('product_categories')
  }
}

module.exports = ProductCategorySchema
