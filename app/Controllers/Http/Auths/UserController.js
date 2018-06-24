'use strict'
const Hash = use('Hash')

const User = use("App/Models/Auths/User");

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
      let data = await User.query().where({
        email: email,
        is_status: true
      })
      if (data != false) {
        const user = await auth.attempt(email, password)
        return response.apiCollection({
          id: user.id,
          group_id: user.group_id,
          username: user.username,
          email: user.email,
          is_status: user.is_status
        })
      }
    } catch (error) {}

    return response.status(403).send({
      status: 403,
      message: "Доступ не был предоставлен"
    })
  }


  async user({
    request,
    auth,
    response
  }) {
    try {
      const user = await auth.user
      if (user.is_status)
        return response.apiCollection({
          id: user.id,
          group_id: user.group_id,
          username: user.username,
          email: user.email,
          is_status: user.is_status
        })
      else {
        await auth.logout()
      }
    } catch (error) {}

    return response.status(403).send({
      status: 403,
      message: "У вас нет разрешения на доступ"
    })
  }

  async logout({
    response,
    auth
  }) {
    return response.status(200).apiCollection(await auth.logout())
  }
}

module.exports = UserController
