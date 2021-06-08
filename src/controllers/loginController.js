const validator =   require('./validators/login_validator');
const service_person = require('../services/personService');

const controller =  {
  async login(req,res) {
    try {
      const { email, password } = req.body;
      validator.validateLogin({ email, password });
      const person = await service_person.login(email, password);
      return res.json(person);
    } catch (err) {
      if(err.isErr) {
        const error = err.toJson();
        return res.status(error.status).json(error);
      }
  
      return res.status(500).json(error.getError().toJson());
    }
  }
}

module.exports = controller;