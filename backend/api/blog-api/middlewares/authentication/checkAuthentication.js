const sessionStorage = require('sessionstorage');
const User = require("../../models/users");

module.exports = {
    addAuthHeader: (request, response, next) => {
        request.body.authenticated = {status: false};
        let user = sessionStorage.getItem('user');
        if(user!=null) {
            request.body.authenticated = {
                status:true,
                user: async ()=>{
                    return User.findOne({email:user})
                }
            }
        }
        next();
    },

    auth: (request,response,next)=> {
        if (request.body.authenticated.status === true)
            next();
        return response.json({isAuthenticated: false}).status(304);
    }

};
