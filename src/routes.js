const express = require('express');
const controller_person = require('./controllers/personController');

const routes = express.Router();

routes.post('/person', controller_person.createPerson);
routes.post('/person/:id', controller_person.updatePerson);
routes.get('/person', controller_person.getAllPerson);
routes.get('/person/:nickname', controller_person.getPerson);
module.exports = routes;