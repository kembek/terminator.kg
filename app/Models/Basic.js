'use strict'

const Model = use('Model')
const Exceptions = use('App/Exceptions/BasicException')
<<<<<<< HEAD

=======
>>>>>>> c63624db769a5d2782a34e324156a2ac99618f7a

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

<<<<<<< HEAD

=======
  exceptions(message, status, code) {
    throw new Exceptions(message, status, code)
  }
>>>>>>> c63624db769a5d2782a34e324156a2ac99618f7a
}

module.exports = Basic
