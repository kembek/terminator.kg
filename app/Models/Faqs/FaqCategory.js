'use strict'

const Basic = use('App/Models/Basic')

class FaqCategory extends Basic {
  user() {
     return this.belongsTo('AUTHS/User', 'user_id', 'id')
  }

  faqs() {
    return this.hasMany('FAQS/Faq', 'id', 'category_id')
  }

}

module.exports = FaqCategory
