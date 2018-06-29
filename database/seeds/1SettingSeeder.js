'use strict'

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
        title: 'Черный',
        code: '#000000'
      },
      {
        title: 'Красный',
        code: '#FF0000'
      },
      {
        title: 'Зеленый',
        code: '#008000'
      },
      {
        title: 'Синий',
        code: '#191970'
      },
      {
        title: 'Оранжевый',
        code: '#FFA500'
      }
    ]

    await Color.createMany(arrColor)

    let arrStockStatus = [
      { title: 'В наличии' },
      { title: 'Отсуствует' },
      { title: 'На складе' }
    ]

    await StocStatus.createMany(arrStockStatus)

    console.log('Setting seeds done!')
  }
}

module.exports = SettingSeeder
