'use strict'

const Basic = use('App/Models/Basic')
/**
 * @swagger
 * definitions:
 *   Post:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *       meta_keywords:
 *         type: string
 *       meta_description:
 *         type: string
 *       body:
 *         type: string
 *       link:
 *         type: string
 *       is_status:
 *         type: boolean
 */
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
