// 05-JWT-Basics/starter/errors/bad-request.js
const CustomAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");
class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;
