const service_person = require('../services/personService');

const controller =  {
  async createPerson(req,res) {
    const person = req.body;
    await service_person.createPerson(person);
    return res.json();
  }
}

module.exports = controller;