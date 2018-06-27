'use strict'

const Product = use('PRODUCTS/Product')
const Color = use('PRODUCTS/ProductColor')
const Helpers = use('Helpers')

class ProductController {
  async index({ request, response }) {
    const product = await Product.all()

    return response.apiCollection(product)
  }
  async product({ request, response }) {

    let { link } = params
    const product = await Product.query().where({
      link: link
    })

    return response.apiCollection(product)
  }

  async create() {

  }

  async image(request) {
    console.log('start')
    const image = request.file('file', {
      type: ['image'],
      size: '2mb',
      allowedExtensions: ['jpg', 'png', 'jpeg', 'svg']
    })
    if (!image) {
      await new Categories().exceptions('This field required!!!', 400)
    }

    let image_name = `${new Date().getTime()}-${image.clientName}.${image.subtype}`

    await image.move(Helpers.resourcesPath('static/images'), {
      name: image_name
    })

    console.log(image)
    if (!image.moved()) {
      return image.error()
    }

    return image_name
  }

  async store({ request, response, auth }) {
    const data = request.only(['stock_status_id', 'thumbnail', 'title', 'description', 'information', 'meta_keywords', 'meta_description', 'is_hit', 'is_recommend', 'is_status', 'user_id'])

    try {
      const product = await Product.findOrCreate({ title: data.title }, data)

      return response.apiCreated(product)
    } catch (error) {
      new Product().exceptions(error.message, error.status, error.code)
    }
  }

  async show({ params, response }) {
    let {
      link
    } = params
    let product = await Product.query().where({
      link: link
    }).select('id','stock_status_id', 'user_id', 'thumbnail', 'products.title', 'link', 'description', 'information', 'meta_keywords', 'meta_desription', 'is_hit', 'is_recommend', 'created_at', 'updated_at')


    if (product != false)
    {
      product = product[0]
      product.prices = await Color.query().where({
        product_id: product.id
      })
      .innerJoin('product_prices', 'product_prices.product_color_id', 'product_colors.id')
      .orderBy('product_prices.price', 'ASC').with('color').with('images').fetch()
      return response.apiCollection(product)
    }

    return response.status(404).send({
      status: 404,
      message: "Not Found"
    })
  }

  async edit() {
  }

  async update({ request, response, params, auth }) {
    const data = request.all()

    try {
      const product = await Product.findOrFail(params.id)
      product.merge(data)
      await product.save()

      return response.apiUpdated(product)
    } catch (error) {
      new Product().exceptions(error.message, error.status, error.code)
    }
  }

  async destroy({ request, response, params, auth }) {
    try {

      const product = await Product.findOrFail(params.id)

      console.log(0)
      await product.orderProducts().delete()
      console.log(1)
      await product.prices().delete()
      console.log(2)
      await product.colors().delete()
      console.log(3)
      await product.images().delete()
      console.log(4)
      await product.productImages().delete()
      console.log(5)
      await product.productVideo().delete()
      console.log(6)
      await product.delete()
      console.log(7)

      return response.apiDeleted()
    } catch (error) {
      new Product().exceptions(error.message, error.status, error.code)
    }
  }
}

module.exports = ProductController
