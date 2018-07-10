'use strict'

const Route = use('Route')
const Helpers = use('Helpers')

Route.group(() => {

  /**
   * @swagger
   * /auth/:
   *   get:
   *     tags:
   *       - Авторизация
   *     summary: Проверка авторизации
   *     responses:
   *       200:
   *         description: Ответ
   *         schema:
   *             $ref: '#/definitions/User'
   */

  Route.get('/', 'Auths/UserController.user')

  /**
   * @swagger
   * /auth/:
   *   delete:
   *     tags:
   *       - Авторизация
   *     summary: Выход
   *     responses:
   *       200:
   *         description: Ответ
   *         schema:
   *             $ref: '#/definitions/User'
   */

  Route.delete('/', 'Auths/UserController.logout')

  /**
   * @swagger
   * /auth/:
   *   post:
   *     tags:
   *       - Авторизация
   *     summary: Вход
   *     parameters:
   *       - name: body
   *         description: JSON of user
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/User'
   *     responses:
   *       200:
   *         description: Данные
   *         schema:
   *             $ref: '#/definitions/User'
   */
  Route.post('/', 'Auths/UserController.login')

}).prefix('/api/auth')

/**
 * Categories
 */
Route.group(() => {

  /**
   * @swagger
   * /categories/:
   *   get:
   *     tags:
   *       - Категории
   *     summary: Получить категории со вложенностями
   *     responses:
   *       200:
   *         description: Ответ
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/ProductCategory'
   */
  Route.get('', 'Products/CategoryController.index')


  /**
   * @swagger
   * /categories/all/:
   *   get:
   *     tags:
   *       - Категории
   *     summary: Получить все категории
   *     responses:
   *       200:
   *         description: Ответ
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/ProductCategory'
   */
  Route.get('/all/', 'Products/CategoryController.all')

  /**
   * @swagger
   * /categories/block/:
   *   get:
   *     tags:
   *       - Категории
   *     summary: Получить категории относящиеся к блоку
   *     responses:
   *       200:
   *         description: Ответ
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/ProductCategory'
   */
  Route.get('/block/', 'Products/CategoryController.block')


  /**
   * @swagger
   * /categories/{link}:
   *   get:
   *     tags:
   *       - Категории
   *     summary: Получить категорию по ссылке
   *     parameters:
   *       - $ref: '#/parameters/Link'
   *     responses:
   *       202:
   *         description: Категория
   *       404:
   *         $ref: '#/responses/NotFound'
   *
   */
  Route.get('/:link', 'Products/CategoryController.category')

  /**
   * @swagger
   * /categories/:
   *   put:
   *     tags:
   *       - Категории
   *     summary: Создать категорию
   *     parameters:
   *       - in: formData
   *         name: thumbnail
   *         type: file
   *         description: Главное изображение
   *       - in: body
   *         name: body
   *         description: Данные в JSON формате
   *         required: true
   *         schema:
   *           $ref: '#/definitions/StoreProductCategory'
   *     responses:
   *       200:
   *         description: Добавленная категория
   *         schema:
   *           $ref: '#/definitions/ProductCategory'
   */
  Route.put('/', 'Products/CategoryController.create')
    .middleware(['auth'])
    // .validator('Products/Category')

  /**
   * @swagger
   * /categories/{id}:
   *   post:
   *     tags:
   *       - Категории
   *     summary: Изминение категории
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *       - name: Category
   *         description: Категория
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/ProductCategory'
   *     responses:
   *       202:
   *         description: Обновленная категория
   *         schema:
   *           $ref: '#/definitions/ProductCategory'
   */
  Route.post('/:id', 'Products/CategoryController.update')
    .middleware(['auth'])
    //.validator('Products/Category')

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
  Route.delete('/:id', 'Products/CategoryController.destroy')
    .middleware(['auth'])

}).prefix('/api/categories')

/**
 * AttributeGroups
 */
