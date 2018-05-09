'use strict'

/*
|--------------------------------------------------------------------------
| 3FaqSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Database = use('Database')
const Factory = use('Factory')
const Faqs = use('FAQS/Faq')
const _ = require('lodash')

class FaqSeeder {
  async run() {
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
    await Database.truncate('faq_categories')
    await Database.truncate('faqs')
    await Database.raw('SET FOREIGN_KEY_CHECKS = 1;')

    const category = await Factory.model('FAQS/Category').create({ user_id: 1 })

    const faq = await Factory.model('FAQS/Faq').makeMany(5, { user_id: 1 })
    const categories = await category.faqs().saveMany(faq)

    await Factory.model('FAQS/Question').createMany(_.random(8, 12))
    await Factory.model('FAQS/Review').createMany(_.random(20, 28))

    console.log('Faqs seeds done!')
  }
}

module.exports = FaqSeeder
