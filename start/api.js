'use strict'

const Route = use('Route')
const Helpers = use('Helpers')

/**
 * Product category
 */
Route.group(() => {

  /**
   * @swagger
   * /product_category/all:
   *   get:
   *     tags:
   *       - ProductCategory
   *     summary: Select all product categories
   *     responses:
   *       200:
   *         description: product categories
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/ProductCategory'
   */
  Route.get('/all', 'Products/CategoryController.index')


  // *     consumes:
  // *       - 'multipart/form-data'
  // *     produces:
  // *       - "application/json"

  /**
   * @swagger
   * /product_category:
   *   post:
   *     tags:
   *       - ProductCategory
   *     summary: Create product category
   *     parameters:
   *       - in: formData
   *         name: thumbnail
   *         type: file
   *         description: The file to upload
   *       - in: body
   *         name: body
   *         description: JSON of product category
   *         required: true
   *         schema:
   *           $ref: '#/definitions/StoreProductCategory'
   *     responses:
   *       200:
   *         description: Product category
   *         schema:
   *           $ref: '#/definitions/ProductCategory'
   */
  Route.post('/', 'Products/CategoryController.store')
  // .validator('Products/Category')

  /**
   * @swagger
   * /product_category/{id}:
   *   put:
   *     tags:
   *       - ProductCategory
   *     summary: Product category update
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *       - name: productCategory
   *         description: Product category object
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/ProductCategory'
   *     responses:
   *       202:
   *         description: product category update
   *         schema:
   *           $ref: '#/definitions/ProductCategory'
   */
  Route.put('/:id', 'Products/CategoryController.update')
    .validator('Products/Category')

  /**
   * @swagger
   * /product_category/{link}:
   *   get:
   *     tags:
   *       - ProductCategory
   *     summary: Get product category
   *     parameters:
   *       - $ref: '#/parameters/Link'
   *     responses:
   *       202:
   *         description: Get success
   *       404:
   *         $ref: '#/responses/NotFound'
   *
   */
  Route.get('/:link', 'Products/CategoryController.category')

  /**
   * @swagger
   * /product_category/{id}:
   *   delete:
   *     tags:
   *       - ProductCategory
   *     summary: Product category delete
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *     responses:
   *       202:
   *         description: Delete success
   *       404:
   *         $ref: '#/responses/NotFound'
   *
   */
  Route.delete('/:id', 'Products/CategoryController.destroy')

}).prefix('/api/product_category')

/**
 * Product
 */
Route.group(() => {

  /**
   * @swagger
   * /product:
   *   get:
   *     tags:
   *       - Product
   *     summary: Select all products
   *     responses:
   *       200:
   *         description: products
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/Product'
   */
  Route.get('/', 'Products/ProductController.index')

  /**
   * @swagger
   * product:
   *   post:
   *     tags:
   *       - Product
   *     summary: Store new product
   *     parameters:
   *       - name: body
   *         description: JSON of product
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/StoreProduct'
   *     responses:
   *       200:
   *         description: Store product
   *         schema:
   *           $ref: '#/definitions/Product'
   */
  Route.post('/', 'Products/ProductController.store')
    .validator('Products/Product')

  /**
   * @swagger
   * product/{id}:
   *   put:
   *     tags:
   *       - Product
   *     summary: Update product
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *       - name: product
   *         description: Product object
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Product'
   *     responses:
   *       202:
   *         description: product update
   *         schema:
   *           $ref: '#/definitions/Product'
   */
  Route.put('/:id', 'Products/ProductCotroller.update')
    .validator('Products/Product')

  /**
   * @swagger
   * /product/{id}:
   *   delete:
   *     tags:
   *       - Product
   *     summary:
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *     responses:
   *       202:
   *         description: Delete success
   *       404:
   *         $ref: '#/responses/NotFound'
   */
  Route.delete('/:id', 'Products/ProductController.destroy')

}).prefix('/api/product')

