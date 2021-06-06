const repository_person = require('../repository/personRepository');
const service = {
  async createPerson(person) {
    return repository_person.create(person);
  }
}

module.exports = service;