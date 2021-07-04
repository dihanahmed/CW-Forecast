const loginRouter = require('../route/login.route')
const checkLoginData = (req, res, next) => {
    const name = req.body.name
    const password = req.body.password
    if (name != null) {
        next()
    }
}

module.exports = checkLoginData