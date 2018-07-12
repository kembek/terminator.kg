"use strict";

const Product = use("PRODUCTS/Product");
const Categories = use("PRODUCTS/ProductCategory");
const ProdutAttributes = use("PRODUCTS/ProdutAttributes");
const Attribute = use("SETTINGS/Attribute");
const AttributeGroups = use("SETTINGS/AttributeGroups");
const Color = use("PRODUCTS/ProductColor");
const Images = use("App/Controllers/Http/ImagesController");

function filter_array(test_array) {
  let index = -1;
  const arr_length = test_array ? test_array.length : 0;
  let resIndex = -1;
  const result = [];

  while (++index < arr_length) {
    const value = test_array[index];

    if (value) {
      result[++resIndex] = value;
    }
  }

  return result;
}

class ProductController {
  async index({
    response,
    auth
  }) {
    let product;
    try {
      await auth.check()
      product = await Product.all();
    } catch (error) {
      product = await Product.query().where({
        is_status: true
      });}

    return response.apiCollection(product);
  }

  async create({
    request,
    response
  }) {
    let data = request.only([
      "title",
      "photos",
      "video",
      "link",
      "is_status",
      "thumbnail",
      "sort",
      "description",
      "meta_keywords",
      "meta_description",
      "meta_keywords_video",
      "meta_description_video",
      "meta_keywords_atributes",
      "meta_description_atributes",
      "meta_keywords_review",
      "meta_description_review",
      "meta_keywords_photos",
      "meta_description_photos",
      "user_id"
    ]);

    let categories = request.only(["categories"]);
    let all_attributes = request.only(["all_attributes"]);
    categories = categories.categories.split(",");

    all_attributes = JSON.parse(all_attributes.all_attributes);
    try {
      data.is_status = JSON.parse(data.is_status);
      if (data.link == null || data.link == "") delete data.link;

      if (data.thumbnail != null && data.thumbnail != "")
        data.thumbnail = await Images.image(request, "products");

      let product = await Product.findOrCreate({
          title: data.title
        },
        data
      );

      try {
        for (var i = 0; i < categories.length; i++)
          await Categories.create({
            product_id: product.id,
            category_id: categories[i]
          });
      } catch (error) {}

      for (var i = 0; i < all_attributes.length; i++) {
        await ProdutAttributes.create({
          product_id: product.id,
          attribute_id: all_attributes[i].id,
          text: all_attributes[i].text
        });
      }

      product.all_attributes = all_attributes;

      product.categories = categories;

      return response.apiCreated(product);
    } catch (error) {
      new Product().exceptions(error.message, error.status, error.code);
    }
  }

