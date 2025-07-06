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
    return res.status(200).json({ message: 'Message saved' });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to save message' });
  }
}

const allQueries = async (req, res) => {
  try {
    const queries = await contactModel.find({});
    return res.status(200).json({queries: queries });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to save message' });
  }
}

const deleteQuery = async (req, res) => {
  try {
    const {id} = req.params;
    await contactModel.findByIdAndDelete(id);
    return res.status(200).json({message: 'Deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to save message' });
  }
}


module.exports = {addContact, allQueries, deleteQuery}