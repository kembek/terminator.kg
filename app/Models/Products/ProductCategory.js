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
class ProductCategory extends Basic {
  static get table() {
    return 'product_category'
  }
  
  static get createdAtColumn() {
    return undefined
  }

  static get updatedAtColumn() {
    return undefined
  }

  product() {
    return this.hasMany('PRODUCTS/Product', 'id', 'product_id')
  }

  category() {
    return this.hasMany('PRODUCTS/Categories', 'id', 'category_id')
  }
}

module.exports = ProductCategory
