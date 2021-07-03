const express = require('express');
const route = express.Router()
route.get('/', (req, res) => {
    console.log("Done my boi")
    res.send("done");
    res.end()
})

module.exports = route