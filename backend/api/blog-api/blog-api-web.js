const express = require('express');
const loginRouter = require('./routes/authenticate/login.route')
let registerRouter=require('./routes/authenticate/registration.route')


const route = express.Router()
const app = express();


app.use('login',loginRouter);
app.use('register',registerRouter);


module.exports = route;