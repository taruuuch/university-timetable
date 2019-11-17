import morgan from 'morgan';
import { createLogger, transports, format } from 'winston';

const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(info => `[${info.timestamp}] [${info.level.toUpperCase()}]: ${info.message}`)
  ),
  transports: [
    new transports.File({
      filename: './src/logs/schedule.log',
      json: false,
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new transports.Console(),
  ]
});

logger.stream = {
  write: message => logger.info(message.substring(0, message.lastIndexOf('\n')))
};

export default morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream: logger.stream }
);
