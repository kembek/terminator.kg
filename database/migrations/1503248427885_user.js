'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments()
      table.integer('group_id').notNullable().unsigned()
      table.string('username', 80).notNullable().unique('ui_users_username')
      table.string('email', 80).notNullable().unique('ui_users_email')
      table.string('password', 60).notNullable()
      table.boolean('is_status').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
