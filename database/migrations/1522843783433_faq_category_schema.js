'use strict'

const Schema = use('Schema')

class FaqCategorySchema extends Schema {
  up () {
    this.create('faq_categories', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('faq_categories')
  }
}

module.exports = FaqCategorySchema
