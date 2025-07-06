const express = require('express')
const { addContact, allQueries } = require('../controllers/contactController')

const contactRouter = express.Router()

contactRouter.post('/add-query', addContact)
contactRouter.get('/all-queries', allQueries)
contactRouter.delete('/delete-query/:id', allQueries)



module.exports = contactRouter