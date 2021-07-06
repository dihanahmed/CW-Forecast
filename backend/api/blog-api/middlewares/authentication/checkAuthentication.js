
const sessionStorage = require('sessionstorage');

module.exports ={
   auth : (request, response, next)=>{
       let user = sessionStorage.getItem('user');
       console.log(user);
       request.body.authenticated = user !== null;
       next();
   }

};
