const logger = require("./logger");

const analyticsMiddleware = (req, res, next) => {
  const logData = {
    method: req.method,
    url: req.originalUrl,
    timestamp: new Date().toISOString(),
    ip: req.ip,
    userAgent: req.headers["user-agent"],
  };

  logger.info(logData);
  next();
};

module.exports = analyticsMiddleware;
