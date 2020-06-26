const winston = require('winston');

const logger = new (winston.createLogger)({
  transports: [new (winston.transports.Console)({ json: false })],
});

logger.level = 'debug';

if (process.env.LEVEL) {
  logger.level = process.env.LEVEL;
}

module.exports = logger;
