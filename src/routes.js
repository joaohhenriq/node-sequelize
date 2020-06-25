const express = require("express")
const UserController = require("./controllers/UserController")
const AddressesController = require("./controllers/AddressesController")
const TechController = require("./controllers/TechController")

const routes = express.Router()

routes.get('/users', UserController.findAll)
routes.post('/users', UserController.create)

routes.get('/users/:user_id/addresses', AddressesController.find)
routes.post('/users/:user_id/addresses', AddressesController.create)

routes.get('/users/:user_id/techs', TechController.find)
routes.post('/users/:user_id/techs', TechController.create)
routes.delete('/users/:user_id/techs', TechController.delete)

module.exports = routes