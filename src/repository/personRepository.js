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
  },

  async getFindByNickName(nickname) {
    return connection(table)
      .select('email', 'name', 'nickname', 'photo', 'id')
      .where('nickname', nickname)
      .first();
  },

  async update(id, person) {
    return connection(table)
    .update(person)
    .where('id', id);
  },

  async get(where) {
    return connection(table)
    .select('email', 'name', 'nickname', 'photo', 'id')
    .where(where)
    .first();
  },

  async getFindById(id) {
    return connection(table)
      .select('email', 'name', 'nickname', 'photo', 'id')
      .where('id', id)
      .first();
  },

  async getAll() {
    return connection(table).select('email', 'name', 'nickname', 'photo');
  }
}