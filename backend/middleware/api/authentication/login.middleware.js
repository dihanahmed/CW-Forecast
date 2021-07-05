const loginRouter = require('../../../route/api/authenticate/login.route')
const checkLoginData = (req, res, next) => {
    const name = req.body.email
    const password = req.body.password
    if (name != null&&password!=null) {
        next()
    }
    else {
        res.send('No No')
    }
}

module.exports = checkLoginData