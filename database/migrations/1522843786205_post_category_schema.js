'use strict'

const Schema = use('Schema')

class PostCategorySchema extends Schema {
  up () {
    this.create('post_categories', (table) => {
      table.increments()
      table.string('title').notNullable().unique('ui_post_categories_title')
      table.string('link').notNullable().unique('ui_post_categories_link')
      table.integer('parent_id').notNullable().unsigned().defaultTo(0)
      table.integer('user_id').notNullable().unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('post_categories')
  }
}

module.exports = PostCategorySchema
