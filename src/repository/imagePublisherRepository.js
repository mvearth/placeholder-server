const connection = require('../database/connection');
const table = 'image_publisher';

module.exports = {
  async create(id_publisher, image) {
    return connection(table).insert({
      id_publisher, image
    });
  },

  async getById(id_publisher) {
    return connection(table).select('*').where('id_publisher', id_publisher);
  },

  async delete(id) {
    await connection(table).where('id', id).del();
  },

  async update(id, image) {
    return connection(table)
    .update(image)
    .where('id', id);
  },

  async getAll() {
    return connection(table).select('*');
  }
}