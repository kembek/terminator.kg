'use strict'

const Route = use('Route')
const Helpers = use('Helpers')

Route.group(() => {

  /**
   * @swagger
   * /auth:
   *   get:
   *     tags:
   *       - Авторизация
   *     summary: Проверка авторизации
   */

  Route.get('/', 'Auths/UserController.user')

  /**
   * @swagger
   * /auth:
   *   post:
   *     tags:
   *       - Авторизация
   *     summary: Авторизация
   *     parameters:
   *       - name: auth
   *         description: Авторизация
   *         in: body
   *         required: true
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/User'
   */
  Route.post('/', 'Auths/UserController.login')

}).prefix('/api/auth')

/**
 * Product category
 */
Route.group(() => {

  // *     consumes:
  // *       - 'multipart/form-data'
  // *     produces:
  // *       - "application/json"

  /**
   * @swagger
   * /categories/:
   *   get:
   *     tags:
   *       - Категории
   *     summary: Select all categories
   *     responses:
   *       200:
   *         description: categories
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/ProductCategory'
   */
  Route.get('/', 'Products/CategoryController.index')


  /**
   * @swagger
   * /categories/{link}:
   *   get:
   *     tags:
   *       - Категории
   *     summary: Get category
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
   * /categories:
   *   post:
   *     tags:
   *       - Категории
   *     summary: Create category
   *     parameters:
   *       - in: formData
   *         name: thumbnail
   *         type: file
   *         description: The file to upload
   *       - in: body
   *         name: body
   *         description: JSON of category
   *         required: true
   *         schema:
   *           $ref: '#/definitions/StoreProductCategory'
   *     responses:
   *       200:
   *         description: Product category
   *         schema:
   *           $ref: '#/definitions/ProductCategory'
   */
  Route.post('/', 'Products/CategoryController.store').middleware(['auth'])
  // .validator('Products/Category')

  /**
   * @swagger
   * /categories/{id}:
   *   put:
   *     tags:
   *       - Категории
   *     summary: Product category update
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *       - name: Category
   *         description: Product category object
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/ProductCategory'
   *     responses:
   *       202:
   *         description: category update
   *         schema:
   *           $ref: '#/definitions/ProductCategory'
   */
  Route.put('/:id', 'Products/CategoryController.update')
    .validator('Products/Category').middleware(['auth'])

  /**
   * @swagger
   * /categories/{id}:
   *   delete:
   *     tags:
   *       - Категории
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
  Route.delete('/:id', 'Products/CategoryController.destroy').middleware(['auth'])

}).prefix('/api/categories')

/**
 * Product
 */
Route.group(() => {

  /**
   * @swagger
   * /product/{link}:
   *   get:
   *     tags:
   *       - Продукты
   *     summary: Get category
   *     parameters:
   *       - $ref: '#/parameters/Link'
   *     responses:
   *       202:
   *         description: Get success
   *       404:
   *         $ref: '#/responses/NotFound'
   *
   */
  Route.get('/:link', 'Products/ProductController.show')

  /**
   * @swagger
   * /product:
   *   get:
   *     tags:
   *       - Продукты
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
   *       - Продукты
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
    .validator('Products/Product').middleware(['auth'])

  /**
   * @swagger
   * product/{id}:
   *   put:
   *     tags:
   *       - Продукты
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
    .validator('Products/Product').middleware(['auth'])

  /**
   * @swagger
   * /product/{id}:
   *   delete:
   *     tags:
   *       - Продукты
   *     summary:
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *     responses:
   *       202:
   *         description: Delete success
   *       404:
   *         $ref: '#/responses/NotFound'
   */
  Route.delete('/:id', 'Products/ProductController.destroy').middleware(['auth'])

}).prefix('/api/product')


Route.group(()=>{

  /**
   * @swagger
   * /slider/:
   *   get:
   *     tags:
   *       - Слайдер
   *     summary: Получение массива изображений
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          $ref: '#/definitions/Slider'
   */
  Route.get("slider", "SliderController.index")
}).prefix("api")

Route.group(()=>{

  /**
   * @swagger
   * /menu/:
   *   get:
   *     tags:
   *       - Меню
   *     summary: Получение массива меню
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          $ref: '#/definitions/Menu'
   */
  Route.get("", "MenuController.index")

    /**
   * @swagger
   * /menu/:
   *   put:
   *     tags:
   *       - Меню
   *     summary: Добавление массива меню
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          $ref: '#/definitions/Menu'
   */
  Route.put("/", "MenuController.add")

/**
   * @swagger
   * /menu/{id}:
   *   post:
   *     tags:
   *       - Меню
   *     summary: Изменение массива меню
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *       - name: menu
   *         description: menu
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Menu'
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          $ref: '#/definitions/Menu'
   */
  Route.post("/:id", "MenuController.update")
  
/**
   * @swagger
   * /menu/{id}:
   *   delete:
   *     tags:
   *       - Меню
   *     summary: Удаление массива меню
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          $ref: '#/definitions/Menu'
   */
  Route.delete("/:id" ,"MenuController.destroy")
}).prefix("api/menu")
