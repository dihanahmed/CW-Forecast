const db = require(`./key`).MongoURI;
const mongoose = require(`mongoose`);

mongoose.connect(db,{useNewUrlParser:true})
        .then(()=>console.log("MongoDB Connected"))
        .catch((err)=>console.log(err));


