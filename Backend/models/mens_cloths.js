const mongoose = require('mongoose')


const mens_cloths = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    id: Number,
    title: String,
    brand: String,
    price: Number,
    img:String
})

module.exports = mongoose.model('mens_cloths',mens_cloths)