"use strict";
const Hash = use("Hash");

const User = use("App/Models/Auths/User");
const Group = use("App/Models/Auths/Group");

class UserController {
  async login({ request, auth, response }) {
    const { email, password } = request.all();

    try {
      const data = await User.query().where({
        email: email,
        is_status: true
      });

      if (data != false) {
        const user = await auth.attempt(email, password);

        return response.apiCollection({
          id: user.id,
          group_id: user.group_id,
          username: user.username,
          email: user.email,
          is_status: user.is_status
        });
      }
    } catch (error) {}

    return response.status(200).apiError(null,null, "Доступ не был предоставлен");
  }

  async user({ request, auth, response }) {
    try {
      const user = await auth.getUser();
      if (user.is_status) {
        let group = await Group.query().where({
          id: user.group_id
        });

        return response.apiCollection({
          id: user.id,
          group_id: user.group_id,
          username: user.username,
          email: user.email,
          is_status: user.is_status,
          group: group[0].title
        });
      } else {
        await auth.logout();
      }
    } catch (error) {}

    return response.apiError({
      status: 403,
      message: "У вас нет разрешения на доступ"
    });
  }

  async logout({ response, auth }) {
    try {
      if (await auth.check())
        return response.apiSuccess(await auth.logout());
    } catch (error) {
      return response.apiError()
    }
  }
}

module.exports = UserController;
