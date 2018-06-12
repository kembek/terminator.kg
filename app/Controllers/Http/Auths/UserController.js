'use strict'
const Hash = use('Hash')

class UserController {

  async login({
    request,
    auth,
    response
  }) {
    const {
      email,
      password
    } = request.all()

    try {
      const user = await auth.attempt(email, password)
      console.log(user)
      const token = await auth.authenticator('jwt').generate(user, true)
      console.log(token)
      return response.send(token)
    } catch (error) {
      return response.status(401).send({
        success: false,
        message: error
      })
    }
  }


  async user({
    request,
    auth,
    response
  }) {
    return response.send(await auth.user)
  }
}

module.exports = UserController
