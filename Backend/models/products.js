const mongoose = require('mongoose')

const products = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    id: Number,
    title: String,
    brand: String,
    img:String,
    price:Number
})

module.exports = mongoose.model('Products',products)