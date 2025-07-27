class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode || 500;
    this.message = message || 'Internal Server Error';;

    Error.captureStackTrace(this, this.construcor);
  }
}

module.exports = ErrorHandler;