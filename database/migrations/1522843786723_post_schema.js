'use strict'

const Schema = use('Schema')

class PostSchema extends Schema {
  up() {
    this.create('posts', (table) => {
      table.increments()
      table.integer('user_id').notNullable().unsigned()
      table.string('thumbnail').notNullable().unique()
      table.string('title').notNullable().unique('ui_posts_title')
      table.string('link').notNullable().unique('ui_posts_link')
      table.text('body', 'longtext').notNullable()
      table.string('meta_keywords')
      table.string('meta_description')
      table.boolean('is_status').notNullable().defaultTo(1)
      table.timestamps()
    })
  }

  down() {
    this.dropIfExists('posts')
  }
}

module.exports = PostSchema
