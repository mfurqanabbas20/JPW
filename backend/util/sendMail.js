const nodemailer = require('nodemailer')

const sgTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sgTransport({
    auth: {
        api_key: process.env.SENDGRID_KEY
    }
}))

 function sendMail(data, msg){
     transporter.sendMail({
        to: data.userEmail,
        from: 'mfurqanabbas20@gmail.com',
        subject: 'Your Order at JPW',
        html: `<div>
        <h1>${msg}</h1>
        <p>Product Name ${data.productName}</p>
        <p>Product Price ${data.productPrice.toFixed(2)}</p>
        <p>Thank you for choosing JPW, your trusted destination for high-performance high pressure washers and professional cleaning equipment. With years of experience in the cleaning solutions industry, we pride ourselves on offering products that combine power, efficiency, and durability. Our mission is to make tough cleaning tasks easier for everyone—from homeowners needing to clean patios and driveways, to industrial professionals tackling grease, machinery, and construction equipment. We understand that different cleaning challenges require different solutions, which is why we stock a wide variety of pressure washers—from portable electric units for light-duty use to powerful gas-powered machines for commercial and industrial jobs. Every product in our store is handpicked based on quality, reliability, and value.</p>
        </div>`
    })
}


module.exports = {sendMail}