'use strict'
const Route = use('Route')

use('require-all')(`${use('Helpers').appRoot()}/start`)

Route.any('*', 'NuxtController.render')
