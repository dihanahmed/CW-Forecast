const express=require('express')
const route = express.Router()
const checkRegistration=require('../../middlewares/authentication/registration.middleware')
const {confirmRegistration,sendData}=require('../../controllers/AuthenticationController/registration.controller')

route.get('/',(req, res)=>{
    res.send('Registration Successfully completed')
})
route.post('/',checkRegistration,sendData)

module.exports=route