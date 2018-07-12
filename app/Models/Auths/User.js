'use strict'

const Model = use('Model')

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 */

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeCreate', 'User.hashPassword')
    this.addHook('beforeUpdate', 'User.hashPassword')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  questions() {
    return this.belongsToMany('USERS/Question')
      .pivotModel(use('USERS/UserQuestion'))
  }

  customers() {
    return this.belongsToMany('ORDERS/Customer')
      .pivotModel(use('USERS/UserCustomer'))
  }

  orders() {
    return this.belongsToMany('ORDERS/Order')
      .pivotModel(use('USERS/UserOrder'))
  }

  reviews() {
    return this.belongsToMany('USERS/Review')
      .pivotModel(use('USERS/UserReview'))
  }

  group() {
    return this.belongsTo('AUTHS/Group', 'group_id', 'id')
  }

  faqs() {
    return this.hasMany('FAQS/Faq', 'id', 'user_id')
  }

  faqCategories() {
    return this.hasMany('FAQS/Category', 'id', 'user_id')
  }

  posts() {
    return this.hasMany('POSTS/Post', 'id', 'user_id')
  }

  postCategories() {
    return this.hasMany('POSTS/Category', 'id', 'user_id')
  }

  products() {
    return this.hasMany('PRODUCTS/Product', 'id', 'user_id')
  }

  productCategories() {
    return this.hasMany('PRODUCTS/Category', 'id', 'user_id')
  }
}

module.exports = User
