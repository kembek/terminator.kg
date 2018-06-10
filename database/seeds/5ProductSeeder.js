'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')
const _ = require('lodash')

class ProductSeeder {
  async run() {
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
    await Database.truncate('product_video_reviews')
    await Database.truncate('product_images')
    await Database.truncate('images')
    await Database.truncate('products')
    await Database.truncate('product_colors')
    await Database.truncate('product_categories')
    await Database.truncate('product_prices')
    await Database.raw('SET FOREIGN_KEY_CHECKS = 1;')

    // Categories
    const category = await Factory.model('PRODUCTS/Category').createMany(14)

    for (let i = 0; i < category.length; ++i) {

      // Make many Products
      let product = await Factory.model('PRODUCTS/Product').makeMany(_.random(1, 5), { user_id: 1 })

      for (let j = 0; j < product.length; ++j) {
        // Save products
        await category[i].products().save(product[j])

        // Product videos
        let productVideo = await Factory.model('PRODUCTS/Video').makeMany(_.random(1, 4), { user_id: 1 })
        await product[j].productVideo().saveMany(productVideo)

        // Product camera images
        let productImage = await Factory.model('PRODUCTS/ProductImage').makeMany(_.random(4, 9))
        await product[j].productImages().saveMany(productImage)

        // Product color
        let arrColor = [],
          min = _.random(1, 6),
          max = _.random(1, 6)

        while (min >= max) {
          min = _.random(1, 6)
          max = _.random(1, 6)
        }

        for (let k = min; k <= max; ++k) {

          let productColor = await product[j].colors().attach([k])
          let price = await Factory.model('PRODUCTS/Price').make()

          await productColor[0].prices().save(price)

          let productImage = await Factory.model('PRODUCTS/Image').makeMany(_.random(3, 4))
          await productColor[0].images().saveMany(productImage)
        }
      }
    }

    console.log('Product seeds done!')
  }
}

module.exports = ProductSeeder
