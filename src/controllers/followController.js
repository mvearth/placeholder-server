

const controller =  {
  async addFolloww(req,res) {
    try {
      const person = req.body;
      validator.validateCreatePerson(person);
      await service_person.createPerson(person);
      return res.json();
    } catch (err) {
      this.getError(err, res);
    }
  },
  async removeFolloww(req,res) {
    try {
      const person = req.body;
      validator.validateCreatePerson(person);
      await service_person.createPerson(person);
      return res.json();
    } catch (err) {
      this.getError(err, res);
    }
  }
}

module.exports = controller;