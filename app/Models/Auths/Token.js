'use strict'

const Model = use('Model')

class Token extends Model {
  static get table() {
    return 'tokens'
  }
  static get createdAtColumn() {
    return undefined
  }

  static get updatedAtColumn() {
    return undefined
  }
}

module.exports = Token
