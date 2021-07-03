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
  },
  async getEmailFollowings(email_follower){
    return connection(table).where('email_follower', email_follower).select('email_following');
  },
  async getEmailFollowers(email_following){
    return connection(table).where('email_following', email_following).select('email_follower');
  }
}