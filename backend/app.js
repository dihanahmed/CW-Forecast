const express = require("express");

const blogApi = require('./api/blog-api/blog-api-web')
const app = express();
const addAuthenticateOption = require("./api/blog-api/middlewares/authentication/checkAuthentication");
const SSLCommerzPayment = require('sslcommerz')

configureApp = ()=>{
    app.use(express.json());
    app.use(express.urlencoded({extended:false}))
    app.use(addAuthenticateOption.auth)

}

configureApp();

app.get('/init', (req, res) => {
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
app.use('/blog-api',blogApi);

app.get('/success',(req, res) =>{
    res.send("success")
})
app.get('/fail',(req, res) =>{
    res.send("success")
})
app.get('/cancel',(req, res) =>{
    res.send("success")
})

app.get("/express",((req, res) => {
    console.log("Sending data");
    res.send('hello world');


}))


app.listen(3030)
module.exports=app;

//login change


