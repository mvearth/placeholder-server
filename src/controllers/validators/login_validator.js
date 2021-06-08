const error_param = require('../../err/error');

module.exports = {
  validateLogin(body) {
    if(!body.email){
      throw error_param.getError('email is required.', 400, 'ERROR_EMAIL_INVALIDATE');
    }

    if(!body.password){
      throw error_param.getError('password is required.', 400, 'ERROR_EMAIL_INVALIDATE');
    }
  }
}