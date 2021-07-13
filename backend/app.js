const express = require("express");
const cors = require("cors")
const SSLCommerzPayment=require('sslcommerz-lts')

const blogApi = require('./api/blog-api/blog-api-web')
const getWeather=require("./api/weather-api/routes/weather.route")
const donationApi = require("./api/donation-api/donation-api-web")
const {corsOptions} = require("./CORS Policy/policy");
const paymentControllerApi = require("./api/payment-api/routes/payment.controller");


const app = express();



configureApp = () => {
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}))
    require("./config/database/connection");
}


configureApp();

app.use('/blog-api', blogApi);
app.use('/getWeather',getWeather)
app.use('/donation-api',donationApi)
app.get('/payment',(req,res)=>{
    const data = {
        total_amount: 100,
        currency: 'BDT',
        tran_id: 'REF123', // use unique tran_id for each api call
        success_url: 'http://localhost:3030/success',
        fail_url: 'http://localhost:3030/fail',
        cancel_url: 'http://localhost:3030/cancel',
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'customer@example.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };
    const sslcommer = new SSLCommerzPayment('no60e394d994c14', 'no60e394d994c14@ssl',false) //true for live, false for sandbox
    sslcommer.init(data).then(apiResponse => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL
        res.redirect(GatewayPageURL)
        console.log('Redirecting to: ', GatewayPageURL)
    });
})


app.get("/express", ((req, res) => {
    res.send('hello world');
}))


app.listen(8001)
module.exports = app;

//login change

//new_branch

