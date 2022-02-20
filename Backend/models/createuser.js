const mongoose = require('mongoose')

const create_user = mongoose.Schema({
    name:String,
    username: String,
    password:String
})

module.exports = mongoose.model("Userlogin",create_user)