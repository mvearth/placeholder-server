const connection = require('../database/connection');
const table = 'follow';

module.exports = {
  async addFollow(email_follower, email_following) {
    await connection(table).insert({
      email_follower, email_following
    });
  }
}