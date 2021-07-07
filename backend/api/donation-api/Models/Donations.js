const mongoose = require('mongoose')


const DonationSchema = new mongoose.Schema({

    donorName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    treeID:{
        type: String
    }
})

const Donation = mongoose.model('Donation', DonationSchema)

module.exports = Donation;