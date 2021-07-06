
const sessionStorage = require('sessionstorage');

module.exports ={
   auth : (request, response, next)=>{
       let user = sessionStorage.getItem('user');
       request.body.authenticated = user !== undefined;
       next();
   }

};
