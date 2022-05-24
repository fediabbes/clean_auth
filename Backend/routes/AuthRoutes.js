const express = require('express')
const UserSchema = require('../models/UserSchema')
const AuthRoute = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { RegisterValidation, Validator } = require('../middlewares/Validation')
const isAuth = require('../middlewares/isAuth')



AuthRoute.post('/SignUp', RegisterValidation,Validator, async (req, res) => {
    const { email, password } = req.body
    try {
        const user = new UserSchema(req.body)
        const found = await UserSchema.findOne({ email })
        if (found) {
            return res.status(400).send('User Already exists')
        }
        const salt = 10
        const hashedPassword = bcrypt.hashSync(password, salt)
        user.password = hashedPassword
        const payloadToken = { _id: user._id }
        const token = jwt.sign(payloadToken, process.env.SECRETKEY)
        await user.save()
        res.status(200).send({ message: 'Register Succeded', user, token })
    } catch (error) {
        res.status(500).send({ errors: [{ message: "Could not register" }] })
    }
})



AuthRoute.post('/SignIn', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserSchema.findOne({ email })
        if (!user) {
            return res.status(400).send({ errors: [{ message: 'Bad Credentials' }] })
        }
        const match = bcrypt.compareSync(password, user.password)
        if (!match) {
            return res.status(400).send({ errors: [{ message: "Bad Credentials" }] })
        }
        const payload = { _id: user._id }
        const token = jwt.sign(payload, process.env.SECRETKEY)
        res.status(200).send({ message: 'Login Succeded', user, token })
    } catch (error) {
        res.status(500).send({message:"Cannot Succeded" , error})
    }
})


AuthRoute.get('/me', isAuth, (req,res)=> res.send(req.user))








module.exports = AuthRoute