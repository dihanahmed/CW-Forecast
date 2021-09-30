const ForecastIo = require('forecastio');
const forecastIo = new ForecastIo('2286dd2204e405b21ad2dec95e789d49');
const cityInfo = require('./cities');


const options = {
    units:'si',
    exclude:'minutely,hourly,daily,hourly'
}

fetchAvailableCities = (req,res)=>{
    res.send(city.fetchCities);
}

function coordinateWeather(latitude, longitude, res) {
    forecastIo.forecast(latitude, longitude, options).then(function (data) {
        res.json(data)
    });
}

fetchWeatherByCoordinate = (req, res) =>{
    const a =Number(req.body.latitude)
    const b=Number(req.body.longitude)
    coordinateWeather(a, b, res);

}

fetchWeatherByCity =(req,res)=>{
 let city = req.body.city.toString().toUpperCase();
 let coordinate = cityInfo.fetchCoordinate(city);
 console.log(coordinate);
 if(!coordinate.successful) return res.json({successful: false});
 coordinateWeather(coordinate.latitude,coordinate.longitude,res);
}


module.exports = {
   fetchWeatherByCoordinate,
    fetchWeatherByCity,
    fetchAvailableCities
}