'use strict'

const Model = use('Model')

class StockStatus extends Model {
  static get table() {
    return 'stock_statuses'
  }

  static get createdAtColumn() {
    return undefined
  }

  static get updatedAtColumn() {
    return undefined
  }

  products() {
    return this.hasMany('PRODUCTS/Product', 'id', 'stock_status_id')
  }
}

module.exports = StockStatus
