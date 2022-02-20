const mongoose = require('mongoose')

const cart = mongoose.Schema({
    img: String,
    title: String,
    price: Number,
    id:Number
})

module.exports = mongoose.model("Cart",cart)