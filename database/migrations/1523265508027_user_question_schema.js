'use strict'

const Schema = use('Schema')

class UserQuestionSchema extends Schema {
  up() {
    this.create('user_questions', (table) => {
      table.integer('user_id').notNullable().unsigned()
      table.integer('question_id').notNullable().unsigned()
      table.datetime('created_at')
    })
  }

  down() {
    this.drop('user_questions')
  }
}

module.exports = UserQuestionSchema
