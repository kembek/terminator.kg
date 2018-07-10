'use strict'

const Attribute = use('SETTINGS/Attribute')
const AttributeGroups = use('SETTINGS/AttributeGroups')

class AttributeController {

  async index({
    response
  }) {
    let attribute = await Attribute.query().orderBy('id', 'ASC')

    for (var i = 0; i < attribute.length; i++) {
      attribute[i].group = await AttributeGroups.query().where({
        id: attribute[i].group_id
      }).select('id', 'title')
      
      attribute[i].group = attribute[i].group[0]
    }

    return response.apiCollection(attribute)
  }

  async create({
    request,
    response
  }) {
    let data = request.only(['title', 'group_id'])
    try {
      let attribute = await Attribute.findOrCreate({
        title: data.title
      }, data)

      try {
        data.group_id = JSON.parse(data.group_id)
      } catch (error) {}

        attribute.group = await AttributeGroups.query().where({
          id: attribute.group_id
        }).select('id', 'title')

        attribute.group = attribute.group[0]


      return response.apiCreated(attribute)

    } catch (error) {
      new Attribute().exceptions(error.message, error.status, error.code)
    }
  }


  async update({
    request,
    response,
    params,
    auth
  }) {
    let data = request.only(['title', 'group_id'])

    try {

      let attribute = await Attribute.findOrFail(params.id)

      try {
        data.group_id = JSON.parse(data.group_id)
      } catch (error) {}

      attribute.merge(data)
      await attribute.save()

        attribute.group = await AttributeGroups.query().where({
          id: attribute.group_id
        }).select('id', 'title')

        attribute.group = attribute.group[0]

      return response.apiUpdated(attribute)

    } catch (error) {
      new Attribute().exceptions(error.message, error.status, error.code)
    }
  }

  async destroy({
    params,
    response
  }) {
    try {
      const attribute = await Attribute.findOrFail(params.id)

      await attribute.delete()
      return response.apiDeleted(attribute)
    } catch (error) {
      new Attribute().exceptions(error.message, error.status, error.code)
    }
  }

}

module.exports = AttributeController
