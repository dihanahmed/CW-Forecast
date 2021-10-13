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
    if(!coordinate.successful) return res.json({successful: false});
    coordinateWeather(coordinate.latitude,coordinate.longitude,res);
}

getLocationByGeolocation = (req,res)=>{
    const { Navigator } = require("node-navigator");
    const navigator = new Navigator();

    navigator.geolocation.getCurrentPosition((response, error) => {
        if (error) res.send(error);
        else {
            let latitude=response["latitude"]
            let longitude=response["longitude"]
            res.json(`${latitude} and ${longitude}` );
        }
    });
        // Your city

}


module.exports = {
   fetchWeatherByCoordinate,
    fetchWeatherByCity,
    fetchAvailableCities,
    getLocationByGeolocation
}
