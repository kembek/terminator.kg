'use strict'

const Model = use('Model')

class Color extends Model {
  static get table() {
    return 'colors'
  }

  static get createdAtColumn() {
    return undefined
  }

  static get updatedAtColumn() {
    return undefined
  }
}

module.exports = Color
