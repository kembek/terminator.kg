'use strict'

const Schema = use('Schema')

class AccessSchema extends Schema {
  up () {
    this.create('accesses', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('accesses')
  }
}

module.exports = AccessSchema
