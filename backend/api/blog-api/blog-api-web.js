const express = require('express');
const loginRouter = require('./routes/authenticate/login.route')
let registerRouter=require('./routes/authenticate/registration.route')
const addAuthenticateOption = require("./middlewares/authentication/checkAuthentication");

const route = express.Router()
const app = express();

route.use(addAuthenticateOption.auth)
route.use('/login',loginRouter);
route.use('/register',registerRouter);


module.exports = route;