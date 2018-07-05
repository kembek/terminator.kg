'use strict'

const Product = use('PRODUCTS/Product')
const Categories = use('PRODUCTS/Categories')
const Color = use('PRODUCTS/ProductColor')
const Images = use('App/Controllers/Http/ImagesController')

class ProductController {
  async index({
    response
  }) {
    const product = await Product.all()

    return response.apiCollection(product)
  }

  async product({
    response,
    params
  }) {

    let {
      link
    } = params
    const product = await Product.query().where({
      link: link
    })

    return response.apiCollection(product)
  }

  async create({
    request,
    response
  }) {
    let data = request.only([
      'title',
      'photos',
      'video',
      'link',
      'is_status',
      'thumbnail',
      'description',
      'meta_keywords',
      'meta_description',
      'meta_keywords_video',
      'meta_description_video',
      'meta_keywords_atributes',
      'meta_description_atributes',
      'meta_keywords_review',
      'meta_description_review',
      'meta_keywords_photos',
      'meta_description_photos',
      'user_id'
    ])

    const categories = request.only(['categories'])
    try {
      try {
        data.sort = JSON.parse(data.sort)
        data.is_status = JSON.parse(data.is_status)
        data.thumbnail = JSON.parse(data.thumbnail)
        if (data.link == null || data.link == '')
          delete data.link
      } catch (error) {}


      if (data.thumbnail != null && data.thumbnail != '')
        data.thumbnail = await Images.image(request, 'products')

      const product = await Product.findOrCreate({
        title: data.title
      }, data)



      return response.apiCreated(product)

    } catch (error) {
      new Product().exceptions(error.message, error.status, error.code)
    }
  }

  async show({
    params,
    response
  }) {
    let {
      link
    } = params
    let product = await Product.query().where({
      link: link
    }).select(
      'id',
      'title',
      'photos',
      'video',
      'link',
      'is_status',
      'thumbnail',
      'description',
      'meta_keywords',
      'meta_description',
      'meta_keywords_video',
      'meta_description_video',
      'meta_keywords_atributes',
      'meta_description_atributes',
      'meta_keywords_review',
      'meta_description_review',
      'meta_keywords_photos',
      'meta_description_photos'
    );



    if (product != false) {
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

  async update({
    request,
    response,
    params
  }) {
    const data = request.only([
      'title',
      'photos',
      'video',
      'link',
      'is_status',
      'thumbnail',
      'description',
      'meta_keywords',
      'meta_description',
      'meta_keywords_video',
      'meta_description_video',
      'meta_keywords_atributes',
      'meta_description_atributes',
      'meta_keywords_review',
      'meta_description_review',
      'meta_keywords_photos',
      'meta_description_photos',
      'categories'
    ]);

    try {
      try {
        data.sort = JSON.parse(data.sort)
        data.is_status = JSON.parse(data.is_status)
      } catch (error) {}

      const product = await Product.findOrFail(params.id)
      if (data.thumbnail != null && data.thumbnail != product.thumbnail)
        data.thumbnail = await Images.image(request, 'products')

      product.merge(data)
      await product.save()

      return response.apiUpdated(product)

    } catch (error) {
      new Product().exceptions(error.message, error.status, error.code)
    }
  }

  async destroy({
    response,
    params
  }) {
    try {

      const product = await Product.findOrFail(params.id)

      await product.delete()

      return response.apiDeleted()
    } catch (error) {
      new Product().exceptions(error.message, error.status, error.code)
    }
  }
}

module.exports = ProductController
