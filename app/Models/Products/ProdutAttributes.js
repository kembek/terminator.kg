'use strict'

const Model = use('Model')
const Exceptions = use('App/Exceptions/BasicException')
const Env = use('Env')

class ProductAttributes extends Model {
  static get table() {
    return 'product_attributes'
  }

  static get createdAtColumn() {
    return undefined
  }

  static get updatedAtColumn() {
    return undefined
  }

  exceptions(message, status, code) {
      if (Env.NODE_ENV != 'production')
          throw new Exceptions(message, status, code)
  }
  


}

module.exports = ProductAttributes
