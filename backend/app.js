const express = require("express");

const blogApi = require('./api/blog-api/routes/blog-api-web')
const app = express();
const addAuthenticateOption = require("./api/blog-api/middlewares/authentication/checkAuthentication");

configureApp = ()=>{
    app.use(express.json());
    app.use(express.urlencoded({extended:false}))
    app.use(addAuthenticateOption.auth)

}


configureApp();



app.use('/blog-api',blogApi);



app.get("/express",((req, res) => {
    console.log("Sending data");
    res.send('hello world');


}))



app.listen(8001)
module.exports=app;

//login change


