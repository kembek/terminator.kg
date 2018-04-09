'use strict'

const Schema = use('Schema')

class ProductVideoReviewSchema extends Schema {
  up() {
    this.create('product_video_reviews', (table) => {
      table.primary(['product_id', 'url'])
      table.integer('product_id').notNullable().unsigned()
      table.integer('user_id').notNullable().unsigned()
      table.string('url').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('product_video_reviews')
  }
}

module.exports = ProductVideoReviewSchema
