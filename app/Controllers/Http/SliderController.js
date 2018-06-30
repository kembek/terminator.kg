'use strict'

const Slider = use('SETTINGS/Slider')

class SliderController {
    async index({request, response}){
        const items = await Slider.all()
        return {items}
    }
}

module.exports = SliderController
