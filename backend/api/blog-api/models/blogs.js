const mongoose = require('mongoose')

const BlogSchema= new mongoose.Schema({

    title:{
        type: String,
        required: ture
    },
    content:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    date:{
        tyep: Date,
        default: Date.now
    }
})
const Blog=mongoose.model('Blog',BlogSchema)  
module.exports=Blog