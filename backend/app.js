require('dotenv').config()
const express = require('express')
const orderRouter = require('./routes/orderRoute')
const cors = require('cors')
const path = require('path')


const connectDB = require('./config/db')
const productRouter = require('./routes/productRoute')

const app = express()

app.use(express.json())

app.use(cors())

app.use(express.static(path.join(__dirname, 'uploads')))


app.use('/api/order', orderRouter)
app.use('/api/product', productRouter)

app.use('/', (req, res) => {
    return res.status(200).json("Hello World")
})


// to connect to db
connectDB()

app.listen(5000, () => {
    console.log('Server is Listening on PORT 5000');
})


