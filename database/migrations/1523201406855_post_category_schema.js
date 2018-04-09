'use strict'

const Schema = use('Schema')

class PostCategorySchema extends Schema {
  up() {
    this.create('post_categories', (table) => {
      table.increments()
      table.integer('user_id').notNullable().unsigned()
      table.integer('parent_id').notNullable().unsigned()
      table.string('title').notNullable().unique('ui_posts_title')
      table.string('link').notNullable().unique('ui_posts_link')
      table.string('meta_keywords').notNullable()
      table.string('meta_desription').notNullable()
      table.boolean('is_status').notNullable().defaultTo(1)
      table.timestamps()
    })
  }

  down() {
    this.drop('post_categories')
  }
}

module.exports = PostCategorySchema
