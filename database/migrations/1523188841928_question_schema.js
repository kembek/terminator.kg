'use strict'

const Schema = use('Schema')

class QuestionSchema extends Schema {
  up() {
    this.create('questions', (table) => {
      table.increments()
      table.string('email', 80).notNullable()
      table.string('question').notNullable()
      table.string('username', 80).notNullable()
      table.boolean('is_status').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('questions')
  }
}

module.exports = QuestionSchema
