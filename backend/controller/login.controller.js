const canLogin =(req,res)=>{
    const name=req.body.name
    const password=req.body.password
    res.send(`${name}`+" No More "+`${password}`)
}
module.exports=canLogin