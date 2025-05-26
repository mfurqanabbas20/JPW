const express = require('express')
const { createOrder, getOrders, updateOrderStatus, createCheckout } = require('../controllers/orderController')

const orderRouter = express.Router()

orderRouter.post('/create-order/:id', createOrder)
orderRouter.get('/get-orders', getOrders)
orderRouter.put('/update-status/:id', updateOrderStatus)
orderRouter.post('/create-checkout-session', createCheckout)




module.exports = orderRouter