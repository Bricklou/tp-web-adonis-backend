import { DatabaseService } from '#services/database_service'
import app from '@adonisjs/core/services/app'
import { DataTypes, Model } from 'sequelize'

const sequelize = await app.container.make(DatabaseService)

export default class User extends Model {
  declare id: number
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    timestamps: true,
  }
)
