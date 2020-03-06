require('dotenv').config()
const app = require('./app')

const PORT = process.env.PORT

const serverStart = async () => {
  app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
  })
}

serverStart()
