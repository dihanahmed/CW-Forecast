
//User model
const Blog= require('../../models/blogs');


//blog post handle

function  makeBlog(req,res){

    const {title, content, email}=req.body;


    //check required field
    if(!title || !content || !email){
        console.log("please fill up the form to complete the blog")
    }
    else{
         new Blog({
            title,
            content,
            email
        }).save().then(()=>{
            return res.send({successful:true});
         });
    
        
    }
}

function findByEmail(req,res){

    Blog.find({email:req.body.email})
    .then(blog=>{
        if(blog){
            //User exists
            res.json(blog)
            }
        }) 

}

function findAll(req,res){
    Blog.find()
    .then(blogs=>{
        if(blogs){
            res.json(blogs)

        }
    })
}


module.exports={
    makeBlog,
    findByEmail,
    findAll
}