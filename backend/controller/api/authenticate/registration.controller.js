const confirmRegistration=(req,res) => {
    res.send(req.body.email)
}
module.exports=confirmRegistration