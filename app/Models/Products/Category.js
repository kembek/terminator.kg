'use strict'

const Basic = use('App/Models/Basic')

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
