const express = require("express")
const UserController = require("./controllers/UserController")

const routes = express.Router()

routes.get('/users', UserController.findAllUsers)
routes.post('/users', UserController.createUser)

module.exports = routes