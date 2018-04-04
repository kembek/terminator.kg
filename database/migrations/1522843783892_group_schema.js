'use strict'

const Schema = use('Schema')

class GroupSchema extends Schema {
  up () {
    this.create('groups', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('groups')
  }
}

module.exports = GroupSchema
