const express = require("express");
//https://www.npmjs.com/package/forecastio
const blogApi = require('./api/blog-api/blog-api-web')
const app = express();
const addAuthenticateOption = require("./api/blog-api/middlewares/authentication/checkAuthentication");
const payment=require("./api/payment-api/routes/payment.controller")
const SSLCommerzPayment = require('sslcommerz')
var ForecastIo = require('forecastio');

var options = {
    units:'si',
    exclude:'minutely,hourly,daily,hourly'
}
var forecastIo = new ForecastIo('2286dd2204e405b21ad2dec95e789d49');

app.get('/getWeather',(req, res) =>{
    forecastIo.forecast('51.506', '-0.127',options).then(function(data) {

        console.log(JSON.stringify(data, null, 2));
        res.send(JSON.stringify(data,null,2))

/*
        console.log(JSON.stringify(data.currently.icon,null,2))
*/
        var forecastIoEnd = new ForecastIo('2286dd2204e405b21ad2dec95e789d49', {timeout: 30*1000});
        res.end()
    });

})
configureApp = ()=>{
    app.use(express.json());
    app.use(express.urlencoded({extended:false}))
    app.use(addAuthenticateOption.auth)
    app.use('/payment',payment)

}


configureApp();




app.listen(8001)
module.exports=app;

//login change



