'use strict'

const Schema = use('Schema')

class AlterSchema extends Schema {
  up() {
    /**
     * ALTER accesses
     */
    this.alter('accesses', (table) => {
      // table.dropForeign('group_id')
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
     * ALTER  images
     */
    this.alter('images', (table) => {
      table.foreign('product_color_id')
        .references('id')
        .inTable('product_colors')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_product_color_id_images_product_colors')
    })

    /**
     * ALTER product_colors
     */
    this.alter('product_colors', (table) => {
      table.foreign('product_id')
        .references('id')
        .inTable('products')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_product_id_product_colors_products')
      table.foreign('color_id')
        .references('id')
        .inTable('colors')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_color_id_product_colors_colors')
    })


    /**
     * ALTER categories
     */
    this.alter('categories', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_product_categories_users')
      table.foreign('parent_id')
        .references('id')
        .inTable('categories')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_parent_id_product_categories')
    })

    /**
     * ALTER product_category
     */
    this.alter('product_category', (table) => {
      table.foreign('product_id')
        .references('id')
        .inTable('products')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_product_id_categories')
      table.foreign('category_id')
        .references('id')
        .inTable('categories')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_category_id_categories')
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
      table.foreign('stock_status_id')
        .references('id')
        .inTable('stock_statuses')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_stock_status_id_products_stock_statuses')
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
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_category_id_faqs_users')
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
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_category_id_faq_categories_users')
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
      table.foreign('review_id')
        .references('id')
        .inTable('reviews')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_review_id_user_reviews_reviews')
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
      table.foreign('parent_id')
        .references('id')
        .inTable('menus')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_user_id_menus')
    })

    /**
     * Alter categories_posts
     */
    this.alter('categories_posts', (table) => {
      table.foreign('category_id')
        .references('id')
        .inTable('post_categories')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_category_id_cp_pc')
      table.foreign('post_id')
        .references('id')
        .inTable('posts')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_post_id_cp_posts')
    })

    /**
     * Alter product_prices
     */
    this.alter('product_prices', (table) => {
      table.foreign('product_color_id')
        .references('id')
        .inTable('product_colors')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .withKeyName('fk_product_color_id_pp_pc')
    })

    /**
     * Alter attributes
     */
    this.alter('attributes', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })

    this.alter('product_attributes', (table) => {
      table.foreign('product_id')
        .references('id')
        .inTable('products')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      table.foreign('attribute_id')
        .references('id')
        .inTable('attributes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })

    this.alter('attribute_group_attributes', (table) => {
      table.foreign('attribute_group_id')
        .references('id')
        .inTable('attribute_groups')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      table.foreign('attribute_id')
        .references('id')
        .inTable('attributes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })

      this.alter('attribute_groups', (table) => {
        table.foreign('user_id')
          .references('id')
          .inTable('users')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
    })
  }

  down() {

  }
}

module.exports = AlterSchema
