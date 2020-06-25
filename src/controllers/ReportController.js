const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
    async show(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@email.com'
                }
            },
            include: [ //joins
                { association: 'addresses', where: { street: 'Rua de testes' } }, // Inner join - the register must be into these two tables (addesses and user)
                {
                    association: 'techs',
                    required: false, // this condition is not needed, it's something optional (Left join - only the main table need to have the register)
                    where: {
                        name: {
                            [Op.iLike]: 'Flutter'
                        }
                    }
                }
            ]
        })

        return res.json(users)
    }
}