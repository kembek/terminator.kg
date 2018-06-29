'use strict'

const Basic = use('App/Models/Basic')

/**
 * @swagger
 * definitions:
 *   StoreProduct:
 *     type: object
 *     required:
 *       - stock_status_id
 *       - user_id
 *       - thumbnail
 *       - title
 *       - link
 *       - description
 *       - information
 *       - is_hit
 *       - is_recommend
 *       - is_status
 *     properties:
 *       stock_status_id:
 *         type: integer
 *       user_id:
 *         type: integer
 *       thumbnail:
 *         type: string
 *       title:
 *         type: string
 *       description:
 *         type: string
 *       information:
 *         type: string
 *       meta_keywords:
 *         type: string
 *       meta_description:
 *         type: string
 *       is_hit:
 *         type: boolean
 *       is_recommend:
 *         type: boolean
 *       is_status:
 *         type: boolean
 *   Product:
 *     allOf:
 *       - $ref: '#/definitions/StoreProduct'
 *       - type: object
 *         properties:
 *           id:
 *             type: number
 */
class Product extends Basic {
  static get table() {
    return 'products'
  }

  stockStatus() {
    return this.belongsTo('SETTINGS/StockStatus', 'stoc_status_id', 'id')
  }

  user() {
    return this.belongsTo('AUTHS/User', 'user_id', 'id')
  }

  categories() {
    return this.belongsTo('PRODUCTS/ProductCategory', 'product_id', 'id')
  }

  productImages() {
    return this.hasMany('PRODUCTS/ProductImage', 'id', 'product_id')
  }

  orderProducts() {
    return this.belongsToMany('ORDERS/Order')
      .pivotModel(use('ORDERS/OrderProduct'))
  }

  colors() {
    return this.belongsToMany('SETTINGS/Color')
      .pivotModel(use('PRODUCTS/ProductColor'))
  }

  images() {
    return this.manyThrough('PRODUCTS/ProductColor', 'images')
  }

  prices() {
    return this.manyThrough('PRODUCTS/ProductColor', 'prices')
  }

}

module.exports = Product
