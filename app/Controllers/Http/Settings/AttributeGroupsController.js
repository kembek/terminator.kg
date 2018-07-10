'use strict'

const Attribute = use('SETTINGS/Attribute')
const AttributeGroups = use('SETTINGS/AttributeGroups')

class AttributeGroupsController {

  async index({
    response
  }) {
    let attributeGroups = await AttributeGroups.query().orderBy('id', 'ASC')
    for (var i = 0; i < attributeGroups.length; i++) {
      attributeGroups[i].attributes = await Attribute.query().where({
        group_id: attributeGroups[i].id
      }).select('id', 'title').orderBy('id', 'ASC')
    }

    return response.apiCollection(attributeGroups)
  }

  async show({
    response,
    params
  }) {
    let attributeGroups = await AttributeGroups.query().where({id: params.id}).orderBy('id', 'ASC')
    attributeGroups = attributeGroups[0]
      attributeGroups.attributes = await Attribute.query().where({
        group_id: attributeGroups.id
      }).select('id', 'title').orderBy('id', 'ASC')

    return response.apiCollection(attributeGroups)
  }

  async create({
    request,
    response
  }) {
    let data = request.only(['title'])
    try {
      const attributeGroups = await AttributeGroups.findOrCreate({
        title: data.title
      }, data)

      return response.apiCreated(attributeGroups)

    } catch (error) {
      new AttributeGroups().exceptions(error.message, error.status, error.code)
    }
  }


  async update({
    request,
    response,
    params,
    auth
  }) {
    let data = request.only(['title'])

    try {

      const attributeGroups = await AttributeGroups.findOrFail(params.id)
      attributeGroups.merge(data)
      await attributeGroups.save()

      return response.apiUpdated(attributeGroups)

    } catch (error) {
      new AttributeGroups().exceptions(error.message, error.status, error.code)
    }
  }

  async destroy({
    params,
    response
  }) {
    try {
      const attributeGroups = await AttributeGroups.findOrFail(params.id)

      await attributeGroups.delete()
      return response.apiDeleted(attributeGroups)
    } catch (error) {
      new AttributeGroups().exceptions(error.message, error.status, error.code)
    }
  }

}

module.exports = AttributeGroupsController
