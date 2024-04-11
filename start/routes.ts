/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const AppController = () => import('#controllers/apps_controller')
const UsersController = () => import('#controllers/users_controller')

router.get('/', [AppController, 'index'])

router
  .group(() => {
    router.get('/users', [UsersController, 'getUsers'])
    router.post('/users', [UsersController, 'createUser'])
  })
  .prefix('api')
