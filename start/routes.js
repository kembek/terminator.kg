'use strict'

const Route = use('Route')

// Route
//   .group(() => {
//     Route.get('')
//   }).prefix('api')


Route.any('*', 'NuxtController.render')
