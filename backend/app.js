const express = require("express");
const loginRouter = require('./route/api/authenticate/login.route')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/express",((req, res) => {
    console.log("Sending data");
    res.send('hello world');

/*
    This sends data to react
    res.json({helloWorld: "hello world"});
*/
}))
app.use('/',loginRouter);


app.listen(8001)
module.exports=app;