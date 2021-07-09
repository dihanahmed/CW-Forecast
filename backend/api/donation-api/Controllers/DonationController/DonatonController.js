const express=require('express')



const Donation = require("../../Models/Donations");
const { request } = require('express');



function showDonate(req,res){
    Donation.findAll()
    .then(donate=>{
        if(donate){
            res.json(Donation)

        }
    })
}


//module.exports={
//    fetchDonations,
//    showDonate
//}

module.exports ={
    donate: (request,response)=>{
        const donation = new Donation(request.body.data);
        donation.save().then(()=>{
            response.json({donationSuccessful:true})
        }).catch(err=>{
            response.json({donationSuccessful:false, reason: "Error Connecting to Server"});
        })
    }
}
