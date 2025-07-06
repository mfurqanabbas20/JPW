const express = require('express')
const { createOrder, getOrders, updateOrderStatus, createCheckout, deleteOrder } = require('../controllers/orderController')

const orderRouter = express.Router()

orderRouter.post('/create-order/:id', createOrder)
orderRouter.get('/get-orders', getOrders)
orderRouter.put('/update-status/:id', updateOrderStatus)
orderRouter.post('/create-checkout-session', createCheckout)
orderRouter.delete('/delete-order/:id', deleteOrder)


module.exports = orderRouter