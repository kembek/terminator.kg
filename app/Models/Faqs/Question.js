'use strict'

const Model = use('Model')

class Question extends Model {
  static get table() {
    return 'questions'
  }
}

module.exports = Question
