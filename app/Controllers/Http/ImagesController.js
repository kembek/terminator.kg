'use strict'

const Exceptions = use('App/Exceptions/BasicException')
const Env = use('Env')
const Helpers = use('Helpers')
const fs = require('fs');

class ImagesController {

  static async image(request, dir) {
    const image = request.file('file', {
      type: ['image'],
      size: '10mb',
      allowedExtensions: ['jpg', 'png', 'jpeg', 'svg']
    })

    if (!image) {
      await this.exceptions('This field required!!!', 400)
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
    const image = request.file('files', {
      type: ['image'],
      size: '10mb',
      allowedExtensions: ['jpg', 'png', 'jpeg', 'svg']
    })

    if (!image) {
      await this.exceptions('This field required!!!', 400)
    }

    let images_name = []
    try {
      await image.moveAll(Helpers.resourcesPath('static/images/' + dir), (file) => {
        images_name.push(`${new Date().getTime()}.${file.clientName}`)
        return {
          name: `${new Date().getTime()}.${file.clientName}`
        }
      })
    } catch (error) {}

    return images_name
  }

  static base64(base64Image, dir, name) {
    base64Image = base64Image.split(';base64,').pop();

    fs.writeFile(Helpers.resourcesPath(`static/images/${dir}/${name}.jpg`), base64Image, {
      encoding: 'base64'
    }, function (err) {})

    return name + '.jpg'
  }

  static async delete(dir, name) {
    try {
      fs.unlink(Helpers.resourcesPath(`static/images/${dir}/${name}`))
    } catch (error) {
      console.log(error)
    }
  }

  static exceptions(message, status, code) {
    if (Env.NODE_ENV != 'production')
      throw new Exceptions(message, status, code)
  }
}

module.exports = ImagesController
