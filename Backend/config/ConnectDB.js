

const mongoose = require('mongoose')



const ConnectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Database is Connected')
    } catch (error) {
        console.log('Database is not Connected')
    }
}

module.exports = ConnectDB