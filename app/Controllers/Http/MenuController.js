"use strict";

const Menu = use("App/Models/Menus/Menu");
const Database = use("Database");
class MenuController {
  async add({ request, response, params }) {
    const data = request.all();

    try {
      const menu = await Menu.create(data);
      return response.apiCreated(menu);
    } catch (error) {
      new Menu().exceptions(error.message, error.status, error.code);
    }
  }

  async update({ request, response, params, auth }) {
    const data = request.all()
    try {
      const menu = await Menu.findOrFail(params.id);
      menu.merge(data);
      await menu.save();

      return response.apiUpdated(menu);
    } catch (error) {
      new Menu().exceptions(error.message, error.status, error.code);
    }
  }

  async destroy({ request, response, params, auth }) {
    try {
      const menu = await Menu.findOrFail(params.id);

      await menu.delete();

      return response.apiDeleted(menu);
    } catch (error) {
      new Menu().exceptions(error.message, error.status, error.code);
    }
  }

  async index({ request, response }) {
    const menus = await Menu.query()
      .where({
        parent_id: null
      })
      .orderBy("sort", "ASC");

    async function recMenu(object) {
      const childs = await Menu.query()
        .where({
          parent_id: object.id
        })
        .orderBy("sort", "ASC");

      if (childs != false) {
        object.childs = [];
        for (var i = 0; i < childs.length; i++) {
          childs[i].childs = await recCat(childs[i]);
          object.childs.push(childs[i]);
        }
      }
      return object.childs;
    }
    let arrMenu = [];

    for (var i = 0; i < menus.length; i++) {
      menus[i].childs = await recMenu(menus[i]);
      arrMenu.push(menus[i]);
    }

    return response.apiCollection(arrMenu);
  }
}

module.exports = MenuController;
