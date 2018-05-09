'use strict'

const Model = use('Model')

class CategoryPost extends Model {
  static get table() {
    return 'categories_posts'
  }

  static get primaryKey() {
    return null
  }

  static get incrementing() {
    return false
  }

  static get createdAtColumn() {
    return undefined
  }

  static get updatedAtColumn() {
    return undefined
  }

  category() {
    return this.belongsTo('POSTS/Category', 'category_id', 'id')
  }

  post() {
    return this.belongsTo('POSTS/Post', 'post_id', 'id')
  }
}

module.exports = CategoryPost
