module.exports = {
  getError(message, status, type) {
    return {
      isErr: true,
      toJson() {
        return {
          message: message || 'Internal server error',
          status: status || 500,
          type: type || 'INTERNAL_SERVER_ERROR'
        }
      }
    }
  }
}