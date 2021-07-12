const express = require('express');
const loginRouter = require('./routes/authenticate/login.route')
let registerRouter = require('./routes/authenticate/registration.route')
const addAuthenticateOption = require("./middlewares/authentication/checkAuthentication");
const fetchRouter = require("./routes/blog/fetch.route")

const route = express.Router()


route.use(addAuthenticateOption.addAuthHeader)
route.use('/login', loginRouter);
route.use('/register', registerRouter);
route.use('/fetch',fetchRouter)

module.exports = route;