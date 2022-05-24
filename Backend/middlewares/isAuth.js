const jwt = require('jsonwebtoken')
const UserSchema = require('../models/UserSchema')

const isAuth =  async (req, res, next) => {
    try {.0
        const token = req.headers['authorization']
        if (!token) {
            return res.send("You are not Authorized")
        }
        var decoded = jwt.verify(token, process.env.SECRETKEY)
        const user = await UserSchema.findById(decoded._id)
        req.user = user
        next()
    } catch (error) {
        res.status(500).send({ errors: [{ message: 'Token server error' }] })
    }
}

module.exports = isAuth