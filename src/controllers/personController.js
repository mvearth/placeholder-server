const service_person = require('../services/personService');
const validator =   require('./validators/person_validator');
const error = require('../err/error');

const controller =  {
  async createPerson(req,res) {
    try {
      const person = req.body;
      validator.validateCreatePerson(person);
      await service_person.createPerson(person);
      return res.json();
    } catch (err) {
      if(err.isErr) {
        const error = err.toJson();
        return res.status(error.status).json(error);
      }
  
      return res.status(500).json(error.getError().toJson());
    }
  },

  async updatePerson(req,res) {
    try {
      const id = req.params.id;
      const person = req.body;
      await service_person.updatePerson(id, person);
      return res.json();
    } catch (err) {
      if(err.isErr) {
        const error = err.toJson();
        return res.status(error.status).json(error);
      }
  
      return res.status(500).json(error.getError().toJson());
    }
  },

  async deletePerson(req,res) {
    try {
      await service_person.deletePerson(req.params.id);
      return res.json();
    } catch (err) {
      if(err.isErr) {
        const error = err.toJson();
        return res.status(error.status).json(error);
      }
  
      return res.status(500).json(error.getError().toJson());
    }
  },

  async getPerson(req, res) {
    return res.json(await service_person.getPersonFromNickname(req.params.nickname));   
  },

  async getSearchPersons(req, res) {
    return res.json(await service_person.getSearchPersons(req.params.value));   
  },

  async getAllPerson(req, res) {
    return res.json(await service_person.getAllPerson());
  }
}

module.exports = controller;