  async show({
    params,
    response,
    auth
  }) {
    let {
      link
    } = params;

    let product;
    try {
      await auth.check()
      product = await Product.query()
        .where({
          link: link
        })
        .select(
          "id",
          "title",
          "photos",
          "video",
          "link",
          "sort",
          "is_status",
          "thumbnail",
          "description",
          "meta_keywords",
          "meta_description",
          "meta_keywords_video",
          "meta_description_video",
          "meta_keywords_atributes",
          "meta_description_atributes",
          "meta_keywords_review",
          "meta_description_review",
          "meta_keywords_photos",
          "meta_description_photos"
        );
    } catch (error) {
      product = await Product.query()
        .where({
          link: link,
          is_status: true
        })
        .select(
          "id",
          "title",
          "photos",
          "video",
          "link",
          "sort",
          "is_status",
          "thumbnail",
          "description",
          "meta_keywords",
          "meta_description",
          "meta_keywords_video",
          "meta_description_video",
          "meta_keywords_atributes",
          "meta_description_atributes",
          "meta_keywords_review",
          "meta_description_review",
          "meta_keywords_photos",
          "meta_description_photos"
        );
    }


    if (product != false) {

      product = product[0];
      product.prices = await Color.query()
        .where({
          product_id: product.id
        })
        .innerJoin(
          "product_prices",
          "product_prices.product_color_id",
          "product_colors.id"
        )
        .innerJoin(
          "colors",
          "colors.id",
          "product_colors.id"
        )
        .select('colors.id', "colors.title", "colors.code", "sort", "price")
        .orderBy("product_prices.price", "ASC")
        .with("images")
        .fetch();

      let attributeGroups = await AttributeGroups.query().orderBy("id", "ASC");
      for (var i = 0; i < attributeGroups.length; i++) {
        attributeGroups[i].attributes = await Attribute.query()
          .where({
            group_id: attributeGroups[i].id,
            "product_attributes.product_id": product.id
          })
          .innerJoin(
            "product_attributes",
            "product_attributes.attribute_id",
            "attributes.id"
          )
          .select("id", "title", "text")
          .orderBy("id", "ASC");
        if (!attributeGroups[i].attributes.length) {
          delete attributeGroups[i];
        }
      }

      product.attribute_groups = filter_array(attributeGroups);
      product.all_attributes = await ProdutAttributes.query()
        .where({
          product_id: product.id
        })
        .innerJoin(
          "attributes",
          "attributes.id",
          "product_attributes.attribute_id"
        )
        .select("id", "title", "text", "group_id");

      for (var i = 0; i < product.all_attributes.length; i++) {
        product.all_attributes[i].group = await AttributeGroups.query()
          .where({
            id: product.all_attributes[i].group_id
          })
          .select("id", "title");

        product.all_attributes[i].group = product.all_attributes[i].group[0];
      }

      product.categories = [];
      let categories = await Categories.query().where({
        product_id: product.id
      });

      categories.forEach(element => {
        product.categories.push(element.category_id);
      });

      return response.apiCollection(product);
    }

    return response.status(404).send({
      status: 404,
      message: "Not Found"
    });
  }

  async update({
    request,
    response,
    params
  }) {
    const data = request.only([
      "title",
      "photos",
      "video",
      "link",
      "sort",
      "is_status",
      "thumbnail",
      "description",
      "meta_keywords",
      "meta_description",
      "meta_keywords_video",
      "meta_description_video",
      "meta_keywords_atributes",
      "meta_description_atributes",
      "meta_keywords_review",
      "meta_description_review",
      "meta_keywords_photos",
      "meta_description_photos"
    ]);

    let {
      categories,
      all_attributes
    } = request.only(["categories", "all_attributes"]);


    try {
      if (all_attributes)
        all_attributes = JSON.parse(all_attributes);
      if (categories)
        categories = categories.split(",");

      data.is_status = JSON.parse(data.is_status);
    } catch (error) {}
    try {

      const product = await Product.findOrFail(params.id);
      if (data.thumbnail != null && data.thumbnail != product.thumbnail)
        data.thumbnail = await Images.image(request, "products");

      product.merge(data);
      await product.save();

      if (categories) {
        await Categories.query()
          .where({
            product_id: product.id
          })
          .delete();

        try {
          for (var i = 0; i < categories.length; i++)
            await Categories.create({
              product_id: product.id,
              category_id: categories[i]
            });
          product.categories = categories;
        } catch (error) {}
      }

      if (all_attributes) {
        try {
          await ProdutAttributes.query()
            .where({
              product_id: product.id
            })
            .delete();

          for (var i = 0; i < all_attributes.length; i++)
            await ProdutAttributes.create({
              product_id: product.id,
              attribute_id: all_attributes[i].id,
              text: all_attributes[i].text
            });
          product.all_attributes = all_attributes;
        } catch (error) {}
      }

      return response.apiUpdated(product);
    } catch (error) {
      new Product().exceptions(error.message, error.status, error.code);
    }
  }

  async destroy({
    response,
    params
  }) {
    try {
      const product = await Product.findOrFail(params.id);

      await product.delete();

      await Images.delete('products', product.thumbnail)

      return response.apiDeleted();
    } catch (error) {
      new Product().exceptions(error.message, error.status, error.code);
    }
  }
}

module.exports = ProductController;
