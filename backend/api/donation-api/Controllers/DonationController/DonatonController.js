const express=require('express')



const Donation = require("../../Models/Donations");
const { request } = require('express');

//
//function fetchDonations(req,res){
//    
//    const {donorname, email, phone, treeID }=req.body
//
//    //check required field
//    if(!donorname || !email || !phone ||!treeID){
//        console.log("please fill up the form to complete donation form")
//    }
//    else{
//        const newDonation= new Donation({
//           donorname,
//           email,
//           phone,
//           treeID
//        })
//        newDonation.save()
//    
//        
//    }
//}
//
//function showDonate(req,res){
//    Donation.findAll()
//    .then(donate=>{
//        if(donate){
//            res.json(Donation)
//
//        }
//    })
//}
//
//
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