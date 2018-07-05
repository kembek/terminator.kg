'use strict'

const Env = use('Env')
const Helpers = use('Helpers')

module.exports = {
    /*
    |--------------------------------------------------------------------------
    | Default Connection
    |--------------------------------------------------------------------------
    |
    | Connection defines the default connection settings to be used while
    | interacting with SQL databases.
    |
    */
    connection: Env.get('DB_CONNECTION', 'mysql'),

    /*
    |--------------------------------------------------------------------------
    | MySQL
    |--------------------------------------------------------------------------
    |
    | Here we define connection settings for MySQL database.
    |
    | npm i --save mysql
    |
    */
    pg: {
        client: 'pg',
        connection: {
            host: Env.get('DB_HOST'),
            port: Env.get('DB_PORT'),
            user: Env.get('DB_USER', 'terminator'),
            password: Env.get('DB_PASSWORD', '046Herqwd!'),
            database: Env.get('DB_DATABASE', 'tm_db'),
            ssl: false
        }
    },
    mysql: {
        client: 'mysql',
        connection: {
            host: Env.get('DB_HOST'),
            port: Env.get('DB_PORT'),
            user: Env.get('DB_USER', 'root'),
            password: Env.get('DB_PASSWORD', ''),
            database: Env.get('DB_DATABASE', 'tm_db')
        },
        // debug: true
    }
}