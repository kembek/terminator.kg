'use strict'

const Schema = use('Schema')

class SlidersSchema extends Schema {
  up () {
    this.create('sliders', (table) => {
      table.increments()
      table.string('title')
      table.string('description')
      table.string('link')
      table.string('thumbnail')
      table.integer('sort').notNullable().unsigned().defaultTo(0)
      table.boolean('is_local').defaultTo(true)
      table.boolean('is_status').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('sliders')
  }
}

module.exports = SlidersSchema
