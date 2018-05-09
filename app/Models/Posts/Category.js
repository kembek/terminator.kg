'use strict'

const Basic = use('App/Models/Basic')

class Category extends Basic {
  static get table() {
    return 'post_categories'
  }

  posts() {
    return this.belongsToMany('POSTS/Post', 'category_id', 'post_id', 'id', 'id')
      .pivotModel('POSTS/CategoryPost')
  }

  user() {
    return this.belongsTo('AUTHS/User', 'user_id', 'id')
  }


}

module.exports = Category
