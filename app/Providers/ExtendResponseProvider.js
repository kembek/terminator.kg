'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class ExtendResponseProvider extends ServiceProvider {

  boot() {
    const Response = use('Adonis/Src/Response')

    Response.macro('apiSuccess', function (data, meta, message) {
      this.status(200).json({
        status: 200,
        message: message || 'Succes',
        data: data,
        meta: meta
      })
    })

    Response.macro('apiCreated', function (item, meta) {
      this.status(201).json({
        status: 201,
        message: 'Created successfully',
        data: item,
        meta: meta
      })
    })

    Response.macro('apiUpdated', function (item, meta) {
      this.status(202).json({
        status: 202,
        message: 'Updated successfully',
        data: item,
        meta: meta
      })
    })

    Response.macro('apiDeleted', function (item, meta) {
      this.status(202).json({
        status: 202,
        message: 'Deleted successfully',
        data: null,
        meta: meta
      })
    })

    Response.macro('apiCollection', function (items, meta) {
      this.status(200).json({
        status: 200,
        message: 'Data retrieval successfully',
        data: items,
        meta: meta
      })
    })
  }

}

module.exports = ExtendResponseProvider