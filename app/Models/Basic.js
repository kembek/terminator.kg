'use strict'

const Model = use('Model')

class Basic extends Model {
  static boot() {
    super.boot()
    this.addHook('beforeCreate', 'Basic.link')
  }
}

module.exports = Basic
