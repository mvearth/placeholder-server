module.exports = {
  getError(message) {
    return {
      isErr: true,
      toJson() {
        return {
          status: 400,
          type: 'ERROR_PERSON_INVALIDATE',
          message
        }
      }
    }
  }
}