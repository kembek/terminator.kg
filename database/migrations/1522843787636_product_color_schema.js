'use strict'

const Schema = use('Schema')

class ProductImageSchema extends Schema {
  up() {
    this.create('product_colors', (table) => {
      table.unique(['id', 'product_id', 'color_id'])
      table.integer('id').notNullable().unsigned()
      table.integer('product_id').notNullable().unsigned()
      table.integer('color_id').notNullable().unsigned()
      table.integer('sort').notNullable().unsigned().defaultTo(0)
    })

    this.raw('ALTER TABLE `product_colors` CHANGE `id` `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT;')
  }

  down() {
    this.dropIfExists('product_colors')
  }
}

module.exports = ProductImageSchema
