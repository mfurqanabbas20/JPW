const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true
    },
    userPhone: {
        type: String,
        required: true
    },
    userCountry: {
        type: String,
        required: true
    },
    userAddress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Ordered', 'On Delivery', 'Delivered'],
        default: 'Ordered'
    }
})

const orderModel = mongoose.model('Order', orderSchema)

module.exports = orderModel