const { STATUS_CODES } = require('../../shared/constants/api');

class ApiResponse {
  static success(res, data = null, message = 'Success', statusCode = STATUS_CODES.OK) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  static error(res, message = 'Error', statusCode = STATUS_CODES.INTERNAL_SERVER_ERROR) {
    return res.status(statusCode).json({
      success: false,
      message,
    });
  }

  static created(res, data = null, message = 'Created successfully') {
    return this.success(res, data, message, STATUS_CODES.CREATED);
  }

  static badRequest(res, message = 'Bad request') {
    return this.error(res, message, STATUS_CODES.BAD_REQUEST);
  }

  static unauthorized(res, message = 'Unauthorized') {
    return this.error(res, message, STATUS_CODES.UNAUTHORIZED);
  }

  static forbidden(res, message = 'Forbidden') {
    return this.error(res, message, STATUS_CODES.FORBIDDEN);
  }

  static notFound(res, message = 'Not found') {
    return this.error(res, message, STATUS_CODES.NOT_FOUND);
  }
}

module.exports = ApiResponse; 