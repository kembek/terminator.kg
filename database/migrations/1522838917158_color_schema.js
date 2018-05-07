'use strict'

const Schema = use('Schema')

class ColorSchema extends Schema {
  up () {
    this.create('colors', (table) => {
      table.increments()
      table.string('title').notNullable().unique('ui_colors_title')
      table.string('code').notNullable().unique('ui_colors_code')
    })
  }

  down () {
    this.dropIfExists('colors')
  }
}

module.exports = ColorSchema
