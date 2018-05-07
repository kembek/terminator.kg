'use strict'

const Schema = use('Schema')

class StocStatusSchema extends Schema {
  up() {
    this.create('stock_statuses', (table) => {
      table.increments()
      table.string('title').notNullable().unique('ui_stoc_statuses')
    })
  }

  down() {
    this.dropIfExists('stoc_statuses')
  }
}

module.exports = StocStatusSchema
