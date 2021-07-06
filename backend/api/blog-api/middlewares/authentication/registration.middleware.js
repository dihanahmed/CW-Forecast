const User = require("../../models/users");

const checkRegistration=(req,res,next) => {
    const name = req.body.name
    const password = req.body.password
    const email = req.body.email
    const phone = req.body.phone

    if(password.length>6 && !isEmpty(email) && !isEmpty(phone) && !isEmpty(name)){
        User.findOne({email:email}).
            then(user => {
                if(!isEmpty(user) ){
                    next();
                }
        })
        next()
    }
    else {
        res.send('Not enough data')
    }
}

const isEmpty = (data)=>{
    return data === undefined || data === null;
}

module.exports = checkRegistration