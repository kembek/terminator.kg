'use strict'

const Schema = use('Schema')

class MenuSchema extends Schema {
  up() {
    this.create('menus', (table) => {
      table.increments()
      table.integer('parent_id').notNullable().unsigned()
      table.integer('user_id').notNullable().unsigned()
      table.string('link').notNullable().unique('ui_menus_link')
      table.integer('sort').notNullable().unsigned().defaultTo(0)
    })
  }

  down() {
    this.drop('menus')
  }
}

module.exports = MenuSchema
