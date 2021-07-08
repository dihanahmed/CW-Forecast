const mongoose = require('mongoose')


const DonationSchema = new mongoose.Schema({

    donorName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    treeID:{
        type: String,
        required: true
    }
})

const Donation = mongoose.model('Donation', DonationSchema)

module.exports = Donation;