'use strict'

const { sanitizor } = use('Validator')

const BasicHook = exports = module.exports = {}

BasicHook.link = async (objectInstance) => {
  if (objectInstance.title) {
    objectInstance.link = sanitizor.slug(objectInstance.title)
  }
}
