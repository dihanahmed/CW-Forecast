const express = require('express');
const loginRouter = require('./routes/authenticate/login.route')
let registerRouter = require('./routes/authenticate/registration.route')
const addAuthenticateOption = require("./middlewares/authentication/checkAuthentication");
const fetchRouter = require("./routes/blog/fetch.route")
const verificationRoute = require("./routes/authenticate/verification.route");
const authController = require("./controllers/AuthenticationController/auth.controller")

const route = express.Router()


route.use(addAuthenticateOption.addAuthHeader)
route.use('/login', loginRouter);
route.use('/register', registerRouter);
route.use('/fetch',fetchRouter)
route.use('/verify',verificationRoute)
route.get('/logout',authController.logOut);

module.exports = route;