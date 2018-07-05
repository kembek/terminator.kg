'use strict'

const Exceptions = use('App/Exceptions/BasicException')
const Env = use('Env')
const Helpers = use('Helpers')

class ImagesController {

  static async image(request, dir) {
    const image = request.file('file', {
      type: ['image'],
      size: '10mb',
      allowedExtensions: ['jpg', 'png', 'jpeg', 'svg']
    })

    if (!image) {
      await new this.exceptions('This field required!!!', 400)
    }

    let image_name = `${new Date().getTime()}-${image.clientName}`

    await image.move(Helpers.resourcesPath('static/images/' + dir), {
      name: image_name
    })

    if (!image.moved()) {
      return image.error()
    }

    return image_name
  }

  static async images(request, dir) {
    const image = request.file('file', {
      type: ['image'],
      size: '10mb',
      allowedExtensions: ['jpg', 'png', 'jpeg', 'svg']
    })

    if (!image) {
      await new this.exceptions('This field required!!!', 400)
    }

    let image_name = `${new Date().getTime()}-${image.clientName}`

    await image.moveAll(Helpers.resourcesPath('static/images/' + dir), {
      name: image_name
    })

    if (!image.moveAll()) {
      return image.error()
    }

    return image_name
  }

  static exceptions(message, status, code) {
    if (Env.NODE_ENV != 'production')
      throw new Exceptions(message, status, code)
  }
}

module.exports = ImagesController
