const { Router } = require("express");
const TagsController = require("../controllers/tagsController");
const ensureAuth = require("../middleware/ensureAuth")

const tagsRoutes = Router();

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuth, tagsController.index)

module.exports = tagsRoutes;