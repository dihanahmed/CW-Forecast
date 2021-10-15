var ForecastIo = require('forecastio');

const express = require('express')
const route = express.Router();
const weatherController = require("../WeatherController/weather.controller");

var options = {
    units:'si',
    exclude:'minutely,hourly,daily,hourly'
}
var forecastIo = new ForecastIo('2286dd2204e405b21ad2dec95e789d49');

route.post('/',weatherController.fetchWeatherByCity);
route.get('/',weatherController.getLocationByGeolocation);
route.post('/hourly',weatherController.fetchWeatherByCityAndHourly)
route.post('/mamun',weatherController.getMamun)
route.get('/boom',weatherController.getCityName)
//
// route.get('/',(req, res) =>{
//     forecastIo.forecast('51.506', '-0.127',options).then(function(data) {
//
//         /*  console.log(JSON.stringify(data, null, 2));
//           res.send(JSON.stringify(data,null,2))
//   */
//
//         res.send(JSON.stringify(data.currently.icon,null,2))
//
//         var forecastIoEnd = new ForecastIo('2286dd2204e405b21ad2dec95e789d49', {timeout: 30*1000});
//         res.end()
//     });
//
// })


/*
Todo
    request -> City
    City    -> LL
    LL     -> fetch data
    Res. send data
 */


module.exports=route