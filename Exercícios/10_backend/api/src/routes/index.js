const { Router } = require("express");

const usersRoutes = require('./users.routes.js')
const notesRoutes = require('./notes.routes')
const tagsRoutes = require('./tags.routes')
const sessionRoutes = require('./sessions.routes')
const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/notes', notesRoutes);
routes.use('/tags', tagsRoutes);
routes.use('/sessions', sessionRoutes);


module.exports = routes;