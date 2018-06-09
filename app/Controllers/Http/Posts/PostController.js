'use strict'

const Post = use('POSTS/Post')

class PostController {
  async index({ response }) {
    const post = await Post.all()

    return response.apiCollection(post)
  }

  async create() {
  }

  async store({ request, response }) {
    const data = request.only([''])
  }

  async show() {
  }

  async edit() {
  }

  async update() {
  }

  async destroy() {
  }
}

module.exports = PostController
