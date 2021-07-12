const express=require('express')
const sessionStorage = require('sessionstorage');

function logOut(req,res){
    sessionStorage.clear();
    res.json({successful:true});
}


module.exports = {logOut};