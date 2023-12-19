const express = require("express");
const app = express();
const path = require("path");
const greeting = require("./sait-express pug files/Public/greeting");
var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "Jennifer",
//password: "jennifer58312566",
database: "travelexperts"

});
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
});

var sql = ("select * FROM customers");
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Result: " + result);
});



app.set("view engine","pug");
app.use(express.static(path.join(__dirname,"./views"),{extensions:["html","htm",]}));
app.use(express.static(path.join(__dirname,"./public"),{extensions:["css","js",]}));
app.use(express.static(path.join(__dirname,"./media"),{extensions:["gif","jpeg","jpg", "png"]}));



app.listen(8000, (err)=>{
    if (err) throw err;
    console.log("server started on port 8000");
});
app.use(express.urlencoded({extended: true}));

app.get("/",(req, res)=>{
    res.render("index",{greeting: greeting.greet()});
});
app.get("/contact2",(req, res)=>{
    res.render("contact2");
});
app.get("/about",(req, res)=>{
    res.render("about");
});
app.get("/404",(req, res)=>{
    res.render("404");
});
app.get("/register",(req, res)=>{
    res.render("register")
});
app.use((req, res, next)=>{
    res.status(404).render("404");
    next();
});


