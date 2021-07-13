
//User model
const Blog= require('../../models/blogs');
const sessionStorage = require('sessionstorage')

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
function findByBlogId(req,res) {
    Blog.findById(req.body.blog_id,function(err,blog){
        if(err){
                res.send({successful: false})
            }
        else {
            res.json(blog)
        }
    })
}
function findAndRemove(req,res){
/*
    sessionStorage.setItem('user','test@test.com')
*/
    let sessionEmail=sessionStorage.getItem('user')
    if(sessionEmail===req.body.email)   {
        Blog.findByIdAndRemove(req.body.blog_id,function(err,res) {
            if(err){
                res.send({successful: false})
            }

        })
    }
}

function findAll(req,res){
    Blog.find()
    .then(blogs=>{
        if(blogs){
            res.json(blogs)

        }
    })
    //done
}


module.exports={
    makeBlog,
    findByEmail,
    findAll,
    findByBlogId,
    findAndRemove
}