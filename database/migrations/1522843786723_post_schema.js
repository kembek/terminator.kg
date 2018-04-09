'use strict'

const Schema = use('Schema')

class PostSchema extends Schema {
  up() {
    this.create('posts', (table) => {
      table.increments()
      table.integer('category_id').notNullable().unsigned()
      table.integer('user_id').notNullable().unsigned()
      table.string('thumbnail').notNullable().unique()
      table.string('title').notNullable().unique('ui_posts_title')
      table.string('link').notNullable().unique('ui_posts_link')
      table.text('body').notNullable()
      table.string('meta_keywords').notNullable()
      table.string('meta_desription').notNullable()
      table.boolean('is_status').notNullable().defaultTo(1)
      table.timestamps()
    })
  }

  down() {
    this.drop('posts')
  }
}

module.exports = PostSchema
