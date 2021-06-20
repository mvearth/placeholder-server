
const validator =   require('./validators/follow_validator');
const error = require('../err/error');
const service_follow = require('../services/followService');

const controller =  {
  async addFollow(req,res) {
    try {
      const body = req.body;
      validator.validateEmail(body);
      await service_follow.addFollow(body.email_follower, body.email_following);
      return res.json({ status: 'OK' });
    } catch (err) {
      if(err.isErr) {
        const error = err.toJson();
        return res.status(error.status).json(error);
      }
      return res.status(500).json(error.getError().toJson());
    }
  },
  async removeFollow(req,res) {
    try {
      const body = req.body;
      validator.validateEmail(body);
      await service_follow.removeFollow(body.email_follower, body.email_following);
      return res.json({ status: 'OK' });
    } catch (err) {
      if(err.isErr) {
        const error = err.toJson();
        return res.status(error.status).json(error);
      }
      return res.status(500).json(error.getError().toJson());
    }
  }
}

module.exports = controller;