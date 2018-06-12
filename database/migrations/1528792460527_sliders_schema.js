'use strict'

const Schema = use('Schema')

class SlidersSchema extends Schema {
  up () {
    this.create('sliders', (table) => {
      table.increments()
      table.string('title')
      table.string('description')
      table.string('link')
      table.string('img')
      table.timestamps()
    })
  }

  down () {
    this.drop('sliders')
  }
}

module.exports = SlidersSchema
