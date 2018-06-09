'use strict'

class Post {
  get rules () {
    let post = {
      thumbnail: 'required|min:4|max:255|unique:post_categories, thumbnail',
      title: 'required|min:4|max:255|',
      body: '',
      meta_keywords: '',
      meta_description: '',
      is_status: ''
    }

    return {
      // validation rules
    }
  }
}

module.exports = Post
