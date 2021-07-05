const checkRegistration=(req,res,next) => {
    const name = req.body.name
    const password = req.body.password
    const email = req.body.email
    const phone = req.body.phone

    if(password.length>6){
        next()
    }
    else {
        res.send('Password is not enough')
    }
}

module.exports =checkRegistration