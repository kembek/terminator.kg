'use strict'

const Model = use('Model')
const Exceptions = use('App/Exceptions/BasicException')
const Env = use('Env')

/**
 * @swagger
 * definitions:
 *   Attribute:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *       group_id:
 *         type: integer
 *
 */
class Attribute extends Model {
  static get table() {
    return 'attributes'
  }

  static get createdAtColumn() {
    return undefined
  }

  static get updatedAtColumn() {
    return undefined
  }

  attributes() {
    return this.belongsTo('SETTINGS/AttributeGroups', 'group_id', 'id')
  }

  exceptions(message, status, code) {
      if (Env.NODE_ENV != 'production')
          throw new Exceptions(message, status, code)
  }
}

module.exports = Attribute
