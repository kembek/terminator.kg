'use strict'

const Slider = use('SLIDERS/Slider')
class SliderController {
    async index({request, response}){
        const items = await Slider.all()
        return {items}
    }
}

module.exports = SliderController
