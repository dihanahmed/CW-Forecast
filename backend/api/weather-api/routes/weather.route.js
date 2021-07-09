var ForecastIo = require('forecastio');

const express = require('express')
const route = express.Router();
const showReport=require('../controller/weather.controller')
/*

var options = {
    units:'si',
    exclude:'minutely,hourly,daily,hourly'
}
var forecastIo = new ForecastIo('2286dd2204e405b21ad2dec95e789d49');
*/

/*
route.get('/',showReport)
*/
route.post('/',showReport)




module.exports=route