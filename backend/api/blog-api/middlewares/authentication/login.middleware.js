const loginRouter = require('../../routes/authenticate/login.route')
const checkLoginData = (req, res, next) => {
    const name = req.body.email
    const password = req.body.password
    if (!isEmpty(name) && !isEmpty(password)) {
        next()
    } else {
        res.json({loginStatus: false})
    }
}

const isEmpty = (data) => {
    return data === undefined || data === null;
}

module.exports = checkLoginData