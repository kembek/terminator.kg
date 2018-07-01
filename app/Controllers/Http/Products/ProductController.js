'use strict'

const Product = use('PRODUCTS/Product')
const Color = use('PRODUCTS/ProductColor')
const Helpers = use('Helpers')

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

    async image(request) {
        const image = request.file('file', {
            type: ['image'],
            size: '10mb',
            allowedExtensions: ['jpg', 'png', 'jpeg', 'svg']
        })
        if (!image) {
            await new Product().exceptions('This field required!!!', 400)
        }

        let image_name = `${new Date().getTime()}-${image.clientName}`

        await image.move(Helpers.resourcesPath('static/images/products'), {
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
        const data = request.only([
          'title',
          'photos',
          'video',
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
        try {
            try {
                data.sort = JSON.parse(data.sort)
                data.is_status = JSON.parse(data.is_status)
                data.thumbnail = JSON.parse(data.thumbnail)
                if (data.link == null || data.link == '')
                    delete data.link
            } catch (error) {}


            if (data.thumbnail != null && data.thumbnail != '')
                data.thumbnail = await this.image(request)

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
          ]);

        try {
            try {
                data.sort = JSON.parse(data.sort)
                data.is_status = JSON.parse(data.is_status)
            } catch (error) {}

            const product = await Product.findOrFail(params.id)
            if (data.thumbnail != null && data.thumbnail != product.thumbnail)
                data.thumbnail = await this.image(request)

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