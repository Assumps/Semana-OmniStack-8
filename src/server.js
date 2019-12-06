const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-5xvoy.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

server.use(express.json());

server.use(routes);

server.listen(3333);
