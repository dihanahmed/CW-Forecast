const mysql=require('mysql2')

const mysqlConnection=mysql.createConnection({
    host: 'localhost',
    user: "root",
    password:"",
    database:"dp",
    multipleStatements: true
})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected")
    }
    else {
        console.log(err)
    }
})

module.exports=mysqlConnection

