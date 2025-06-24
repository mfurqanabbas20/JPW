const contactModel = require('../models/contactModel.js')

// Contact POST route
const addContact = async (req, res) => {
  try {
    const contact = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }
    await contactModel.create(contact);
    res.status(200).json({ message: 'Message saved' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save message' });
  }
}


module.exports = {addContact}