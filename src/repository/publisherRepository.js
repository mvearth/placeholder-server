const connection = require('../database/connection');
const table = 'publisher';

module.exports = {
  async create(post) {
    return connection(table).insert({
      descritpion: post.descritpion,
      email: post.email,
      suggestion_type: post.suggestion_type,
      title: post.title,
      author: post.author,
      album: post.album,
      artist: post.artist,
      release_date: post.release_date,
      publisher: post.publisher,
      created_at: new Date().toString()
    });
  },

  async delete(id) {
    await connection(table).where('id', id).del();
  },

  async update(id, post) {
    return connection(table)
    .update(post)
    .where('id', id);
  },

  async getAll() {
    return connection(table).select('*');
  }
}