const service_person = require('../services/personService');
const validator =   require('./validators/person_validetor');
const error = require('../err/error');

const controller =  {
  async createPerson(req,res) {
    try {
      const person = req.body;
      validator.validateCreatePerson(person);
      await service_person.createPerson(person);
      return res.json();
    } catch (err) {
      this.getError(err, res);
    }
  },

  async updatePerson(req,res) {
    try {
      const id = req.params.id;
      const person = req.body;
      await service_person.updatePerson(id, person);
      return res.json();
    } catch (err) {
      this.getError(err, res);
    }
  },

  async getPerson(req, res) {
    return res.json(await service_person.getPerson(req.params.nickname));   
  },

  async getAllPerson(req, res) {
    return res.json(await service_person.getAllPerson());
  },

  getError(err, res) {
    if(err.isErr) {
      const error = err.toJson();
      return res.status(error.status).json(error);
    }

    return res.status(500).json(error.getError().toJson());
  }
}

module.exports = controller;