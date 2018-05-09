'use strict'

const Schema = use('Schema')

class ReviewSchema extends Schema {
  up() {
    this.create('reviews', (table) => {
      table.increments()
      table.string('email', 80).notNullable()
      table.string('img')
      table.string('username', 160).notNullable()
      table.string('description').notNullable()
      table.boolean('is_status').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.dropIfExists('reviews')
  }
}

module.exports = ReviewSchema
