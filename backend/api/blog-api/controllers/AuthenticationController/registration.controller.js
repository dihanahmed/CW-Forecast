const connection = require('../../../../config/database/connection')
const bcrypt = require('bcrypt');
const User = require("../../models/users");
const saltRound = 10;
const confirmRegistration = (req, res) => {
    res.send(req.body.email)
}

function registerUser(registrationData, res) {
    return hash => {
        registrationData.password = hash
        new User(registrationData).save()
            .then(() => {
                res.send({registrationStatus: true});
            }).catch((err) => {
            res.send({registrationStatus: false});
        });

    };
}

function hashPassword(salt, password) {
    console.log(`Salt ${salt}`);
    return bcrypt.hash(password, salt)
}

const sendData = (req, res) => {
    const registrationData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }

    bcrypt.genSalt(10).then(salt => {
        return hashPassword(salt, registrationData.password);
    })
        .then(registerUser(registrationData, res))
        .catch(err => console.error(err.message))

}

module.exports = {confirmRegistration, sendData}
