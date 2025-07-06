const mongoose = require('mongoose')


const connectDB = async() => {
await mongoose.connect("mongodb+srv://jpressurewasher:x2BBb4ajBpwaY8jL@cluster0.ibfyaez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   .then(() => console.log('Database connect'))
   .catch((err) => console.log(err))
}

module.exports = connectDB

