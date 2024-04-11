import User from '#models/user'
import { inject } from '@adonisjs/core'

@inject()
export default class AppsController {
  constructor() {}

  async index() {
    const count = await User.count()

    return {
      message: `It works, there is ${count} users in the database!`,
    }
  }
}
