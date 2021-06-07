const connection = require('../database/connection');
const table = 'person';

module.exports = {
  async create(person) {
    await connection(table).insert({
      name: person.name,
      nickname: person.nickname,
      email: person.email,
      password: person.password,
      photo: person.photo
    });

    return person.email;
  },

  async getAll() {
    return connection(table).select('email', 'name', 'nickname', 'photo');
  }
}