'use strict'

const Model = use('App/Models/Basic')

/**
 * @swagger
 * definitions:
 *   Menu:
 *     type: object
 *     properties:
 *       parent_id:
 *         type: integer
 *       user_id:
 *         type: integer
 *       title:
 *         type: string
 *       link:
 *         type: string
 *       is_local:
 *         type: boolean
 *       is_status:
 *         type: boolean
 *       sort:
 *         type: integer
 *
 */
class Menu extends Model {
  // categories() {
  //   return this.belongsTo('PRODUCTS/Categories', 'link', 'link')
  // }
}


module.exports = Menu
