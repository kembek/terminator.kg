'use strict'

/*
|--------------------------------------------------------------------------
| 1SettingSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')
const Color = use('SETTINGS/Color')
const StocStatus = use('SETTINGS/StockStatus')

class SettingSeeder {
  async run() {
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
    await Database.truncate('colors')
    await Database.truncate('stock_statuses')
    await Database.raw('SET FOREIGN_KEY_CHECKS = 1;')

    let arrColor = [
      {
        title: 'черный',
        code: '#000000'
      },
      {
        title: 'красный',
        code: '#FF0000'
      },
      {
        title: 'зеленый',
        code: '#008000'
      },
      {
        title: 'синей полночи',
        code: '#191970'
      },
      {
        title: 'морская волна',
        code: '#00FFFF'
      },
      {
        title: 'оранжевый',
        code: '#FFA500'
      }
    ]

    await Color.createMany(arrColor)

    let arrStockStatus = [
      { title: 'В наличии' },
      { title: 'Отсуствует' },
      { title: 'Склад' }
    ]

    await StocStatus.createMany(arrStockStatus)

    console.log('Setting seeds done!')
  }
}

module.exports = SettingSeeder
