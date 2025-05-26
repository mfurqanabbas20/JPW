const { addProduct, getProducts, singleProduct } = require('../controllers/productController')

const productRouter = require('express').Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null,"uploads/")
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
})
  
const upload = multer({storage})


productRouter.post('/add-product', upload.single('productImage'), addProduct)

productRouter.get('/all-products', getProducts)

productRouter.get('/single-product/:id', singleProduct)



module.exports = productRouter