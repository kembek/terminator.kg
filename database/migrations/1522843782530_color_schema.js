'use strict'

const Schema = use('Schema')

class ColorSchema extends Schema {
  up () {
    this.create('colors', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('colors')
  }
}

module.exports = ColorSchema
