const User = require('../models/User')

module.exports = {
    async findAllUsers(req, res) {
        const users = await User.findAll()

        return res.json(users)
    },

    async createUser(req, res) {
        const { name, email } = req.body

        const user = await User.create({ name, email })

        return res.json(user)
    }
}