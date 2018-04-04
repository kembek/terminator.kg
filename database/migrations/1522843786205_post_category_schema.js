'use strict'

const Schema = use('Schema')

class PostCategorySchema extends Schema {
  up () {
    this.create('post_categories', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('post_categories')
  }
}

module.exports = PostCategorySchema
