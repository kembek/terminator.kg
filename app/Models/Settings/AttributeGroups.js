'use strict'

const Model = use('Model')
const Exceptions = use('App/Exceptions/BasicException')
const Env = use('Env')

/**
 * @swagger
 * definitions:
 *   AttributeGroups:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *
 */
class AttributeGroups extends Model {
  static get table() {
    return 'attribute_groups'
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

module.exports = AttributeGroups
