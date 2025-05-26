const productModel = require("../models/productModel");


const addProduct = async (req, res) => {
    try {

        const product = {
            productName: req.body.productName,
            productDescription: req.body.productDescription,
            productImage: req.file.filename,
            productPrice: req.body.productPrice,
            productAvailableQuantity: req.body.productAvailableQuantity,
        }

        await productModel.create(product)

        return res.status(200).json({success: true, message: 'Product Added'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Internal Server Error'})
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await productModel.find({})
        return res.status(200).json({success: true, products, message: 'Product Added'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Internal Server Error'})
    }
}

const singleProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await productModel.findOne({_id: id})
        return res.status(200).json({success: true, product: product})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: 'Internal Server Error'})
        
    }
}

module.exports = {addProduct, getProducts, singleProduct}