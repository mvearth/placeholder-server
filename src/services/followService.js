const service_person = require('./personService');
const reposity_follow = require('../repository/followRepository');
const error = require('../err/error');

module.exports = {
  async addFollow(email_follower, email_following) {
    const person_follower = await service_person.getPerson({ email: email_follower });
    if (!person_follower || !person_follower.nickname) {
      throw error.getError('email follower is not found', 400, 'BAD_REQUEST');
    }

    const person_following = await service_person.getPerson({ email: email_following });
    if (!person_following || !person_following.nickname) {
      throw error.getError('email following is not found', 400, 'BAD_REQUEST');
    }

    await reposity_follow.addFollow(
      person_follower.email, person_following.email
    );
  },
  async removeFollow(email_follower, email_following) {
    await reposity_follow.removeFollow(email_follower, email_following);
  },
  async getFollowings(email_follower) {
    let followings = await reposity_follow.getEmailFollowings(email_follower);
    var people = [];
    for (let following of followings){
      let person = await service_person.getPersonByEmail(following.email_following);  
      people.push(person);
    }

    return people;
  },
  async getFollowers(email_following){
    let followers = await reposity_follow.getEmailFollowers(email_following);
    var people = [];
    for (let follower of followers){
      let person = await service_person.getPersonByEmail(follower.email_follower);  
      people.push(person);
    }

    return people;
  }
}