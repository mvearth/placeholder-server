const error_param = require('../../err/error');

module.exports = {
  validateCreatePerson(person) {
    if(!person.email){
      throw error_param.getError('email is required.', 400, 'ERROR_PERSON_INVALIDATE');
    }

    if(!person.name){
      throw error_param.getError('name is required.', 400, 'ERROR_PERSON_INVALIDATE');
    }

    if(!person.nickname){
      throw error_param.getError('nickname is required.', 400, 'ERROR_PERSON_INVALIDATE');
    }

    if(!person.password){
      throw error_param.getError('password is required.', 400, 'ERROR_PERSON_INVALIDATE');
    }
  }
}