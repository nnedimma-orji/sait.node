const express = require("express");
const app = express();
const path = require("path");
const greeting = require("./Public/greeting");
app.listen(8000, (err)=>{
    if (err) throw err;
    console.log("server started on port 8000");
});
/*app.get("/about",(req, res)=>{
    res.send(greeting.greet());
});*/
app.use(express.static(path.join(__dirname,"views"),{extensions:["html","htm",]}));
app.use(express.static(path.join(__dirname,"public"),{extensions:["css","js",]}));
app.use(express.static(path.join(__dirname,"media"),{extensions:["gif","jpeg","jpg", "png"]}));
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.render("index");
    });
    
app.use((req, res, next)=>{
    res.status(404).send("Sorry, can't find that.");
});