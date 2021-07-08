const express=require('express');
const routers = express.Router()

//User model
const Blog= require('../../models/blogs');
const { request } = require('express');

//blog post handle

function  makeBlog(req,res){

    const {title, content, email}=req.body

    //check required field
    if(!title || !content || !email){
        console.log("please fill up the form to complete the blog")
    }
    else{
        const newBlog= new Blog({
            title,
            content,
            email
        })
        newBlog.save()
    
        
    }
}

function blogbyEmail(req,res){

    Blog.findOne({email:res.body.email})
    .then(blog=>{
        if(blog){
            //User exists
            res.json(blog)
            }
        }) 

}

function blogAll(req,res){
    Blogl.findAll({email:email})
    .then(blogs=>{
        if(blogs){
            res.json(blogs)

        }
    })
}


module.exports=routers