require('dotenv').config()
const app = require('./app')
const { connectDatabase } = require('./utils/database.util')

const PORT = process.env.APP_PORT

const serverStart = async () => {
  connectDatabase()

  app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
  })
}

serverStart()
