'use strict'

const Slider = use('SETTINGS/Slider')

class SliderSeeder {
  async run () {
    let slides = [{
      title: 'Подробнее',
      description: '<h2>Mi MIX 2</h2><h3>БЕЗРАМОЧНЫЙ СМАРТФОН</h3>',
      link: '/',
      img: 'slide1.jpg'
    }]
    await Slider.createMany(slides)
  }
}

module.exports = SliderSeeder
