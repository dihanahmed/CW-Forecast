const express = require('express');
const route = express.Router()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const checkLoginData=require('../../../../middleware/api/authentication/login.middleware')
const confirmLogin=require('../../../../controller/api/authenticate/login.controller')

route.get('/', (req, res) => {
    console.log("Done my boi")
    res.send("done")
    res.end()
})
route.post('/',checkLoginData,confirmLogin)

module.exports = route