
const weatherController = require('../WeatherController/weather.controller');

const express = require('express')
const route = express.Router();



route.post('/city',weatherController.fetchWeatherByCity);
route.get('/available',weatherController.fetchAvailableCities);


module.exports=route