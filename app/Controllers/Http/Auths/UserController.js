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
      const token = await auth.authenticator('jwt').generate(user, true)
      return response.json(token)
    } catch (error) {
      return response.status(401).json({
        success: false,
        error: error
      })
    }
  }
}

module.exports = UserController
