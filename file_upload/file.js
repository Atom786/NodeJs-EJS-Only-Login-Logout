const express = require('express')
const files = require("express-fileupload");
const fileController = require("./controller/file_control")
const app = express()
require('dotenv').config()
const port = process.env.PORT || 2020

// !important! 
// you need to install the following libraries |express|[dotenv > if required]


app.set("view engine", "ejs");
app.set("views","views");

app.use(files({
    useTempFiles:true,
    tempFileDir: "/file/"

}))
app.get('/' , (req , res)=>{
    res.render("index");
})

app.post("/file",(req,res,next)=>{
    const file = req.files;
    console.log(file);
    file.mv(__dirname+"/file"+ file.name);
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))