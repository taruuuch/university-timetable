const Sequelize = require('sequelize')
const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = require('../config/base.config')
const UserModel = require('../models/user.model')

const sequelize = new Sequelize(
  DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false
  }
)

const User = UserModel(sequelize, Sequelize)

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()

    console.log('Connection to the database has been established successfully.')
  } catch (error) {
    console.error(error)
    process.exit(-1)
  }
}

const closeConnection = async () => await sequelize.close()

module.exports = {
  sequelize,
  connectDB,
  closeConnection,
  User
}
