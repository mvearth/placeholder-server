const express = require('express');
const controller_person = require('./controllers/personController');
const controller_follow = require('./controllers/followController');
const controller_login = require('./controllers/loginController');


const routes = express.Router();

// Person
routes.post('/person', controller_person.createPerson);
routes.post('/person/:id', controller_person.updatePerson);
routes.get('/person', controller_person.getAllPerson);
routes.get('/person/:nickname', controller_person.getPerson);

// Login
routes.post('/login', controller_login.login);

// Follow
routes.post('/follow', controller_follow.addFolloww);
routes.delete('/follow', controller_follow.removeFollow);


module.exports = routes;