const { Router } = require("express");
const multer = require('multer')

const uploadConfig = require('../configs/upload')
const usersController = require("../controllers/usersController");
const ensureAuth = require("../middleware/ensureAuth")


const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const UsersController = new usersController();

usersRoutes.post("/", UsersController.create)
usersRoutes.put('/', ensureAuth,UsersController.update)
usersRoutes.patch('/avatar', ensureAuth, upload.single("avatar"), (req, res) => {
    console.log(req.file.filename);
    res.json()
} )

module.exports = usersRoutes;