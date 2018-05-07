'use strict'

const Model = use('Model')

class Access extends Model {

  static get table() {
    return 'accesses'
  }

  static get createdAtColumn() {
    return undefined
  }

  static get updatedAtColumn() {
    return undefined
  }

  group() {
    return this.belongsTo('AUTHS/Group')
  }
}

module.exports = Access
