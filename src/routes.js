const express = require('express');
const controller_person = require('./controllers/personController');

const routes = express.Router();

routes.post('/person', controller_person.createPerson);

module.exports = routes;