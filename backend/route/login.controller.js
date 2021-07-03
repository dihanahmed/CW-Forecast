const express = require('express');
const route = express.Router()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

route.get('/', (req, res) => {
    console.log("Done my boi")
    res.send("done")
    res.end()
})
route.post('/',(req,res) => {
    const name = req.body.name
    res.send(name)
})

module.exports = route