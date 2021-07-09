const ForecastIo = require('forecastio');
const forecastIo = new ForecastIo('2286dd2204e405b21ad2dec95e789d49');


const options = {
    units:'si',
    exclude:'minutely,hourly,daily,hourly'
}

fetchWeather = (req, res) =>{

    const a =Number(req.body.latitude)
    const b=Number(req.body.longitude)

    forecastIo.forecast(a,b,options).then(function(data) {
        res.send(data)
    });

}



module.exports = {
    fetchWeather
}