'use strict'

class StockStatus {
  get rules() {
    if (this.ctx.method() === 'PUT') {
      return {
        title: `required|min:3|max:255|unique:stock_statuses, title`
      }
    }

    return {
      title: 'required|min:3|max:255|unique:stock_statuses, title'
    }
  }

  get sanitizationRules() {
    return {
      title: 'escape|strip_tags'
    }
  }
}

module.exports = StockStatus
