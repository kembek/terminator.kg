'use strict'

const Category = use('PRODUCTS/Category')
const Helpers = use('Helpers')
const { validate } = use('Validator')
const Drive = use('Drive')

class CategoryController {

  async index({ response }) {
    const category = await Category.query().where({
      parent_id: null,
      is_status: true
    })

    async function recCat(object) {
      const childs = await Category.query().where({
        parent_id: object.id,
        is_status: true
      })

      if (childs != false) {
        object.childs = []
        for (var i = 0; i < childs.length; i++) {
          childs[i].childs = await recCat(childs[i])
          object.childs.push(childs[i])
        }
      }
      return object.childs
    }

    let arrCat = []

    for (var i = 0; i < category.length; i++) {
      category[i].childs = await recCat(category[i])
      arrCat.push(category[i])
    }

    return response.apiCollection(arrCat)
  }
  async category() {

  }

  async create() {

  }

  async image(request) {
    const image = request.file('thumbnail', {
      type: ['image'],
      size: '2mb',
      allowedExtensions: ['jpg', 'png', 'jpeg', 'svg']
    })

    if (!image) {
      new Category().exceptions('This field required!!!', 400)
    }

    const exists = await Drive.exists(`resources/image/${image.clientName}`)

    if (exists) {
      return `resources/image/${image.clientName}`
    }

    await image.move(Helpers.resourcesPath('image'), {
      name: image.clientName
    })

    if (!image.moved()) {
      return image.error()
    }

    return `resources/image/${image.clientName}`
  }

  async store({ request, response, auth }) {

    let data = request.only(['parent_id', 'user_id', 'sort', 'title', 'meta_keywords', 'meta_description', 'is_status'])
    console.log(data)
    data.thumbnail = await this.image(request)

    const validation = await validate(data, {
      thumbnail: `required|string|min:3|max:255|unique:product_categories, thumbnail`
    })

    if (validation.fails()) {
      return validation.messages()
    }

    try {
      const category = await Category.findOrCreate(
        { title: data.title }, data)

      return response.apiSuccess(category)
    } catch (error) {
      new Category().exceptions(error.message, error.status, error.code)
    }
  }

  async show() {
  }

  async edit() {
  }

  async update({ request, response, params, auth }) {
    const data = request.only(['parent_id', 'user_id', 'sort', 'thumbnail', 'title', 'meta_keywords', 'meta_description', 'is_status'])

    try {
      const category = await Category.findOrFail(params.id)
      category.merge(data)
      await category.save()

      return response.apiUpdated(category)
    } catch (error) {
      new Category().exceptions(error.message, error.status, error.code)
    }
  }

  async destroy({ params, request, response, auth }) {
    try {
      const category = await Category.findOrFail(params.id)

      const product = await category.product().fetch()
      await product.productVideo().delete()
      await product.productImages().delete()
      await product.prices().delete()
      await product.productColors().delete()

      await category.delete()
      return response.apiDeleted(category)
    } catch (error) {
      new Category().exceptions(error.message, error.status, error.code)
    }
  }

}

module.exports = CategoryController
