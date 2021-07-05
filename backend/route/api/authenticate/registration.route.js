const express=require('express')
const route = express.Router()
const checkRegistration=require('../../../middleware/api/authentication/registration.middleware')
const {confirmRegistration,sendData}=require('../../../controller/api/authenticate/registration.controller')

route.get('/',(req, res)=>{
    res.send('Registration Successfully completed')
})
route.post('/',checkRegistration,sendData)

module.exports=route