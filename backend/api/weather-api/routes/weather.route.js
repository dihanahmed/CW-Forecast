var ForecastIo = require('forecastio');

const express = require('express')
const route = express.Router();

var options = {
    units:'si',
    exclude:'minutely,hourly,daily,hourly'
}
var forecastIo = new ForecastIo('2286dd2204e405b21ad2dec95e789d49');

route.post('/',(req, res) =>{

    const a =Number(req.body.latitude)
    const b=Number(req.body.longitude)

    forecastIo.forecast(`${a}`, `${b}`,options).then(function(data) {

        /*  console.log(JSON.stringify(data, null, 2));
          res.send(JSON.stringify(data,null,2))
  */

        res.send(JSON.stringify(data.currently.icon,null,2))

        var forecastIoEnd = new ForecastIo('2286dd2204e405b21ad2dec95e789d49', {timeout: 30*1000});
        res.end()
    });

})


/*
Todo
    request -> City
    City    -> LL
    LL     -> fetch data
    Res. send data
 */


module.exports=route