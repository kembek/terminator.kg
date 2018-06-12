'use strict'
const Env = use('Env')

module.exports = {
  authenticator: 'session',
  session: {
    serializer: 'lucid',
    scheme: 'session',
    model: 'App/Models/User',
    uid: 'email',
    password: 'password'
  },
  jwt: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'jwt',
    uid: 'email',
    password: 'password',
    options: {
      secret: Env.get('APP_KEY'),
    }
  }
}
