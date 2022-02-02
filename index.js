const express = require("express")
require('dotenv').config()
const app = express()

app.get("/",(req,res)=>{
    res.send("working")
})

app.listen(process.env.PORT,()=>{
    console.log("server is running on port ",process.env.PORT)
})
