'use strict'

const Color = use('SETTINGS/Color')

class ColorController {
  async index({ request, response }) {
    const color = await Color.all()

    return response.apiCollection(color)
  }

  async create() {
  }

  async store({ request, response }) {
    const data = request.only(['title', 'code'])

    try {
      const color = await Color.findOrCreate({ title: data.title }, data)

      return response.apiCreated(color)
    } catch (error) {
      new Color().exceptions(error.message, error.status, error.code)
    }

  }

  async show() {
  }

  async edit() {
  }

  async update({ request, response, params }) {
    const data = request.only(['title', 'code'])

    try {
      const color = await Color.findOrFail(params.id)
      color.merge(data)

      await color.save()

      return response.apiUpdated(color)
    } catch (error) {
      new Color().exceptions(error.message, error.status, error.code)
    }
  }

  async destroy({ request, response, params }) {
    try {
      const color = await Color.findOrFail(params.id)

      await color.delete()

      return response.apiDeleted()
    } catch (error) {
      new Color().exceptions(error.message, error.status, error.code)
    }
  }
}

module.exports = ColorController
