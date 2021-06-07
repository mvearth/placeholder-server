const service_person = require('../services/personService');
const validator =   require('./validators/person_validetor');

const controller =  {
  async createPerson(req,res) {
    try {
      const person = req.body;
      validator.validateCreatePerson(person);
      
      const email = await service_person.createPerson(person);
      return res.json({ email });
    } catch (err) {
      if(err.isErr){
        const error = err.toJson();
        return res.status(error.status).json(error);
      }
    }
  },

  async getAllPerson(req, res) {
    const persons = await service_person.getAllPerson();
    return res.json(persons);
  }
}

module.exports = controller;