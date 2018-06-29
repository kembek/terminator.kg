'use strict'

/*
|--------------------------------------------------------------------------
| 3PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')
const Category = use('POSTS/Category')
const Post = use('POSTS/Post')
const _ = require('lodash')


class PostSeeder {
  async run() {
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
    await Database.truncate('categories_posts')
    await Database.truncate('post_categories')
    await Database.truncate('posts')
    await Database.raw('SET FOREIGN_KEY_CHECKS = 1;')

    const category = await Factory.model('POSTS/Category').createMany(6, { user_id: 1 })
    const posts = await Factory.model('POSTS/Post').createMany(20, { user_id: 1 })

    for (let i = 0; i < 20; ++i) {
      await category[0].posts().attach(JSON.parse(JSON.stringify(posts[i].id)))
    }

    for (let i = 1; i < category.length; ++i) {
      let min = _.random(19), max = _.random(19)

      while (min >= max) {
        min = _.random(19)
        max = _.random(19)
      }

      for (let j = min; j <= max; ++j) {
        await category[i].posts().attach(JSON.parse(JSON.stringify(posts[j].id)))
      }
    }

    console.log('Post seeds done!')
  }
}

module.exports = PostSeeder
