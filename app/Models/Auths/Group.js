'use strict'

const Model = use('Model')

class Group extends Model {

  static get table() {
    return 'groups'
  }

  static get createdAtColumn() {
    return undefined
  }

  static get updatedAtColumn() {
    return undefined
  }

  access() {
    return this.hasOne('AUTHS/Access')
  }

  users() {
    return this.hasMany('AUTHS/User', 'id', 'group_id')
  }
}

module.exports = Group
