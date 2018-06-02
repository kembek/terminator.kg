'use strict'

const Basic = use('App/Models/Basic')

/**
 * @swagger
 * definitions:
 *   StoreProductCategory:
 *     type: object
 *     required:
 *       - user_id
 *       - thumbnail
 *       - title
 *       - is_status
 *     properties:
 *       parent_id:
 *         type: integer
 *       user_id:
 *         type: integer
 *       sort:
 *         type: integer
 *       thumbnail:
 *         type: string
 *       title:
 *         type: string
 *       meta_keywords:
 *         type: string
 *       meta_description:
 *         type: string
 *       is_status:
 *         type: boolean
 *   ProductCategory:
 *     allOf:
 *       - $ref: '#/definitions/StoreProductCategory'
 *       - type: object
 *         properties:
 *           id:
 *             type: number
 */
class Category extends Basic {
  static get table() {
    return 'product_categories'
  }

  products() {
    return this.hasMany('PRODUCTS/Product', 'id', 'category_id')
  }

  user() {
    return this.belongsTo('AUTHS/User', 'user_id', 'id')
  }

  parent() {
    return this.belongsTo('PRODUCTS/Category', 'parent_id', 'id')
  }
}

module.exports = Category
