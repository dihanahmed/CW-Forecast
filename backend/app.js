const express = require("express");
const loginRouter = require('./route/api/authenticate/login.route')
const app = express();
let registerRouter=require('./route/api/authenticate/registration.route')
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/express",((req, res) => {
    console.log("Sending data");
    res.send('hello world');


}))
app.use('/api/authenticate/login',loginRouter);
app.use('/api/authenticate/register',registerRouter);

app.listen(8001)
module.exports=app;

//login change
