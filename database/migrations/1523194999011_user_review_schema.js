'use strict'

const Schema = use('Schema')

class UserReviewSchema extends Schema {
  up () {
    this.create('user_reviews', (table) => {
      table.integer('user_id').notNullable().unsigned()
      table.integer('review_id').notNullable().unsigned()
      table.datetime('created_at').notNullable()
    })
  }

  down () {
    this.dropIfExists('user_reviews')
  }
}

module.exports = UserReviewSchema
