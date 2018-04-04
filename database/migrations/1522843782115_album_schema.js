'use strict'

const Schema = use('Schema')

class AlbumSchema extends Schema {
  up () {
    this.create('albums', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('albums')
  }
}

module.exports = AlbumSchema
