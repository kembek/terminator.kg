'use strict'

const Schema = use('Schema')

class FaqSchema extends Schema {
  up () {
    this.create('faqs', (table) => {
      table.increments()
      table.string('title').notNullable().unique('ui_faqs_title')
      table.string('link').notNullable().unique('ui_faqs_link')
      table.string('body').notNullable()
      table.integer('category_id').notNullable().unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('faqs')
  }
}

module.exports = FaqSchema
