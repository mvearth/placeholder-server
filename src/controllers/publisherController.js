const error = require('../err/error');
const service = require('../services/publisherService');

const controller =  {
  async postMessage(req,res) {
    try {
      const post = req.body;
      await service.createPublisher(post);
      return res.json('OK');
    } catch (err) {
      if(err.isErr) {
        const error = err.toJson();
        return res.status(error.status).json(error);
      }
      return res.status(500).json(error.getError().toJson());
    }
  },
  async getAllMessage(req,res) {
    try {
      const posts = await service.getPublisherFromEmailAndType(req.query.email, req.query.suggestion_type);
      return res.json(posts);
    } catch (err) {
      if(err.isErr) {
        const error = err.toJson();
        return res.status(error.status).json(error);
      }
      return res.status(500).json(error.getError().toJson());
    }
  },
  async getAllFollowingMessage(req,res) {
    try {
      const posts = await service.getPublisherFromFollowing(req.query.email, req.query.suggestion_type);
      return res.json(posts);
    } catch (err) {
      if(err.isErr) {
        const error = err.toJson();
        return res.status(error.status).json(error);
      }
      return res.status(500).json(error.getError().toJson());
    }
  },
  async getAll(req,res) {
    const posts = await service.getAll();
    return res.json(posts);
  },

  async getDeleteMessage(req,res) {
    try {
      await service.delete(req.body.id);
      return res.json('Ok');
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