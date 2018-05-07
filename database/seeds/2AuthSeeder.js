'use strict'

/*
|--------------------------------------------------------------------------
| 2UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

const User = use('AUTHS/User')
const Access = use('AUTHS/Access')
const Group = use('AUTHS/Group')

class UserSeeder {
  async run() {
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
    await Database.truncate('users')
    await Database.truncate('tokens')
    await Database.truncate('accesses')
    await Database.truncate('groups')
    await Database.raw('SET FOREIGN_KEY_CHECKS = 1;')

    // Group
    const group = await Factory.model('AUTHS/Group').create({ title: 'Administrator' })
    
    // Access
    const access = await Factory.model('AUTHS/Access').make({
      post: '111',
      product: '111',
      order: '111',
      access: '111',
      faq: '111',
      image: '111',
      auth: '111',
      color: '111',
      setting: '111',
    })
    access.group_id = group.id
    await group.access().save(access)

    // User
    const user = await Factory.model('AUTHS/User').make()
    await group.users().save(user)

    console.log('Auth seeds done!')
  }
}

module.exports = UserSeeder
