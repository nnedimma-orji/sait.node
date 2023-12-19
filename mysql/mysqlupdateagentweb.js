const mysql = require("mysql");
const express = require("express");
const app = express();
app.listen(8000, (err)=>{
	if (err) throw err;
	
	console.log("server started");
});

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

function getConnection()
{
	return mysql.createConnection({ 
		host: "localhost",
		user: "Jennifer",
		//password: "password",
		database: "travelexperts"		
	});
}

app.get("/loadagent", (req, res)=>{
	var dbh = getConnection();
	dbh.connect((err)=>{
		if (err) throw err;
		
		var sql = "select AgentId, AgtFirstName, AgtLastName from agents";
		dbh.query(sql, (err, result, fields)=>{
			//finish building the query handler
			res.render("agentupdatelist", { myTitle: "Agent Updates", result: result });
		});
	});
});

app.get("/getagentupdate/:agentId", (req, res)=>{
	var dbh = getConnection();
	var sql = "select * from agents where AgentId=?";
	dbh.query({sql: sql, values: [req.params.agentId]}, (err, result, fields)=>{
		console.log(result);
		res.render("agentupdateform", { myTitle: "Update Form", agent: result });
		dbh.end((err)=>{
			if (err) throw err;
			
			console.log("disconnected from database");
		});
	});
});

app.post("/updateagent", (req, res)=>{
	console.log(req.body);
	var dbh = getConnection();
	
	dbh.connect((err)=>{
		if (err) throw err;
		
		var sql = "UPDATE `agents` SET `AgtFirstName`=?,`AgtMiddleInitial`=?,`AgtLastName`=?,`AgtBusPhone`=?,`AgtEmail`=?,`AgtPosition`=?,`AgencyId`=? WHERE AgentId=?";
		var data = [ req.body.AgtFirstName, req.body.AgtMiddleInitial, req.body.AgtLastName,
			req.body.AgtBusPhone, req.body.AgtEmail, req.body.AgtPosition,
			req.body.AgencyId, req.body.AgentId];
		dbh.query({sql: sql, values: data}, (err, result)=>{
			var message = "";
			console.log(result);
			if (result.affectedRows)
			{
				message = "Updated successfully";
			}
			else
			{
				message = "Update failed";
			}
			res.render("thank-you", { myTitle:"Confirmation", message: message });
		});
	});
});






