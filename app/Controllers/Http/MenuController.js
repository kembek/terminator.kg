"use strict";

const Menu = use("SETTINGS/Menu");
const Helpers = use('Helpers')

class MenuController {


    async image(request) {
        const image = request.file('file', {
            type: ['image'],
            size: '2mb',
            allowedExtensions: ['jpg', 'png', 'jpeg', 'svg']
        })
        if (!image) {
            await new Menu().exceptions('This field required!!!', 400)
        }

        let image_name = `${new Date().getTime()}-${image.clientName}`

        await image.move(Helpers.resourcesPath('static/images/menu'), {
            name: image_name
        })

        if (!image.moved()) {
            return image.error()
        }

        return image_name
    }


    async create({
        request,
        response
    }) {
        let data = request.only(['title', 'parent_id', 'is_status', 'is_local',
            'thumbnail', 'link', 'sort', 'user_id'
        ])

        try {
            try {
                data.parent_id = JSON.parse(data.parent_id)
                data.sort = JSON.parse(data.sort)
                data.is_status = JSON.parse(data.is_status)
                data.is_local = JSON.parse(data.is_local)
                data.thumbnail = JSON.parse(data.thumbnail)
                if (data.link == null || data.link == '')
                    delete data.link
            } catch (error) {}


            if (data.thumbnail != null && data.thumbnail != '')
                data.thumbnail = await this.image(request)

            const menu = await Menu.findOrCreate({
                title: data.title
            }, data)


            const menus = await Menu.query().where({
                id: menu.id
            }).with('parent').fetch()

            return response.apiCreated(menus)

        } catch (error) {
            new Menu().exceptions(error.message, error.status, error.code)
        }
    }


    async update({
        request,
        response,
        params,
        auth
    }) {
        let data = request.only(['title', 'parent_id', 'is_status', 'is_local',
            'thumbnail', 'link', 'sort', 'user_id'
        ])

        try {
            try {
                data.parent_id = JSON.parse(data.parent_id)
                data.sort = JSON.parse(data.sort)
                data.is_status = JSON.parse(data.is_status)
                data.is_local = JSON.parse(data.is_local)
                data.thumbnail = JSON.parse(data.thumbnail)
                if (data.link == null || data.link == '')
                    delete data.link
            } catch (error) {}

            const menu = await Menu.findOrFail(params.id)
            if (data.thumbnail != null && data.thumbnail != menu.thumbnail)
                data.thumbnail = await this.image(request)

            menu.merge(data)
            await menu.save()

            const menus = await Menu.query().where({
                id: menu.id
            }).with('parent').fetch()

            return response.apiUpdated(menus)

        } catch (error) {
            new Menu().exceptions(error.message, error.status, error.code)
        }
    }

    async destroy({
        request,
        response,
        params,
        auth
    }) {
        try {
            const menu = await Menu.findOrFail(params.id);

            await menu.delete();

            return response.apiDeleted(menu);
        } catch (error) {
            new Menu().exceptions(error.message, error.status, error.code);
        }
    }

    async index({
        request,
        response
    }) {
        const menus = await Menu.query()
            .where({
                parent_id: null,
                is_status: true
            })
            .orderBy("sort", "ASC");

        async function recMenu(object) {
            const childs = await Menu.query()
                .where({
                    parent_id: object.id,
                    is_status: true
                })
                .orderBy("sort", "ASC");

            if (childs != false) {
                object.childs = [];
                for (var i = 0; i < childs.length; i++) {
                    childs[i].childs = await recMenu(childs[i]);
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

    async all({
        response
    }) {
        const menu = await Menu.query().orderBy('sort', 'ASC').with('parent').fetch()

        return response.apiCollection(menu)
    }

}

module.exports = MenuController;