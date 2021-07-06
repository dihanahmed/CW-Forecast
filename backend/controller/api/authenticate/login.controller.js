const connection = require('../../../connection')
const bcrypt = require('bcrypt')
const sessionStorage = require('sessionstorage')
'use strict';


const queryString = `select password from Clients where email=?;`
var newPassword = ''
var temp = ''
const canLogin = (req, res) => {

    const email = req.body.email
    const password = req.body.password
    connection.query(queryString, email, (err, result) => {
         if (result) {
            newPassword = result[0].password
             console.log(newPassword);

           bcrypt.compare(password, newPassword, function (err, isValid) {
                if (isValid) {
                    sessionStorage.setItem('user', email)
                    res.send("valid")
                } else {
                    res.send("Error")
                }

            })
        }
       else {
            res.send(`${email}`+` `+`${password}`+` no no`)
        }
    })


}
module.exports = canLogin