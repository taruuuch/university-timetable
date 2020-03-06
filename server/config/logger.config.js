const morgan = require('morgan')
const { createLogger, transports, format } = require('winston')
const dayjs = require('dayjs')

const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(info => `[${info.timestamp}] [${info.level.toUpperCase()}]: ${info.message}`)
  ),
  transports: [
    new transports.File({
      filename: `./logs/${dayjs().format('YYYY-MM-DD')}.log`,
      json: false,
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new transports.Console(),
  ]
})

logger.stream = {
  write: message => logger.info(message.substring(0, message.lastIndexOf('\n')))
}

module.exports = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream: logger.stream }
)
