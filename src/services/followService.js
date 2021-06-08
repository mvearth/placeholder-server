const service_person = require('./personService');
const error = require('../err/error');

module.exports = {
  async addFollow(email_follower, email_following) {
    const person_follower = service_person.getPerson({ email: email_follower });

    if(!person_follower || !person_follower){

    }

    const person_following = service_person.getPerson({ email: email_following });
  }

}