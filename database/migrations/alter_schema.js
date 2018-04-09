'use strict'

const Schema = use('Schema')

class AlterSchema extends Schema {
  up() {
    /**
     * ALTER accesses
     */
    this.alter('accesses', (table) => {
      table.foreign('group_id')
        .references('id')
        .inTable('groups')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_group_id_groups_accesses')
    })

    /**
     * ALTER users
     */
    this.alter('users', (table) => {
      table.foreign('group_id')
        .references('id')
        .inTable('groups')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_group_id_groups_users')
    })

    /**
     * ALTER albums
     */
    this.alter('albums', (table) => {
      table.foreign('parent_id')
        .references('id')
        .inTable('albums')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_parent_id_albums')
    })

    /**
     * ALTER  images
     */
    this.alter('images', (table) => {
      table.foreign('album_id')
        .references('id')
        .inTable('albums')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_album_id_albums_images')
    })

    /**
     * ALTER product_images
     */
    this.alter('product_images', (table) => {
      table.foreign('product_id')
        .references('id')
        .inTable('products')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_product_id_product_images_products')
    })

    this.alter('product_images', (table) => {
      table.foreign('image_id')
        .references('id')
        .inTable('images')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_image_id_product_images_images')
    })

    this.alter('product_images', (table) => {
      table.foreign('color_id')
        .references('id')
        .inTable('colors')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_color_id_product_images_colors')
    })

    /**
     * ALTER product_categories
     */
    this.alter('product_categories', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_product_categories_users')
    })

    this.alter('product_categories', (table) => {
      table.foreign('parent_id')
        .references('id')
        .inTable('product_categories')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_parent_id_product_categories')
    })

    /**
     * ALTER products
     */
    this.alter('products', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_products_users')
    })

    this.alter('products', (table) => {
      table.foreign('stock_status_id')
        .references('id')
        .inTable('stock_statuses')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_stock_status_id_products_stock_statuses')
    })

    this.alter('products', (table) => {
      table.foreign('category_id')
        .references('id')
        .inTable('product_categories')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_category_id_products_product_categories')
    })

    /**
     * ALTER post_categories
     */
    this.alter('post_categories', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_post_categories_users')
    })

    this.alter('post_categories', (table) => {
      table.foreign('parent_id')
        .references('id')
        .inTable('post_categories')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_parent_id_post_categories')
    })

    /**
     * ALTER posts
     */
    this.alter('posts', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_posts_users')
    })

    this.alter('posts', (table) => {
      table.foreign('category_id')
        .references('id')
        .inTable('post_categories')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_category_id_post_post_categories')
    })

    /**
     * ALTER orders
     */
    this.alter('orders', (table) => {
      table.foreign('customer_id')
        .references('id')
        .inTable('customers')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_customer_id_orders_customers')
    })

    /**
     * ALTER order_products
     */
    this.alter('order_products', (table) => {
      table.foreign('order_id')
        .references('id')
        .inTable('orders')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_order_id_order_products_orders')
    })

    this.alter('order_products', (table) => {
      table.foreign('product_id')
        .references('id')
        .inTable('products')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_product_id_order_products_products')
    })

    /**
     * ALTER faqs
     */
    this.alter('faqs', (table) => {
      table.foreign('category_id')
        .references('id')
        .inTable('faq_categories')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_category_id_faqs_faq_categories')
    })

    /**
     * ALTER faq_categories
     */
    this.alter('faq_categories', (table) => {
      table.foreign('parent_id')
        .references('id')
        .inTable('faq_categories')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_parent_id_faq_categories')
    })

    /**
     * ALTER photo_galleries
     */
    this.alter('photo_galleries', (table) => {
      table.foreign('product_id')
        .references('id')
        .inTable('products')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_product_id_photo_galleries_products')
    })

    /**
     * ALTER attribute_groups
     */
    this.alter('attribute_groups', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_attribute_groups_users')
    })

    /**
     * ALTER attributes
     */
    this.alter('attributes', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_attributes_users')
    })

    /**
     * ALTER attribute_group_attributes
     */
    this.alter('attribute_group_attributes', (table) => {
      table.foreign('attribute_group_id')
        .references('id')
        .inTable('attribute_groups')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_attribute_group_id_aga_attribute_groups')
    })

    this.alter('attribute_group_attributes', (table) => {
      table.foreign('attribute_id')
        .references('id')
        .inTable('attributes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_attribute_id_attribute_group_attributes_attributes')
    })

    /**
     * ALTER product_attributes
     */
    this.alter('product_attributes', (table) => {
      table.foreign('attribute_id')
        .references('id')
        .inTable('attributes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_attribute_id_product_attributes_attributes')
    })

    this.alter('product_attributes', (table) => {
      table.foreign('product_id')
        .references('id')
        .inTable('products')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_product_id_product_attributes_products')
    })

    /**
     * ALTER user_customers
     */
    this.alter('user_customers', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_user_customers_users')
    })

    this.alter('user_customers', (table) => {
      table.foreign('customer_id')
        .references('id')
        .inTable('customers')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_customer_id_user_customers_customers')
    })

    /**
    * ALTER user_orders
    */
    this.alter('user_orders', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_user_orders_users')
    })

    this.alter('user_orders', (table) => {
      table.foreign('order_id')
        .references('id')
        .inTable('orders')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_order_id_user_orders_orders')
    })

    /**
    * ALTER user_reviews
    */
    this.alter('user_reviews', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_user_reviews_users')
    })

    this.alter('user_reviews', (table) => {
      table.foreign('review_id')
        .references('id')
        .inTable('reviews')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_review_id_user_reviews_reviews')
    })

    /**
    * ALTER product_video_reviews
    */
    this.alter('product_video_reviews', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_product_video_reviews_users')
    })

    this.alter('product_video_reviews', (table) => {
      table.foreign('product_id')
        .references('id')
        .inTable('products')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_product_id_product_video_reviews_products')
    })

    /**
    * ALTER user_questions
    */
    this.alter('user_questions', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_user_questions_users')
    })

    this.alter('user_questions', (table) => {
      table.foreign('question_id')
        .references('id')
        .inTable('questions')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_user_questions_questions')
    })

    /**
     * ALTER menus
     */
    this.alter('menus', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_menus_users')
    })

    this.alter('menus', (table) => {
      table.foreign('parent_id')
        .references('id')
        .inTable('menus')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_menus')
    })
  }

  down() {

  }
}

module.exports = AlterSchema
