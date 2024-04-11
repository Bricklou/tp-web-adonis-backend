import { inject } from '@adonisjs/core'
import User from '#models/user'

@inject()
export class UserService {
  async create(username: string): Promise<User> {
    console.log('Create user "%s"', username)

    const user = new User({ username })
    await user.save()

    return user
  }

  async getUsers(): Promise<User[]> {
    return User.findAll()
  }
}
