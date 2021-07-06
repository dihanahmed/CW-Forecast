const express = require('express');
const loginRouter = require('./routes/authenticate/login.route')
let registerRouter=require('./routes/authenticate/registration.route')


const route = express.Router()
const app = express();


app.use('/blog-api/authenticate/login',loginRouter);
app.use('/blog-api/authenticate/register',registerRouter);


module.exports = route;