import User from '#models/user'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AppsController {
  public constructor() {}

  public async index(ctx: HttpContext) {
    const count = await User.count()
    return `It works, there is ${count} users in the database!`
  }
}
