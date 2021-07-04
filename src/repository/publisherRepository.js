const connection = require('../database/connection');
const table = 'publisher';

module.exports = {
  async create(post) {
    return connection(table).insert({
      descritpion: post.description,
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

  async getAllMessage(email, suggestion_type) {
    return connection(table).where({ email, suggestion_type }).select('*');
  },

  async getAll() {
    return connection(table).select('*');
  },

  async getPublisherFromEmailAndType(email_follower, suggestion_type) {
    const person = await connection('follow').where({ email_follower }).select('email_following');
    const email_person = person.map(p => p.email_following);
    return connection(table).whereIn('email', email_person).where({ suggestion_type })
      .join('image_publisher as ip', 'publisher.id', '=', 'ip.id')
      .select('*');

    // join('authors as author1', 'books.author_name', '=', 'author1.name')
  },

  async getPublisherFromEmail(email_person) {
    return connection(table).where('email', email_person)
      .join('image_publisher as ip', 'publisher.id', '=', 'ip.id')
      .select('*');

    // join('authors as author1', 'books.author_name', '=', 'author1.name')
  }
}
