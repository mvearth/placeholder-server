const error_param = require('../../err/error');

module.exports = {
  validateEmail(body) {
    if(!body.email_follower){
      throw error_param.getError('email_follower is required.', 400, 'ERROR_EMAIL_INVALIDATE');
    }

    if(!body.email_following){
      throw error_param.getError('email_following is required.', 400, 'ERROR_EMAIL_INVALIDATE');
    }
  }
}