const mysql = require("sql");
const express= require("express");
const app = require("app");
app.listen(8000, (err)=>{
    if (err) throw err;
    console.log("server started");

});
app.set("view engine", "ejs");

function getConnection()
{
    return mysql.createConnection({ 
        host:"localhost", 
        user:"harv",
        password:"password",
        database:"travelexports"

    });
}
app.get("/loadagent", (req, res)=>{
    var dbh = getConnection();
    dbh.connect((err)=>{
        if (err) throw err;
        var sql = "select AgentId, AgtFirstName, AgtLastName from agents";
        dbh.query({sql: sql, values: [req.params.agent]}, (err, result, fields)=>{
            res.render("agentupdateform", {myTitle: "Update Form, agent: result"});
            dbh.end((err)=>{
                if (err) throw err;
                console.log("disconnected from database");
            });

        });
    });
    
});
app.get("/getagentupdate/:agentId", (req, res)=>{
   var dbh = getConnection();
   var sql = "select * from agents where AgentId=?";
   dbh.query(sql, (err, result)=>{

   });
});
//app.post("/updateagent")