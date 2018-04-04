'use strict'

const Schema = use('Schema')

class PostSchema extends Schema {
  up() {
    this.create('posts', (table) => {
      table.increments()
      table.string('title').notNullable().unique('ui_posts_title')
      table.string('link').notNullable().unique('ui_posts_link')
      table.text('body').notNullable()
      table.integer('category_id').notNullable().unsigned()
      table.integer('user_id').notNullable().unsigned()
      table.timestamps()
    })
  }

  down() {
    this.drop('posts')
  }
}

module.exports = PostSchema
