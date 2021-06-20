const connection = require('../database/connection');
const table = 'follow';

module.exports = {
  async addFollow(email_follower, email_following) {
    await connection(table).insert({
      email_follower, email_following
    });
  },
  async removeFollow(email_follower, email_following) {
    await connection(table).del().where({
      email_follower, email_following
    });
  },
  async getAll(email_follower) {
    return connection(table).where({ email_follower }).select('*');
  }
}