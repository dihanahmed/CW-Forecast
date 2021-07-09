
const weatherController = require('../WeatherController/weather.controller');

const express = require('express')
const route = express.Router();



route.post('/',weatherController.fetchWeather)


/*
Todo
    request -> City
    City    -> LL
    LL     -> fetch data
    Res. send data
 */


module.exports=route