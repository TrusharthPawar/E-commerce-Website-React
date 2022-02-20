const mongoose = require("mongoose")

const orders = mongoose.Schema({
    items: [{
        title: String,
        img: String,
        price: String,
        id:Number
    }],
    ispaid: Boolean,
    User:String
})
module.exports = mongoose.model('Order',orders)