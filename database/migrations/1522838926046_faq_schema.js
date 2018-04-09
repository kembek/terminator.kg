'use strict'

const Schema = use('Schema')

class FaqSchema extends Schema {
  up () {
    this.create('faqs', (table) => {
      table.increments()
      table.integer('category_id').notNullable().unsigned()
      table.integer('user_id').notNullable().unsigned()
      table.integer('sort').notNullable().unsigned().defaultTo(0)
      table.string('title').notNullable().unique('ui_faqs_title')
      table.string('link').notNullable().unique('ui_faqs_link')
      table.text('body').notNullable()
      table.string('meta_keywords').notNullable()
      table.string('meta_desription').notNullable()
      table.boolean('is_status').notNullable().defaultTo(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('faqs')
  }
}

module.exports = FaqSchema
