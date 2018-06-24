'use strict'

/*
|--------------------------------------------------------------------------
| SliderSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

const Slider = use('SLIDERS/Slider')

class SliderSeeder {
  async run () {
    let slides = [{
      title: 'Подробнее',
      description: '<h2>Mi MIX 2</h2><h3>БЕЗРАМОЧНЫЙ СМАРТФОН</h3>',
      link: '/products/xiaomi-mi-mix-2-6-gb-64-gb-global-version',
      img: 'slide1.jpg'
    }]
    await Slider.createMany(slides)
  }
}

module.exports = SliderSeeder
