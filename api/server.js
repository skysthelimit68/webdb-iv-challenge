const express = require('express');
const helmet = require('helmet')
const dishesRouter = require('../dishes/dishes-router.js');
const recipeRouter = require('../recipes/recipes-router.js');

const server = express();

server.use(express.json());
server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipeRouter);
server.use(helmet());

module.exports = server;