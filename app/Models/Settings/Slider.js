'use strict'

const Model = use('Model')
const Exceptions = use('App/Exceptions/BasicException')
const Env = use('Env')
    /**
     * @swagger
     * definitions:
     *   Slider:
     *     type: object
     *     properties:
     *       title:
     *         type: string
     *       description:
     *         type: string
     *       link:
     *         type: string
     *       is_local:
     *         type: boolean
     *       is_status:
     *         type: boolean
     */
class Slider extends Model {
    static get table() {
        return 'sliders'
    }
    
    exceptions(message, status, code) {
        if (Env.NODE_ENV != 'production')
            throw new Exceptions(message, status, code)
    }
}

module.exports = Slider