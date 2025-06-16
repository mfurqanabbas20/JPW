
const orderModel = require('../models/orderModel')
const productModel = require('../models/productModel')
const {sendMail} = require('../util/sendMail')


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createCheckout = async (req, res) => {    
    try {
        
        const {product, order} = req.body
        let price = 0
        // data refers to order
        if(product.productQuantity > 999){
            price = product.productPrice - (product.productPrice * 0.01)
        }
        else {
            price = product.productPrice
        }
        const lineItems = [{
            price_data: {
                currency: 'gbp',
                product_data: {
                    name: product.productName,
                },
                unit_amount: Math.round(price * 100)
            },
            quantity: order.productQuantity,
        }]

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:5173/product/order-successful",
            cancel_url: "http://localhost:5173/admin"
        })
        return res.status(200).json({success: true, id: session.id})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: true, message: 'Internal Server Error'})
        
    }
}


const createOrder = async (req, res) => {
    try {
        const id = req.params.id
        const product = await productModel.findOne({_id: id})
        const availableStock = product.productAvailableQuantity 

        if(req.body.productQuantity > availableStock){
            return res.status(409).json({success: false, message: 'Stock Limit Exceed'})
        }

        let price = 0

        if(req.body.productQuantity < 999){
            price = product.productPrice
        }
        else{
            price = product.productPrice - product.productPrice * 0.01
        }

        const order = {
            productName: req.body.productName,
            productPrice: price * req.body.productQuantity,
            productQuantity: req.body.productQuantity,
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPhone: req.body.userPhone,
            userCountry: req.body.userCountry,
            userAddress: req.body.userAddress,
        }        
        product.productAvailableQuantity = product.productAvailableQuantity - order.productQuantity
        await orderModel.create(order)
        await product.save()
        sendMail(order, 'Your Order has been Confirmed')
        return res.status(200).json({success: true})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false})
        
    }
    
}

const getOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        return res.status(200).json({success: true, orders})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: 'Internal Server Error'})
    }
}

const updateOrderStatus = async (req, res) => {
    try {
        const order = await orderModel.findOne({_id: req.params.id})        
        order.status = req.body.value
        sendMail(order, `Your Order is ${order.status}`)
        await order.save()
        return res.status(200).json({success: true, message: 'Updated'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: 'Intenal Server Error'})
    }
}



module.exports = {createOrder, getOrders, updateOrderStatus, createCheckout}