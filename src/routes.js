const Express = require('express');

const DevController = require('./controllers/DevController');

const routes = Express.Router();

routes.post('/devs' , DevController.store);

module.exports = routes;