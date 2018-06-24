'use strict'

const Model = use('Model')
const Exceptions = use('App/Exceptions/BasicException')


class Basic extends Model {
  static boot() {
    super.boot()
    this.addHook('beforeCreate', 'Basic.link')
    this.addHook('beforeDelete', 'Basic.setForeignZero')
    this.addHook('afterDelete', 'Basic.setForeignOne')
  }

  exceptions(message, status, code) {
    throw new Exceptions(message, status, code)
  }
}

module.exports = Basic
