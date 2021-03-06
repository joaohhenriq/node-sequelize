const Addresses = require('../models/Addresses')
const User = require('../models/User')

module.exports = {

    async find(req, res) {
        const { user_id } = req.params

        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' }
        })

        return res.json(user)
    },

    async create(req, res) {
        const { user_id } = req.params
        const { zipcode, street, number } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({ error: 'User not found' })
        }

        const address = await Addresses.create({
            zipcode,
            street,
            number,
            user_id
        })

        return res.json(address)
    }
}