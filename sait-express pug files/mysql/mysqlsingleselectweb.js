const mysql = require("mysql");
const express = require("express");
const app = express();
const path = require("path");
app.listen(8000, (err)=>{
    if (err) throw err;
    console.log("server started");
});

app.set("view engine", "ejs");
function getConnection()
{
    return mysql.createConnection({
        host: "localhost",
        user: "Jennifer",
        //password: "jennifer58312566",
        database: "travelexperts"
        });
}
app.get("/getsingle", (req, res)=>{
    var dbh = getConnection();
    dbh.connect((err)=>{
        if (err) throw err;
        var sql = 'select AgentId, AgtFirstName, AgtLastName from agents';
        dbh.query(sql, (err, agent)=>{
            if (err) throw err;

            res.render("AgentList", { myTitle: "Agent List", result: agent});
/*            fs.readFile("./views/header.html", (err, data)=>{
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html"});
                res.write(data);
                res.write("<select onchange='getAgent(this.value)'>");
                res.write("<option value=''>Select an Agent to view details</option>");

                for(var i=0; i<result.length; i++)
                {
                    res.write("<option value='" + result[i].AgentId + "'>"
                     +  result[i].AgtFirstName + " " + result[i].AgtLastName + "</option>");
                }
                res.write("</select>");
                fs.readFile("./views/footer.html", (err, data)=>{
                    if (err) throw err;
                    res.write(data);
                    res.end();
*/           
            dbh.end((err)=>{
            if (err) throw err;
            console.log("Disconnected from database");

        });
 /*   
              });
            });
*/
         });
     });
 });
 app.get("/getAgent/:AgentId", (req, res)=>{
    var dbh = getConnection();
    dbh.connect((err)=>{
        if (err) throw err;
        var sqlString = "select * from agents where AgentId=?";
        dbh.query({sql: sqlString, values: req.params.AgentId }, (err, agent, fields)=>{
            res.render("agentdetail", { myTitle: "Agent List", result: agent, fields: fields });
            console.log(agent);
            res.end();
            dbh.end(console.log("Disconnected from database"));
        });
    });
 });
