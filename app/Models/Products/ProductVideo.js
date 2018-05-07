'use strict'

const Model = use('Model')

class ProductVideo extends Model {
  static get table() {
    return 'product_video_reviews'
  }

  static get primaryKey() {
    return null
  }

  static get incrementing() {
    return false
  }

  product() {
    return this.belongsTo('PRODUCTS/Product', 'product_id', 'id')
  }

  user() {
    return this.belongsTo('AUTHS/User', 'user_id', 'id')
  }

}

module.exports = ProductVideo
