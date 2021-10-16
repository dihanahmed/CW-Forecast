

const ForecastIo = require('forecastio');
const forecastIo = new ForecastIo('2286dd2204e405b21ad2dec95e789d49');
const cityInfo = require('./cities');
const request = require('request');
const stream = require("stream");
const {Navigator} = require("node-navigator");
const apiKey='9dd687e56990c001e77aa23b2db5ab5c'
const options = {
    units: 'si',
    exclude: 'minutely,hourly,daily,hourly'
}
const options2={
    units: "si",
    exclude: 'currently,minutely,daily'
}

fetchAvailableCities = (req, res) => {
    res.send(city.fetchCities);
}

function coordinateWeather(latitude, longitude, res) {
    forecastIo.forecast(latitude, longitude, options).then(function (data) {
        res.json(data)
    });
}

fetchWeatherByCoordinate = (req, res) => {
    const a = Number(req.body.latitude)
    const b = Number(req.body.longitude)
    coordinateWeather(a, b, res);

}



fetchWeatherByCity =(req,res)=>{
    let city = req.body.city.toString().toUpperCase();
    let coordinate = cityInfo.fetchCoordinate(city);
    res.json(fetchMamun(city))
   if(!coordinate.successful) return res.json({successful: false});
    coordinateWeather(coordinate.latitude,coordinate.longitude,res);
}
fetchWeatherByCityAndHourly=(req,res)=>{
    let city = req.body.city.toString().toUpperCase();
    let coordinate=cityInfo.fetchCoordinate(city);
    if(!coordinate.successful)return res.json({successful: false});
    forecastIo.forecast(coordinate.latitude, coordinate.longitude, options2).then(function (data) {
        res.json(data)
    });
}
getLocationByGeolocation = (req,res)=>{
    const { Navigator } = require("node-navigator");

    const navigator = new Navigator();

    navigator.geolocation.getCurrentPosition((response, error) => {
        if (error) res.send(error);
        else {
            let latitude = response["latitude"]
            let longitude = response["longitude"];
            coordinateWeather(latitude, longitude, res);

            //res.json(`${latitude} and ${longitude}`);
        }
    });
}

/*function getWeather(req,res) {
    let city = req.body.city.toString().toUpperCase();
    let coordinate = cityInfo.fetchCoordinate(city);
    coordinateWeather(req.body.city,options2)
}*/


getMamun = (req, res) => {
    let city = req.body.city.toString().toUpperCase();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9dd687e56990c001e77aa23b2db5ab5c`
    /* var url = `http://api.openweathermap.org/data/2.5/weather?`
         +`lat=${latitude}&lon=${longitude}&appid=${API_KEY}`*/

    request({url: url, json: true}, function (error, response) {
        if (error) {
            console.log('Unable to connect to Forecast API');
        } else {
            if(response.body.coord === undefined) response.sendStatus(404);
            coordinateWeather(response.body.coord.lat,response.body.coord.lon,res);

        }
    })
}

getCityName=(req,res)=>{

    const { Navigator } = require("node-navigator");

    const navigator = new Navigator();

    navigator.geolocation.getCurrentPosition((response, error) => {
        if (error) res.send(error);
        else {
            let latitude = response["latitude"]
            let longitude = response["longitude"];
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
            request({url: url, json: true}, function (error, response) {
                if (error) {
                    console.log('Unable to connect to Forecast API');
                } else {
                    res.json(response.body.name);
                }
            })
            //res.json(`${latitude} and ${longitude}`);
        }
    });

}
module.exports = {
    fetchWeatherByCoordinate,
    fetchWeatherByCity,
    fetchAvailableCities,
    getLocationByGeolocation,
    fetchWeatherByCityAndHourly,
    getMamun,
    getCityName
}
