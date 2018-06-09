'use strict'

class Rule {

  constructor(model) {
    this.model = model
  }

  unique(column, min = 3, max = 255) {
    return `required|string|min:${min}|max:${max}|unique:${this.model}, ${column}`
  }

  uniqueUp(column, min = 3, max = 255) {
    return `${this.unique(column, min, max)}, id, `
  }

  meta(max = 255) {
    return `string|max:${max}`
  }

  int(isReq = false) {
    if(isReq) {
      return 'required|integer'
    }

    return 'integer'
  }

  bool() {
    return 'required|boolean'
  }

}

module.exports = Rule
