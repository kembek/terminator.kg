'use strict'

const Schema = use('Schema')

class StocStatusSchema extends Schema {
  up() {
    this.create('stoc_statuses', (table) => {
      table.increments()
      table.string('title', 255).notNullable().unique()
    })
  }

  down() {
    this.drop('stoc_statuses')
  }
}

module.exports = StocStatusSchema
