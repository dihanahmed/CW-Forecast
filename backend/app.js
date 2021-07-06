const express = require("express");
//https://www.npmjs.com/package/forecastio
const blogApi = require('./api/blog-api/blog-api-web')
const app = express();
const addAuthenticateOption = require("./api/blog-api/middlewares/authentication/checkAuthentication");
const payment=require("./api/payment-api/routes/payment.controller")
const getWeather=require("./api/weather-api/routes/weather.route")
const SSLCommerzPayment = require('sslcommerz')


configureApp = ()=>{
    app.use(express.json());
    app.use(express.urlencoded({extended:false}))
    app.use(addAuthenticateOption.auth)
    app.use('/payment',payment)
    app.use('/getWeather',getWeather)

}


configureApp();




app.listen(8001)
module.exports=app;

//login change



