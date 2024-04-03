const express = require("express")
const mongoose = require("mongoose")

const app = express()

const port = 5000;

app.listen(port ,() =>{
    console.log("Listening on port")
})

app.get("/",(req,res)=>{
    res.send("hi ")
})

mongoose.connect("mongodb://127.0.0.1:27017")
.then((result)=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err);
})