const express = require('express')
const ConnectDB = require('./config/ConnectDB')
const AuthRoute = require('./routes/AuthRoutes')
const app = express()
require('dotenv').config()


app.use(express.json())
app.use('/api/auth', AuthRoute)


ConnectDB()
app.listen(process.env.PORT, () => console.log(`Port is Running on Localhost: ${process.env.PORT}`))