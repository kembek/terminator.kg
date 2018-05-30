'use strict'

const Basic = use('App/Models/Basic')

class Category extends Basic {

  static get table() {
    return 'faq_categories'
  }

  user() {
     return this.belongsTo('AUTHS/User', 'user_id', 'id')
  }

  faqs() {
    return this.hasMany('FAQS/Faq', 'id', 'category_id')
  }

}

module.exports = Category
