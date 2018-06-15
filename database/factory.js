'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')
const _ = require('lodash')




Factory.blueprint('AUTHS/Group', (faker, i, data) => {
  return {
    title: data.title,
    description: faker.sentence()
  }
})

Factory.blueprint('AUTHS/Access', (faker, i, data) => {
  return {
    post: data.post,
    product: data.product,
    order: data.order,
    access: data.access,
    faq: data.faq,
    image: data.image,
    color: data.color,
    auth: data.auth,
    setting: data.setting
  }
})

Factory.blueprint('AUTHS/User', (faker) => {
  return {
    username: faker.username(),
    email: 'admin@terminator.kg',
    password: '123',
    is_status: true
  }
})

Factory.blueprint('FAQS/Category', (faker, i, data) => {
  return {
    user_id: data.user_id,
    title: faker.sentence({ words: _.random(1, 2) })
  }
})

Factory.blueprint('FAQS/Faq', (faker, i, data) => {
  return {
    user_id: data.user_id,
    title: faker.sentence({ words: _.random(1, 4) }),
    body: faker.paragraph()
  }
})

Factory.blueprint('FAQS/Question', (faker) => {
  return {
    email: faker.email(),
    question: faker.sentence({ words: _.random(3, 7) }),
    username: faker.name()
  }
})

Factory.blueprint('FAQS/Review', (faker) => {
  return {
    email: faker.email(),
    img: faker.url({ extensions: ['jpg', 'png'] }),
    username: faker.name(),
    description: faker.sentence({ words: _.random(5, 10) })
  }
})

Factory.blueprint('POSTS/Category', (faker, i, data) => {
  return {
    user_id: data.user_id,
    title: faker.sentence({ words: _.random(1, 2) })
  }
})

Factory.blueprint('POSTS/Post', (faker, i, data) => {
  return {
    user_id: data.user_id,
    thumbnail: faker.url({ extensions: ['jpg', 'png'] }),
    title: faker.sentence({ words: _.random(1, 4) }),
    body: faker.paragraph()
  }
})

Factory.blueprint('PRODUCTS/Categories', (faker, i, data) => {
  return data[i]
})

Factory.blueprint('PRODUCTS/ProductCategory', (faker, i, data) => {
  return {
    product_id: data.product_id,
    category_id: data.category_id
  }
})

Factory.blueprint('PRODUCTS/Product', (faker, i, data) => {
  return data[i]
})

Factory.blueprint('PRODUCTS/Video', (faker, i, data) => {
  return {
    user_id: data.user_id,
    url: faker.url({ domain: 'www.youtube.com' })
  }
})

Factory.blueprint('PRODUCTS/ProductImage', (faker, i, data) => {
  return {
    url: faker.url({ extensions: ['jpg', 'png'] })
  }
})

Factory.blueprint('PRODUCTS/Price', (faker, i, data) => {
  return {
    price: faker.floating({ fixed: 2, min: 0, max: 9999999 })
  }
})

Factory.blueprint('PRODUCTS/Image', (faker, i, data) => {
  return {
    title: faker.word({ length: 10 }),
    url: faker.url({ extensions: ['jpg', 'png'] })
  }
})

Factory.blueprint('ORDERS/Customer', (faker) => {
  return {
    email: faker.email(),
    username: faker.username(),
    phone: faker.phone(),
    is_status: faker.bool({ likelihood: 80 })
  }
})

Factory.blueprint('ORDERS/Order', (faker, i, data) => {
  return {
    comment: faker.sentence(),
    is_status: faker.bool({ likelihood: 20 })
  }
})
