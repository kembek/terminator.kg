'use strict'

const Schema = use('Schema')

class ProductPriceSchema extends Schema {
  up() {
    this.create('product_prices', (table) => {
      table.integer('product_color_id').notNullable().unsigned().primary()
      table.decimal('price', 9, 2).notNullable().unsigned()
    })
  }

  down() {
    this.drop('product_prices')
  }
}

module.exports = ProductPriceSchema
