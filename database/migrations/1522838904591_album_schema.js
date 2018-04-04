'use strict'

const Schema = use('Schema')

class AlbumSchema extends Schema {
  up () {
    this.create('albums', (table) => {
      table.increments()
      table.string('title').notNullable().unique('ui_albums_title')
      table.integer('parent_id').notNullable().unsigned()
      
    })
  }

  down () {
    this.drop('albums')
  }
}

module.exports = AlbumSchema
