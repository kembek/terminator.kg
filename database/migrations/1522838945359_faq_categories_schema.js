'use strict'

const Schema = use('Schema')

class FaqCategoriesSchema extends Schema {
  up () {
    this.create('faq_categories', (table) => {
      table.increments()
      table.integer('parent_id').unsigned()
      table.integer('user_id').notNullable().unsigned()
      table.integer('sort').notNullable().unsigned().defaultTo(0)
      table.string('title').notNullable().unique('ui_faq_categories_title')
      table.string('link').notNullable().unique('ui_faq_categories_link')
      table.string('meta_keywords')
      table.string('meta_description')
      table.boolean('is_status').notNullable().defaultTo(1)
      table.timestamps()
    })
  }

  down () {
    this.dropIfExists('faq_categories')
  }
}

module.exports = FaqCategoriesSchema
