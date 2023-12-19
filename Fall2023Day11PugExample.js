const express = require ("express");
const app = express();
app.listen (8000,()=>{console.log("server started");});
app.use(express.static ("media",{extensions: ["png", "jpg","gif"]}));
app.set("view engine", "pug");

app.get("/", (req, res)=>{
    res.render("index");
});

app.use((req,res)=>{
    res.status(404).render("404");
});
//put in sait express directory