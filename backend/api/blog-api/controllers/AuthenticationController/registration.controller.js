const connection = require('../../../../config/database/connection')
const bcrypt = require('bcrypt');
const saltRound = 10;
const confirmRegistration=(req,res) => {
    res.send(req.body.email)
}

const sendData = (req,res)=>{
    const registrationData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const phone = req.body.phone
    const queryString = `INSERT INTO Clients
            (
                name,email,password,phone
            )
            VALUES
            (
                ?,?,?,?
            )`
    var newpassword = ''
    bcrypt.genSalt(10).then(salt => {
        console.log(`Salt ${salt}`);
        return bcrypt.hash(password, salt)
    }).then(hash => {
        newpassword = hash
        const queryString = `INSERT INTO Clients
            (
                name,email,password,phone
            )
            VALUES
            (
                ?, ?,?,?
            )`

        connection.query(queryString, [name,email,newpassword,phone], (err, rows, fields) => {
            if (!err) {
                res.send("Done")
            } else {
                console.log(err)
            }
        })
    })
        .catch(err => console.error(err.message))

}
module.exports={confirmRegistration,sendData}