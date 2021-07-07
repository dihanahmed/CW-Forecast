const checkRegistration = (req, res, next) => {
    const name = req.body.name
    const password = req.body.password
    const confirm = req.body.confirm
    const email = req.body.email
    const phone = req.body.phone


    if (password.length > 6 && !isEmpty(email) && !isEmpty(phone) && !isEmpty(name) && !isEmpty(confirm)) {
        next()
    } else {
       return   res.json({registrationSuccessful: false, reason: "Not Enough Data"})
    }

    if(!(confirm === password)){
        return  res.json({registrationSuccessful: false, reason: "Password and Confirm Password Do Not Match"});
    }

}

const isEmpty = (data) => {
    return data === undefined || data === null;
}

module.exports = checkRegistration