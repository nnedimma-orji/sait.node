const mysql = require ("mysql");
const express = require("express");
const app = express();
app.listen(8000, (err=>{
    if (err) throw err;
    console.log("server started");
}));
//app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");

function getConnection()
{
        return mysql.createConnection({
            host: "localhost", 
            user: "Jennifer",
            database: "travelexperts"
    });
}
app.get("/deleteAgent", (req, res)=>{
    var dbh = getConnection();
    dbh.connect((err)=>{
        if (err) throw err;

        var sql = "select AgentId, AgtFirstName, AgtLastName from agents";
        dbh.query(sql, (err, result, fields)=>{

           res.render("agentdeletelist", { myTitle: "Agent deletion", result: result });
           });

       });
    });
    

/*app.get("/getagentupdate/:agentId", (req, res)=>{
    var dbh = getConnection();
    var sql = "select * from agents where AgentId=?"
    dbh.query({sql: sql, values:[req.params.agentId]},(err, result, fields)=>{
        console.log(result);
        res.render("agentupdateform", {myTitle: "Update Form", agent: result});
        dbh.end((err)=>{
            if (err) throw err;
            console.log("Disconnected from database");
        });
    });
});*/
app.get("/getagentdelete/:agentId", (req, res)=>{
    console.log(req.params);
    var dbh = getConnection();
    dbh.connect((err)=>{
        if (err) throw err;
        var sql = "DELETE FROM `agents` WHERE AgentId=?";
        var data = [ req.body.AgtFirstName, req.body.AgtMiddleInitial, req.body.AgtLastName, 
                    req.body.AgtBusPhone, req.body.AgtEmail, req.body.AgtPosition,
                    req.body.AgtAgencyId, req.body.AgentId];
        dbh.query({sql: sql, values: [req.params.agentId]}, (err, result)=>{
            var message = "";
           if (result.affectedRows){
                message = "Deleted Successfully";
           }
           else{
                message = " Delete Failed";
           }
           res.render("thank-you", {myTitle:"Confirmation", message: message
        });
    });
 });
});