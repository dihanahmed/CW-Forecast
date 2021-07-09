const { response } = require("express");

function isTrue(req, res){
    res.json({authenticated:ture})
}

function isFalse(req,res){
    res.json({authenticated:false})
}