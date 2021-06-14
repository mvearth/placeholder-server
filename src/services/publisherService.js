const repository_publisher = require('../repository/publisherRepository');
const repository_image = require('../repository/imageRepository');
const error = require('../err/error');

const service = {
  async createPublisher(publisher) {
    const id_post = await repository_publisher.create(publisher);
    if(publisher.images) {
      publisher.images.map(async image => {
        await repository_image.create(id_post, image);
      });
    }
  },
  async getAll() {
    const posts = await repository_publisher.getAll();
    if(posts) {
      posts.map(async post => {
        post.images = await repository_image.getById(post.id);
      });
    }

    return posts;
  }
}

module.exports = service;