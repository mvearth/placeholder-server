const error_param = require('../../err/error_param');
module.exports = {
  validateCreatePerson(person) {
    if(!person.email){
      throw error_param.getError('email is required.')
    }

    if(!person.name){
      throw error_param.getError('name is required.')
    }

    if(!person.nickname){
      throw error_param.getError('nickname is required.')
    }

    if(!person.password){
      throw error_param.getError('password is required.')
    }
  }
}