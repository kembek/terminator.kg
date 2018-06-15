'use strict'

const Schema = use('Schema')

class MenuSchema extends Schema {
  up() {
    this.create('menus', (table) => {
      table.increments()
      table.integer('parent_id').unsigned()
      table.integer('user_id').notNullable().unsigned()
      table.string('title').notNullable().unique('ui_menus_title')
      table.string('link').notNullable().unique('ui_menus_link')
      table.string('img')
      table.integer('sort').notNullable().unsigned().defaultTo(0)
      table.boolean('is_local').defaultTo(true)
      table.boolean('is_status').defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.dropIfExists('menus')
  }
}

module.exports = MenuSchema
