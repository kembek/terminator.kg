'use strict'

const Schema = use('Schema')

class CategoryPostSchema extends Schema {
  up () {
    this.create('categories_posts', (table) => {
      table.primary(['category_id', 'post_id'])
      table.integer('category_id').notNullable().unsigned()
      table.integer('post_id').notNullable().unsigned()
    })
  }

  down () {
    this.drop('category_posts')
  }
}

module.exports = CategoryPostSchema
