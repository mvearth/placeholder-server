const repository_person = require('../repository/personRepository');
const error = require('../err/error');
const { getSearchPersons } = require('../repository/personRepository');

const service = {
  async createPerson(person) {
    const person_db_by_nickname = await repository_person.getFindByNickName(person.nickname);
    const person_db_by_email = await repository_person.getFindByEmail(person.email);
    if(person_db_by_nickname 
        && person_db_by_nickname.nickname 
        && person_db_by_email
        && person_db_by_email.email) {
          throw error.getError('user already exists', 409, 'CONFLICT');
    }
    await repository_person.create(person);
  },

  async deletePerson(id) {
    await repository_person.delete(id);
  },

  async updatePerson(id, person) {
    const personOld = await repository_person.getFindById(id);

    
    if(!personOld || !personOld.id) {
      throw error.getError('id is not found', 404, 'ENTITY_NOT_FOUND');
    }
    
    await repository_person.update(id, person);
  },

  async login(email, password) {
    const person = await repository_person.get({ email, password });
    if(!person || !person.name) {
      throw error.getError('Entity not found', 403, 'FORBIDDEN');
    }

    return person;
  },

  async getPersonFromNickname(nickname) {
    return repository_person.getFindByNickName(nickname);
  },

  async getPerson(where) {
    return repository_person.get(where);
  },

  async getSearchPersons(value){
    return repository_person.getSearchPersons(value);
  },

  async getAllPerson() {
    return repository_person.getAll();
  }
}

module.exports = service;