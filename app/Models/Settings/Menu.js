'use strict'

const Model = use('App/Models/Basic')
const Exceptions = use('App/Exceptions/BasicException')
const Env = use('Env')
/**
 * @swagger
 * definitions:
 *   Menu:
 *     type: object
 *     properties:
 *       parent_id:
 *         type: integer
 *       user_id:
 *         type: integer
 *       title:
 *         type: string
 *       link:
 *         type: string
 *       is_local:
 *         type: boolean
 *       is_status:
 *         type: boolean
 *       sort:
 *         type: integer
 *
 */
class Menu extends Model {
    static get table() {
        return 'menus'
    }

    parent() {
        return this.belongsTo('SETTINGS/Menu', 'parent_id', 'id')
    }
    exceptions(message, status, code) {
        if (Env.NODE_ENV != 'production')
            throw new Exceptions(message, status, code)
    }
}


module.exports = Menu