Route.group(() => {

  /**
   * @swagger
   * /attribute-groups/:
   *   get:
   *     tags:
   *       - Группы характеристик
   *     summary: Получить группы характеристик
   *     responses:
   *       200:
   *         description: Группы характеристик
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/AttributeGroups'
   */
  Route.get('', 'Settings/AttributeGroupsController.index')


  /**
   * @swagger
   * /attribute-groups/{id}:
   *   get:
   *     tags:
   *       - Группы характеристик
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *     summary: Получить группу со всеми характеристиками
   *     responses:
   *       200:
   *         description: Группа с характеристиками
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/AttributeGroups'
   */
  Route.get('/:id', 'Settings/AttributeGroupsController.show')


  /**
   * @swagger
   * /attribute-groups/:
   *   put:
   *     tags:
   *       - Группы характеристик
   *     summary: Создать группу характеристик
   *     parameters:
   *       - name: AttributeGroups
   *         description: Группа характеристик
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/AttributeGroups'
   *     responses:
   *       202:
   *         description: Обновленная группа характеристик
   *         schema:
   *           $ref: '#/definitions/AttributeGroups'
   */
  Route.put('/', 'Settings/AttributeGroupsController.create')
    .middleware(['auth'])

  /**
   * @swagger
   * /attribute-groups/{id}:
   *   post:
   *     tags:
   *       - Группы характеристик
   *     summary: Изминение группы характеристик
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *       - name: AttributeGroups
   *         description: Группа характеристик
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/AttributeGroups'
   *     responses:
   *       202:
   *         description: Обновленная группа характеристик
   *         schema:
   *           $ref: '#/definitions/AttributeGroups'
   */
  Route.post('/:id', 'Settings/AttributeGroupsController.update')
    .middleware(['auth'])

  /**
   * @swagger
   * /attribute-groups/{id}:
   *   delete:
   *     tags:
   *       - Группы характеристик
   *     summary: Удалить группу характеристик
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *     responses:
   *       202:
   *         description: Успешно удаленно
   *       404:
   *         $ref: '#/responses/NotFound'
   *
   */
  Route.delete('/:id', 'Settings/AttributeGroupsController.destroy')
    .middleware(['auth'])

}).prefix('/api/attribute-groups')
/**
 * AttributeGroups
 */
Route.group(() => {

  /**
   * @swagger
   * /attribute/:
   *   get:
   *     tags:
   *       - Характеристики
   *     summary: Получить характеристики
   *     responses:
   *       200:
   *         description: Характеристики
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/Attribute'
   */
  Route.get('', 'Settings/AttributeController.index')


  /**
   * @swagger
   * /attribute/:
   *   put:
   *     tags:
   *       - Характеристики
   *     summary: Создать характеристику
   *     parameters:
   *       - name: Attribute
   *         description: Характеристика
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Attribute'
   *     responses:
   *       202:
   *         description: Обновленная характеристика
   *         schema:
   *           $ref: '#/definitions/Attribute'
   */
  Route.put('/', 'Settings/AttributeController.create')
    .middleware(['auth'])

  /**
   * @swagger
   * /attribute/{id}:
   *   post:
   *     tags:
   *       - Характеристики
   *     summary: Изминение характеристики
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *       - name: Attribute
   *         description: Характеристикиа
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Attribute'
   *     responses:
   *       202:
   *         description: Обновленная характеристик
   *         schema:
   *           $ref: '#/definitions/Attribute'
   */
  Route.post('/:id', 'Settings/AttributeController.update')
    .middleware(['auth'])

  /**
   * @swagger
   * /attribute/{id}:
   *   delete:
   *     tags:
   *       - Характеристики
   *     summary: Удалить характеристику
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *     responses:
   *       202:
   *         description: Успешно удаленно
   *       404:
   *         $ref: '#/responses/NotFound'
   *
   */
  Route.delete('/:id', 'Settings/AttributeController.destroy')
    .middleware(['auth'])

}).prefix('/api/attribute')

/**
 * Product
 */
Route.group(() => {

  /**
   * @swagger
   * /products/{link}:
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
   * /products/:
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
   * /products/:
   *   put:
   *     tags:
   *       - Продукты
   *     summary: Добавление товара
   *     parameters:
   *       - name: body
   *         description: JSON of product
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/StoreProduct'
   *     responses:
   *       200:
   *         description: Продукт
   *         schema:
   *           $ref: '#/definitions/Product'
   */
  Route.put('/', 'Products/ProductController.create')
    .middleware(['auth'])
    //.validator('Products/Product')

  /**
   * @swagger
   * /products/{id}:
   *   post:
   *     tags:
   *       - Продукты
   *     summary: Обновление товара
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *       - name: product
   *         description: Продукт
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Product'
   *     responses:
   *       202:
   *         description: Обновленый продукт
   *         schema:
   *           $ref: '#/definitions/Product'
   */
  Route.post('/:id', 'Products/ProductController.update')
    .middleware(['auth'])
    //.validator('Products/Product')

  /**
   * @swagger
   * /products/{id}:
   *   delete:
   *     tags:
   *       - Продукты
   *     summary:
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *     responses:
   *       202:
   *         description: Удалено
   *       404:
   *         $ref: '#/responses/NotFound'
   */
  Route.delete('/:id', 'Products/ProductController.destroy')
    .middleware(['auth'])

}).prefix('api/products')


