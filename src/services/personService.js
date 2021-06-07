const repository_person = require('../repository/personRepository');
const error = require('../err/error');


const service = {
  async createPerson(person) {
    const person_db = await repository_person.getFindByNickName(person.nickname);
    if(person_db || person_db.nickname) {
      return;
    }

    await repository_person.create(person);
  },

  async updatePerson(id, person) {
    const personOld = await repository_person.getFindById(id);

    
    if(!personOld || !personOld.id) {
      throw error.getError('id is not found', 404, 'ENTITY_NOT_FOUND');
    }
    
    console.log(personOld);
    await repository_person.update(id, person);
  },

  async getPerson(nickname) {
    return repository_person.getFindByNickName(nickname);
  },

  async getAllPerson() {
    return repository_person.getAll();
  }
}

module.exports = service;