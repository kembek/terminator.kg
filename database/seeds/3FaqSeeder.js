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

class FaqSeeder {
  async run() {
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
    await Database.truncate('faq_categories')
    await Database.truncate('faqs')
    await Database.raw('SET FOREIGN_KEY_CHECKS = 1;')

    const category = await Factory.model('FAQS/FaqCategory').create({ user_id: 1 })

    const faq = await Factory.model('FAQS/Faq').makeMany(5, { user_id: 1 })
    const categories = await category.faqs().saveMany(faq)
    console.log('Faqs seeds done!!!')
  }
}

module.exports = FaqSeeder
