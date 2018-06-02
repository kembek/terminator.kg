'use strict'

const Basic = use('App/Models/Basic')

class Post extends Basic {
  static get table() {
    return 'posts'
  }

  category() {
    return this.belongsToMany('POSTS/Category', 'post_id', 'category_id', 'id', 'id')
      .pivotModel('POSTS/CategoryPost')
  }

  user() {
    return this.belongsTo('AUTHS/User', 'user_id', 'id')
  }
}

module.exports = Post
