const express = require('express');
const controller_person = require('./controllers/personController');
const controller_follow = require('./controllers/followController');
const controller_login = require('./controllers/loginController');
const controller_publisher = require('./controllers/publisherController');

const routes = express.Router();

// Person
routes.post('/person', controller_person.createPerson);
routes.post('/person/:id', controller_person.updatePerson);
routes.get('/person', controller_person.getAllPerson);
routes.get('/person/:nickname', controller_person.getPerson);
routes.delete('/person/:id', controller_person.deletePerson);

// Login
routes.post('/login', controller_login.login);

// Follow
routes.post('/follow', controller_follow.addFollow);
routes.delete('/follow', controller_follow.removeFollow);

// Publisher
routes.post('/publisher', controller_publisher.postMessage);
routes.get('/publisher', controller_publisher.getAllMessage);

routes.get('/all/publisher', controller_publisher.getAll);
routes.delete('/publisher', controller_publisher.getDeleteMessage);

module.exports = routes;