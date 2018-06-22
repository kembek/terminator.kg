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
      return response.apiCollection({
        id: user.id,
        group_id: user.group_id,
        username: user.username,
        email: user.email,
        is_status: user.is_status
      })
      //const token = await auth.authenticator('jwt').generate(user, true)
      //return response.apiCollection(token)
    } catch (error) {
      return response.status(404).send({
        status: 404,
        message: "Not found"
      })
    }
  }


  async user({
    request,
    auth,
    response
  }) {
    try {
      const user = await auth.user

      return response.apiCollection({
        id: user.id,
        group_id: user.group_id,
        username: user.username,
        email: user.email,
        is_status: user.is_status
      })
    } catch (error) {
      return response.status(404).send({
        status: 404,
        message: "Not found"
      })
    }
  }

  async logout({
    response,
    auth
  }) {
    return response.status(200).apiCollection(await auth.logout())
  }
}

module.exports = UserController
