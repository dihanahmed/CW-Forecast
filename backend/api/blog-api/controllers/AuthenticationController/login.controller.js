
const bcrypt = require('bcrypt')
const sessionStorage = require('sessionstorage')
const User = require("../../models/users");

'use strict';

const canLogin = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email})
        .then((user)=>{
            if(!user)  return res.json({loginStatus: false});

            bcrypt.compare(password, user.password, function (err, isValid) {
                if (isValid) {
                    sessionStorage.setItem('user', email)
                    res.json({loginStatus:true});
                } else {
                    res.json({loginStatus:false});
                }

            })
        })

}

module.exports = canLogin