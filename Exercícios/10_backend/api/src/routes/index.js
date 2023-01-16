const { Router } = require("express");
const usersRoutes = require("./users.routes.js");

const usersRouter = require('./users.routes.js')

const routes = Router()
routes.use('/users', usersRouter)

module.exports = routes;