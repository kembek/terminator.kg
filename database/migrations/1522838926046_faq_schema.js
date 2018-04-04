'use strict'

const Schema = use('Schema')

class FaqSchema extends Schema {
  up () {
    this.create('faqs', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('faqs')
  }
}

module.exports = FaqSchema
