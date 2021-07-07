const express = require('express');
const route = express.Router()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const checkLoginData = require('../../middlewares/authentication/login.middleware')
const confirmLogin = require('../../controllers/AuthenticationController/login.controller')
const checkAuthentication = require("../../middlewares/authentication/checkAuthentication");

route.get('/', checkAuthentication.auth,(req, res) => {
        req.body.authenticated.user().then(console.log)
})

route.get('/test',checkAuthentication.admin,(request,response)=>{
        response.send({isAdmin: true});
})
route.post('/', checkLoginData, confirmLogin)

module.exports = route