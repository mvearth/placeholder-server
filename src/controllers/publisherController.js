const error = require('../err/error');
const service = require('../services/publisherService');

const controller =  {
  async postMessage(req,res) {
    try {
      const post = req.body;
      service.createPublisher(post);
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
      const posts = await service.getAll();
      return res.json(posts);
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