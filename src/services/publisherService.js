const repository_publisher = require('../repository/publisherRepository');
const repository_image_publisher = require('../repository/imagePublisherRepository');
const error = require('../err/error');

const service = {
  async createPublisher(publisher) {
    const id_post = await repository_publisher.create(publisher);
    if(publisher.image) {
        await repository_image_publisher.create(id_post, publisher.image);
      }
  },
  async getPublisherFromEmailAndType(email, suggestion_type) {
    return await repository_publisher.getPublisherFromEmailAndType(email, suggestion_type);
  },
  async getPublisherFromFollowing(email, suggestion_type) {
    return await repository_publisher.getPublisherFromFollowing(email, suggestion_type);
  },
  async getPublisherFromRandomFollowing(email, suggestion_type) {
    return await repository_publisher.getPublisherFromRandomFollowing(email, suggestion_type);
  },
  async getPublisherFromEmail(email) {
    return await repository_publisher.getPublisherFromEmail(email);
  },
  async getAll() {
    return repository_publisher.getAll();
  },

  async delete(id) {
    await repository_publisher.delete(id);
  }
}

module.exports = service;