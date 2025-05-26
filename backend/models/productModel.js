const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true,
    },
    productAvailableQuantity: {
        type: Number,
        required: true,
        min: 1
    },
    productPrice: {
        type: Number,
        required: true,
        min: 0
    },
    
})

const productModel = mongoose.model('Product', productSchema)

module.exports = productModel