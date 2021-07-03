const express = require("express");

const app = express();

app.get("/express",((req, res) => {
    console.log("Sending data");
    res.json({helloWorld: "hello world"});
}))

app.listen(8001)