import { DatabaseService } from '#services/database_service'
import type { ApplicationService } from '@adonisjs/core/types'

export default class DatabaseProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {
    this.app.container.singleton(DatabaseService, () => {
      return new DatabaseService()
    })
  }

  /**
   * The container bindings have booted
   */
  async boot() {
    const dbService = await this.app.container.make(DatabaseService)
    await dbService.authenticate()
  }

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {
    const dbService = await this.app.container.make(DatabaseService)
    await dbService.close()
  }
}
