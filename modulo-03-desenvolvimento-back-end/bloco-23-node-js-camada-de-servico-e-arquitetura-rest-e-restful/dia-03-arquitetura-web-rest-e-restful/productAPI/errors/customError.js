class customError extends Error {
  constructor(status, code, message) {
    super(message);
    this.name = 'customError';
    this.status = status;
    this.error = { code, message }
  }
}

module.exports = customError;