Route.group(() => {
  /**
   * @swagger
   * /colors/:
   *   get:
   *     tags:
   *       - Цвета
   *     summary: Получение массива цветов
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          $ref: '#/definitions/Color'
   */
  Route.get("/", "Settings/ColorController.index")


  /**
   * @swagger
   * /colors/:
   *   put:
   *     tags:
   *       - Цвета
   *     summary: Добавление цвета
   *     parameters:
   *       - name: color
   *         description: color
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Color'
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          $ref: '#/definitions/Color'
   */
  Route.put("/", "Settings/ColorController.create")
  .middleware(['auth'])

  /**
   * @swagger
   * /colors/{id}:
   *   get:
   *     tags:
   *       - Цвета
   *     summary: Получение цвета
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          $ref: '#/definitions/Color'
   */
  Route.get("/:id", "Settings/ColorController.show")

  /**
   * @swagger
   * /colors/{id}:
   *   post:
   *     tags:
   *       - Цвета
   *     summary: Изминение цвета
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *       - name: color
   *         description: color
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Color'
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          $ref: '#/definitions/Color'
   */
  Route.post("/:id", "Settings/ColorController.update")
  .middleware(['auth'])

  /**
   * @swagger
   * /colors/{id}:
   *   delete:
   *     tags:
   *       - Цвета
   *     summary: Удаление цвета
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          description: Удалено
   */
  Route.delete("/:id", "Settings/ColorController.destroy")
  .middleware(['auth'])

}).prefix("/api/colors")

Route.group(() => {

  /**
   * @swagger
   * /slider/:
   *   get:
   *     tags:
   *       - Слайдер
   *     summary: Получение массива слайдов
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          $ref: '#/definitions/Slider'
   */
  Route.get("", "SliderController.index")

  /**
   * @swagger
   * /slider/all/:
   *   get:
   *     tags:
   *       - Слайдер
   *     summary: Получение всех слайдов
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          $ref: '#/definitions/Slider'
   */
  Route.get("/all/", "SliderController.all")

  /**
   * @swagger
   * /slider/:
   *   put:
   *     tags:
   *       - Слайдер
   *     summary: Добавление слайда
   *     parameters:
   *       - name: menu
   *         description: menu
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Slider'
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          $ref: '#/definitions/Slider'
   */
  Route.put("", "SliderController.create")

  /**
   * @swagger
   * /slider/{id}:
   *   post:
   *     tags:
   *       - Слайдер
   *     summary: Изменение слайда
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *       - name: menu
   *         description: menu
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Slider'
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          $ref: '#/definitions/Slider'
   */
  Route.post("/:id", "SliderController.update")

  /**
   * @swagger
   * /slider/{id}:
   *   delete:
   *     tags:
   *       - Слайдер
   *     summary: Удаление массива меню
   *     parameters:
   *       - $ref: '#/parameters/Id'
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          description: Удалено
   */
  Route.delete("/:id", "SliderController.destroy")
}).prefix("api/slider")


Route.group(() => {

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
   * /menu/all/:
   *   get:
   *     tags:
   *       - Меню
   *     summary: Получение всего меню без вложенностей
   *     responses:
   *       404:
   *         $ref: '#/responses/NotFound'
   *       200:
   *         schema:
   *          $ref: '#/definitions/Menu'
   */
  Route.get("/all/", "MenuController.all")

  /**
   * @swagger
   * /menu/:
   *   put:
   *     tags:
   *       - Меню
   *     summary: Добавление меню
   *     parameters:
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
  Route.put("", "MenuController.create")

  /**
   * @swagger
   * /menu/{id}:
   *   post:
   *     tags:
   *       - Меню
   *     summary: Изменение меню
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
   *          description: Удалено
   */
  Route.delete("/:id", "MenuController.destroy")
}).prefix("api/menu")
