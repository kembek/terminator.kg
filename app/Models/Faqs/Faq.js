'use strict'

const Basic = use('App/Models/Basic')

class Faq extends Basic {

  user() {
    return this.belongsTo('USERS/User', 'user_id', 'id')
  }

  category() {
    return this.belongsTo('FAQS/FaqCategories', 'category_id', 'id')
  }

}

module.exports = Faq
