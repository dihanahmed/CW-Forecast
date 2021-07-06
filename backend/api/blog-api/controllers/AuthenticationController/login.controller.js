
const bcrypt = require('bcrypt')
const sessionStorage = require('sessionstorage')
const User = require("../../models/users");

'use strict';

function acceptOrRejectLogin(email, res) {
    return function (err, isValid) {
        if (isValid) {
            sessionStorage.setItem('user', email)
            res.json({loginStatus: true});
        } else {
            res.json({loginStatus: false});
        }

    };
}



const tryLogin = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email})
        .then((user)=>{
            if(!user)  return res.json({loginStatus: false});
            bcrypt.compare(password, user.password, acceptOrRejectLogin(email, res))
        })
}



module.exports = tryLogin