const sessionStorage = require('sessionstorage');
const User = require("../../models/users");

function addHeader(request) {
    request.body.authenticated = {status: false};
    let user = sessionStorage.getItem('user');
    if (user != null) {
        request.body.authenticated = {
            status: true,
            user: async () => {
                return User.findOne({email: user})
            }
        }
    }
}

module.exports = {
    addAuthHeader: (request, response, next) => {
        addHeader(request);
        next();
    },

    auth: (request,response,next)=> {
        if (request.body.authenticated.status === true)
            next();
        else return response.json({isAuthenticated: false}).status(304);
    },

    admin:(request,response,next)=>{
        const notAdmin =  ()=> {
            return {isAdmin: false};
        }
        if(!request.body.authenticated.status) {return response.json(notAdmin());}
        request.body.authenticated.user().then((user=>{
            if(user.email === "admin@admin.com")
                next();
            else response.json(notAdmin());
        }));

    }

};
