'use strict'

const Schema = use('Schema')

class FaqCategoriesSchema extends Schema {
  up () {
    this.create('faq_categories', (table) => {
      table.increments()
      table.string('title').notNullable().unique('ui_faq_categories_title')
      table.string('link').notNullable().unique('ui_faq_categories_link')
      table.string('description').notNullable()
      table.integer('parent_id').notNullable().unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('faq_categories')
  }
}

module.exports = FaqCategoriesSchema
