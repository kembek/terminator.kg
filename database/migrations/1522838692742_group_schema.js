'use strict'

const Schema = use('Schema')

class GroupSchema extends Schema {
  up() {
    this.create('groups', (table) => {
      table.increments()
      table.string('title').notNullable().unique('ui_groups_title')
      table.string('description')
    })
  }

  down() {
    this.drop('groups')
  }
}

module.exports = GroupSchema
