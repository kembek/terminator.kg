'use strict'

const Schema = use('Schema')

class MenuSchema extends Schema {
  up () {
    this.create('menus', (table) => {
      table.increments()
      table.string('title').notNullable().unique('ui_menus_title')
      table.string('link').notNullable().unique('ui_menus_link')
      table.integer('sort').notNullable().unsigned().defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('menus')
  }
}

module.exports = MenuSchema
