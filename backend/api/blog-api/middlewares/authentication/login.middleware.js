const checkLoginData = (req, res, next) => {
    const name = req.body.email
    const password = req.body.password
    if (!isEmpty(name) && !isEmpty(password)) {
        next()
    } else {
        res.json({loginStatus: false, reason: "Email and Password Required"})
    }
}

const isEmpty = (data) => {
    return data === undefined || data === null;
}

module.exports = checkLoginData