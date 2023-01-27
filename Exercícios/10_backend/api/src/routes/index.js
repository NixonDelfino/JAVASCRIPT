const { Router } = require("express");

const usersRoutes = require('./usersRoutes.js')
const notesRoutes = require('./notesRoutes.js')
const tagsRoutes = require('./tagsRoutes.js')
const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/notes', notesRoutes);
routes.use('/tags', tagsRoutes);


module.exports = routes;