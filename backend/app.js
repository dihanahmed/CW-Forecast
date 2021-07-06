const express = require("express");
const loginRouter = require('./route/api/authenticate/login.route')
const app = express();
const addAuthenticateOption = require("./api/Services/AuthService/checkAuthentication");

configureApp = ()=>{
    app.use(express.json());
    app.use(express.urlencoded({extended:false}))
    app.use(addAuthenticateOption.auth)

}


configureApp();
let registerRouter=require('./route/api/authenticate/registration.route')



app.use('/api/authenticate/login',loginRouter);
app.use('/api/authenticate/register',registerRouter);


app.get("/express",((req, res) => {
    console.log("Sending data");
    res.send('hello world');


}))



app.listen(8001)
module.exports=app;

//login change


