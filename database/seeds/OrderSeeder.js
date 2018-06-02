'use strict'

/*
|--------------------------------------------------------------------------
| OrderSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')
const _ = require('lodash')
const Product = use('PRODUCTS/Product')

class OrderSeeder {
  async run() {
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
    await Database.truncate('customers')
    await Database.truncate('order_products')
    await Database.truncate('orders')
    await Database.raw('SET FOREIGN_KEY_CHECKS = 1;')

    // Customers
    const customers = await Factory.model('ORDERS/Customer').createMany(50)

    // Get array id product
    const product = await Product.ids()

    // Order
    for (let i = 0; i < customers.length; ++i) {
      const order = await Factory.model('ORDERS/Order').makeMany(_.random(1, 7))

      for (let j = 0; j < order.length; ++j) {
        await customers[i].orders().save(order[j])

        // Product list
        let length = product.length
        let min = _.random(1, length),
          max = _.random(1, length)

        while (min >= max) {
          min = _.random(1, length)
          max = _.random(1, length)
        }

        while (min <= max) {
          let productPrice = await Product
            .query()
            .with('prices')
            .where('id', min)
            .fetch()

          let prodPrice = productPrice.toJSON()

          await order[j].orderProducts().attach([min], (row) => {
            if (row.product_id === min) {
              let quantity = _.random(1, 99)
              row.quantity = quantity
              row.total = quantity * prodPrice[0].prices[0].price
            }
          })

          ++min
        }
      }
    }

    console.log('Order seeds done!')
  }
}

module.exports = OrderSeeder
