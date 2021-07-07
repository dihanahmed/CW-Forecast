const express = require('express');
const route = express.Router()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const checkLoginData = require('../../middlewares/authentication/login.middleware')
const confirmLogin = require('../../controllers/AuthenticationController/login.controller')

route.get('/', (req, res) => {
    if(req.body.authenticated.status){
        req.body.authenticated.user().then(console.log)
    }
    res.send("done")
    res.end()
})
route.post('/', checkLoginData, confirmLogin)

module.exports = route