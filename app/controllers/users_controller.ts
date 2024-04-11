import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createUserValidator } from '#validators/user'
import { inject } from '@adonisjs/core'
import { UserService } from '#services/user_service'

@inject()
export default class UsersController {
  constructor(private userService: UserService) {}

  async getUsers(): Promise<User[]> {
    return this.userService.getUsers()
  }

  async createUser({ request }: HttpContext) {
    const data = await request.validateUsing(createUserValidator)

    const user = await this.userService.create(data.username)

    return user.toJSON()
  }
}
