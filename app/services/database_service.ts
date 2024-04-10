import env from '#start/env'
import { inject } from '@adonisjs/core'
import logger from '@adonisjs/core/services/logger'
import { Sequelize } from 'sequelize'

@inject()
export class DatabaseService extends Sequelize {
  public constructor() {
    super(env.get('DB_URL'), {
      logging: (...msg) => logger.debug(...msg),
    })
  }
}
