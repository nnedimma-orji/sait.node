const { error } = require("console");
const express= require("express");
const app= express();
const path= require("path");
app.listen(8000, (err)=>{
    if (err) throw  err;
    console.log("server started on port 8000");
});

app.use(express.static(path.join (__dirname,"views"),{extensions:["html"]}));
app.use(express.static("media",{extensions:["gif", "jpg", "png"]}));
app.use(express.static("public",{extensions:["css", "js"]}));
app.use(express.urlencoded({extended:true}));

app.post("/create-post",()=>{
    //console.log(req.body);
    var mypost = req.body.blogpost;
   // res.send("<h1 style= 'backgroundcolor: aqua';>message recieved:"+ mypost + "</h1>");
    res.redirect("/thank-you");
});
//look up digital ocean and install Pug 