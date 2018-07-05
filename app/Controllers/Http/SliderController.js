'use strict'

const Slider = use('SETTINGS/Slider')
const Images = use('App/Controllers/Http/ImagesController')

class SliderController {

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
        data.thumbnail = await Images.image(request, 'slider')

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
        data.thumbnail = await Images.image(request, 'slider')

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
