const express = require('express')
const { addContact } = require('../controllers/contactController')

const contactRouter = express.Router()

contactRouter.post('/add', addContact)


module.exports = contactRouter