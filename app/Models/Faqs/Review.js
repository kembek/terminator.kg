'use strict'

const Model = use('Model')

class Review extends Model {
  static get table() {
    return 'reviews'
  }
}

module.exports = Review
