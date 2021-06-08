
const validator =   require('./validators/follow_validator');

const controller =  {
  async addFolloww(req,res) {
    try {
      const body = req.body;
      validator.validateEmail(body);
      await service_person.createPerson(person);
      return res.json({ status: 'OK' });
    } catch (err) {
      if(err.isErr) {
        const error = err.toJson();
        return res.status(error.status).json(error);
      }
  
      return res.status(500).json(error.getError().toJson());
    }
  },
  async removeFolloww(req,res) {
    try {
      const body = req.body;
      validator.validateEmail(body);
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