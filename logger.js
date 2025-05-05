const winston = require("winston");
require("winston-loggly-bulk");

winston.add(
  new winston.transports.Loggly({
    token: process.env.LOGGLY_TOKEN,
    subdomain: process.env.LOGGLY_SUBDOMAIN,
    tags: ["NodeJS"],
    json: true,
  })
);

module.exports = winston;
