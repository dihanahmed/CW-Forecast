var ForecastIo = require('forecastio');
var options = {
    units:'si',
    exclude:'minutely,hourly,daily,hourly'
}
var forecastIo = new ForecastIo('2286dd2204e405b21ad2dec95e789d49');


const showReport=(req,res)=> {

    const a = Number(req.body.latitude)
    const b = Number(req.body.longitude)
    console.log(`${a}`)
      forecastIo.forecast(`51.506`,`-0.127`,options).then(function(data) {
/*
            console.log(JSON.stringify(data, null, 2));
            res.send(JSON.stringify(data,null,2))
    */

          res.send(JSON.stringify(data.currently.icon,null,2))

          var forecastIoEnd = new ForecastIo('2286dd2204e405b21ad2dec95e789d49', {timeout: 30*1000});
          res.end()
      });


}

module.exports =showReport