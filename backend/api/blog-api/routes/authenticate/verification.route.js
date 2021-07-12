const express = require('express')
const route = express.Router()
const checkAuthentication = require("./../../middlewares/authentication/checkAuthentication")


route.get("/",checkAuthentication.auth,(req,res)=>{
    res.json({isAuthenticated:true, user:sessionStorage.getItem('user')});
})




module.exports = route