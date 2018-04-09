'use strict'

const Schema = use('Schema')

class ProductCategorySchema extends Schema {
  up() {
    this.create('product_categories', (table) => {
      table.increments()
      table.integer('parent_id').notNullable().unsigned().defaultTo(0)
      table.integer('user_id').notNullable().unsigned()
      table.integer('sort').notNullable().unsigned().defaultTo(0)
      table.string('thumbnail').notNullable().unique('ui_product_categories_image')
      table.string('title').notNullable().unique('ui_product_categories_title')
      table.string('link').notNullable().unique('ui_product_categories_link')
      table.string('meta_keywords').notNullable()
      table.string('meta_desription').notNullable()
      table.boolean('is_status').notNullable().defaultTo(1)
      table.timestamps()
    })
  }

  down() {
    this.drop('product_categories')
  }
}

module.exports = ProductCategorySchema
