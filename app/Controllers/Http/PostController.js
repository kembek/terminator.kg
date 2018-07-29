"use strict";

const Post = use("POSTS/Post");
const Images = use("App/Controllers/Http/ImagesController");

class PostController {
  async create({
    request,
    response
  }) {
    let data = request.only([
      "user_id",
      "title",
      "is_status",
      "thumbnail",
      "link",
      "body",
      "meta_keywords",
      "meta_description"
    ]);

    try {
      try {
        data.is_status = JSON.parse(data.is_status) ? 1 : 0;
        data.thumbnail = JSON.parse(data.thumbnail);
        if (data.link == null || data.link == "") delete data.link;
      } catch (error) {}

      console.log(data.thumbnail)
      if (data.thumbnail != null && data.thumbnail != '')
        data.thumbnail = await Images.image(request, "post");

      const post = await Post.findOrCreate({
          title: data.title
        },
        data
      );

      return response.apiCreated(post);
    } catch (error) {
      new Post().exceptions(error.message, error.status, error.code);
    }
  }

  async update({
    request,
    response,
    params,
    auth
  }) {
    let data = request.only([
      "title",
      "is_status",
      "thumbnail",
      "link",
      "body",
      "meta_keywords",
      "meta_description"
    ]);

    try {
      try {
        data.is_status = JSON.parse(data.is_status);
        data.thumbnail = JSON.parse(data.thumbnail);
        if (data.link == null || data.link == "") delete data.link;
      } catch (error) {}

      const post = await Post.findOrFail(params.id);
      if (data.thumbnail != null && data.thumbnail != post.thumbnail)
        data.thumbnail = await Images.image(request, "post");

      post.merge(data);
      await post.save();

      return response.apiUpdated(post);
    } catch (error) {
      new Post().exceptions(error.message, error.status, error.code);
    }
  }

  async destroy({
    request,
    response,
    params,
    auth
  }) {
    try {
      const post = await Post.findOrFail(params.id);

      await post.delete();

      await Images.delete("post", post.thumbnail);

      return response.apiDeleted(post);
    } catch (error) {
      new Post().exceptions(error.message, error.status, error.code);
    }
  }

  async index({
    request,
    response
  }) {
    let {
      page,
      limit
    } = request.only(['page', 'limit'])


    if (page) {
      page = JSON.parse(page)
    } else
      page = 0

    const posts = await Post.query()
      .where({
        is_status: true
      })
      .offset(page * 36)
      .limit(limit ? limit : 36)
      .orderBy("updated_at", "ASC");

    return response.apiCollection(posts);
  }

  async show({
    params,
    response
  }) {
    let {
      link
    } = params


    let posts = await Post.query()
      .where({
        is_status: true,
        link: link
      })

    if (posts != false) {
      let post = posts[0]
      return response.apiCollection(post);
    }

    return response.apiError()

  }

  async all({
    response
  }) {
    const post = await Post.query().orderBy("updated_at", "ASC");

    return response.apiCollection(post);
  }
}

module.exports = PostController;
