const express = require('express')
const route = express.Router()
const checkAuthentication = require("./../../middlewares/authentication/checkAuthentication")


route.get("/",checkAuthentication.auth,(req,res)=>{
    res.json({authenticated:true});
})




module.exports = route