const express = require("express");

const blogApi = require('./api/blog-api/blog-api-web')
const app = express();


configureApp = ()=>{
    app.use(express.json());
    app.use(express.urlencoded({extended:false}))
    require("./config/database/connection");
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


