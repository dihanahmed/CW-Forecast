const Donation = require("../../Models/Donations");


module.exports ={
    donate: (request,response)=>{
        const donation = new Donation(request.body.data);
        donation.save().then(()=>{
            response.json({donationStatus:true})
        }).catch(err=>{
            response.json({donationStatus:false, reason: "Error Connecting to Server"});
        })
    }
}