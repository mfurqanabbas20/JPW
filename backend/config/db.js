const mongoose = require('mongoose')


const connectDB = async() => {
await mongoose.connect("mongodb+srv://mfurqanabbas20:Q6acYfazzAxIkoQs@cluster0.0istldq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   .then(() => console.log('Database connect'))
   .catch((err) => console.log(err))
}

module.exports = connectDB

