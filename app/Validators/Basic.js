'use strict'

class Basic {

  get validateAll() {
    return true
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages)
  }

}

module.exports = Basic
