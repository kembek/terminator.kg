'use strict'

const Model = use('Model')

class User extends Model {
  
  static get table() {
    return 'users'
  }

  static boot() {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     *
     * Look at `app/Models/Hooks/User.js` file to
     * check the hashPassword method
     */
    this.addHook('beforeCreate', 'User.hashPassword')
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany('AUTHS/Token')
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

  productVideo() {
    return this.hasMany('PRODUCTS/Video', 'id', 'user_id')
  }

  productCategories() {
    return this.hasMany('PRODUCTS/Category', 'id', 'user_id')
  }
}

module.exports = User
