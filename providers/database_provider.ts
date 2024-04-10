import { DatabaseService } from '#services/database_service'
import type { ApplicationService } from '@adonisjs/core/types'

export default class DatabaseProvider {
  private models = [() => import('#models/user')]

  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {
    this.app.container.singleton(DatabaseService, () => new DatabaseService())
  }

  /**
   * The container bindings have booted
   */
  async boot() {}

  /**
   * The application has been booted
   */
  async start() {
    const dbService = await this.app.container.make(DatabaseService)
    await dbService.authenticate()
    await dbService.sync()
    for (const call of this.models) {
      const model = await call()
      await model.default.sync()
    }
  }

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {
    //const dbService = await this.app.container.make(DatabaseService)
    //await dbService.close()
  }
}
