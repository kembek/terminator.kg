'use strict'

const Slider = use('SETTINGS/Slider')
const Helpers = use('Helpers')

class SliderController {

    async image(request) {
        const image = request.file('file', {
            type: ['image'],
            size: '10mb',
            allowedExtensions: ['jpg', 'png', 'jpeg', 'svg']
        })
        if (!image) {
            await new Slider().exceptions('This field required!!!', 400)
        }

        let image_name = `${new Date().getTime()}-${image.clientName}`

        await image.move(Helpers.resourcesPath('static/images/slider'), {
            name: image_name
        })

        if (!image.moved()) {
            return image.error()
        }

        return image_name
    }


    async create({
        request,
        response
    }) {
        let data = request.only(['title', 'is_status', 'is_local',
            'thumbnail', 'link', 'sort', 'description'
        ])

        try {
            try {
                data.sort = JSON.parse(data.sort)
                data.is_status = JSON.parse(data.is_status)
                data.is_local = JSON.parse(data.is_local)
                data.thumbnail = JSON.parse(data.thumbnail)
                if (data.link == null || data.link == '')
                    delete data.link
            } catch (error) {}


            if (data.thumbnail != null && data.thumbnail != '')
                data.thumbnail = await this.image(request)

            const slider = await Slider.findOrCreate({
                title: data.title
            }, data)

            return response.apiCreated(slider)

        } catch (error) {
            new Slider().exceptions(error.message, error.status, error.code)
        }
    }


    async update({
        request,
        response,
        params,
        auth
    }) {
        let data = request.only(['title', 'is_status', 'is_local',
            'thumbnail', 'link', 'sort', 'description'
        ])

        try {
            try {
                data.sort = JSON.parse(data.sort)
                data.is_status = JSON.parse(data.is_status)
                data.is_local = JSON.parse(data.is_local)
                data.thumbnail = JSON.parse(data.thumbnail)
                if (data.link == null || data.link == '')
                    delete data.link
            } catch (error) {}

            const slider = await Slider.findOrFail(params.id)
            if (data.thumbnail != null && data.thumbnail != slider.thumbnail)
                data.thumbnail = await this.image(request)

            slider.merge(data)
            await slider.save()

            return response.apiUpdated(slider)

        } catch (error) {
            new Slider().exceptions(error.message, error.status, error.code)
        }
    }

    async destroy({
        request,
        response,
        params,
        auth
    }) {
        try {
            const slider = await Slider.findOrFail(params.id);

            await slider.delete();

            return response.apiDeleted(slider);
        } catch (error) {
            new Slider().exceptions(error.message, error.status, error.code);
        }
    }

    async index({
        request,
        response
    }) {
        const sliders = await Slider.query()
            .where({
                is_status: true
            })
            .orderBy("sort", "ASC");

        return response.apiCollection(sliders);
    }

    async all({
        response
    }) {
        const slider = await Slider.query().orderBy('sort', 'ASC')

        return response.apiCollection(slider)
    }
}

module.exports = SliderController
