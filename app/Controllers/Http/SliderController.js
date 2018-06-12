'use strict'

const Slider = use('App/Models/Sliders/Slider')
const Database = use('Database')
class SliderController {
    async index({request, response}){
        const items = await Slider.all()
        console.log({items})
        return {items}
    }
}

module.exports = SliderController
