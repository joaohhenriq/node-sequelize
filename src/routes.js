const express = require("express")
const UserController = require("./controllers/UserController")
const AddressesController = require("./controllers/AddressesController")

const routes = express.Router()

routes.get('/users', UserController.findAll)
routes.post('/users', UserController.create)

routes.get('/users/:user_id/addresses', AddressesController.find)
routes.post('/users/:user_id/addresses', AddressesController.create)

module.exports = routes