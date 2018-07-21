"use strict";

const Product = use("PRODUCTS/Product");
const Categories = use("PRODUCTS/ProductCategory");
const ProdutAttributes = use("PRODUCTS/ProdutAttributes");
const Attribute = use("SETTINGS/Attribute");
const AttributeGroups = use("SETTINGS/AttributeGroups");
const Color = use("PRODUCTS/ProductColor");
const Price = use("PRODUCTS/Price");
const Images = use("App/Controllers/Http/ImagesController");
const ProductImage = use("PRODUCTS/Image");

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
      for (var i = 0; i < product.length; i++)
        product[i].prices = await Color.query()
        .where({
          product_id: product[i].id
        })
        .innerJoin(
          "product_prices",
          "product_prices.product_color_id",
          "product_colors.id"
        )
        .innerJoin(
          "colors",
          "colors.id",
          "product_colors.color_id"
        )
        .select('colors.id', "colors.title", "colors.code", "sort", "price")
        .orderBy("product_prices.price", "ASC")
        .with("images")
        .fetch();

    } catch (error) {
      product = await Product.query().where({
        is_status: true
      });
      for (var i = 0; i < product.length; i++)
        product[i].prices = await Color.query()
        .where({
          product_id: product[i].id
        })
        .innerJoin(
          "product_prices",
          "product_prices.product_color_id",
          "product_colors.id"
        )
        .innerJoin(
          "colors",
          "colors.id",
          "product_colors.color_id"
        )
        .select('colors.id', "colors.title", "colors.code", "sort", "price")
        .orderBy("product_prices.price", "ASC")
        .with("images")
        .fetch();
    }

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

    let {
      categories,
      all_attributes,
      prices
    } = request.only(["categories", "all_attributes", "prices"]);

    try {
      if (all_attributes)
        all_attributes = JSON.parse(all_attributes);
      if (categories)
        categories = categories.split(",");
      if (prices)
        prices = JSON.parse(prices);

      data.is_status = JSON.parse(data.is_status);
    } catch (error) {}

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

      let price

      try {

        for (var i = 0; i < prices.length; i++) {
          let color = await Color.create({
            product_id: product.id,
            color_id: prices[i].id,
            sort: prices[i].sort
          });

          price = await Price.create({
            product_color_id: color.id,
            price: prices[i].price
          })
        }

      } catch (error) {}

      product.all_attributes = all_attributes;

      product.categories = categories;
      product.prices = prices

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
          "product_colors.color_id"
        )
        .select('product_colors.id as product_color_id', 'colors.id', "colors.title", "colors.code", "sort", "price")
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
      all_attributes,
      prices
    } = request.only(["categories", "all_attributes", "prices"]);


    try {
      if (all_attributes)
        all_attributes = JSON.parse(all_attributes);
      if (categories)
        categories = categories.split(",");
      if (prices)
        prices = JSON.parse(prices);

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

      if (prices) {
        // try {
        let color_not_delete = [];

        for (var i = 0; i < prices.length; i++)
          color_not_delete.push(prices[i].id)


        let color_delete = await Color.query().where({
          product_id: product.id
        }).whereNotIn('color_id', color_not_delete).delete()

        if (color_delete)
          for (var i = 0; i < color_delete.length; i++) {
            await Price.query().where({
              product_color_id: color_delete[i].id
            }).delete()

            let img = await ProductImage.query().where({
              product_color_id: color_delete[i].id
            }).delete()

            for (var i = 0; i < img.length; i++) {
              Images.delete('products', img[i].url)
            }
          }

        for (var i = 0; i < prices.length; i++) {
          let color = await Color.findOrCreate({
            product_id: product.id,
            color_id: prices[i].id,
          }, {
            product_id: product.id,
            color_id: prices[i].id,
            sort: prices[i].sort
          });

          for (var j = 0; j < prices[i].images.length; j++) {
            let name = prices[i].images[j].url

            if (prices[i].images[j].src) {
              name = await Images.base64(
                prices[i].images[j].src,
                'products',
                `${color.id} ${new Date().getTime()} - ${product.title.replace("\/","-")}`
              )
            }

              console.log(prices[i].images[j])

             let p_i = await ProductImage.findOrCreate({
                product_color_id: color.id,
                url: name
              }, {
                product_color_id: color.id,
                url: name,
                title: prices[i].images[j].title,
                sort: prices[i].images[j].sort
              })

              try {
                p_i.merge({
                  product_color_id: color.id,
                  url: name,
                  title: prices[i].images[j].title,
                  sort: prices[i].images[j].sort
                })

                await p_i.save()
              } catch (error) {}

          }

          try {
            color.merge({
              sort: prices[i].sort
            })

            await color.save()
          } catch (error) {}

          let price = await Price.findOrCreate({
            product_color_id: color.id,
          }, {
            product_color_id: color.id,
            price: prices[i].price
          })
          try {
            price.merge({
              price: prices[i].price
            })

            await price.save()
          } catch (error) {}


        }

        // } catch (error) {}

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
      try {
        await Images.delete('products', product.thumbnail)
      } catch (error) {}

      return response.apiDeleted();
    } catch (error) {
      new Product().exceptions(error.message, error.status, error.code);
    }
  }
}

module.exports = ProductController;
