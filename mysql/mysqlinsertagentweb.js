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

app.get("/newagent", (req, res)=>{
/*
	var dbh = getConnection();
	dbh.connect((err)=>{
		if (err) throw err;
		
		var sql = "select AgentId, AgtFirstName, AgtLastName from agents";
		dbh.query(sql, (err, result, fields)=>{
			//finish building the query handler
*/
			res.render("agentinsertform", { myTitle: "Enter New Agent Data" });
/*
		});
	});
*/
});

/*
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
*/

app.post("/insertagent", (req, res)=>{
	console.log(req.body);
	var dbh = getConnection();
	
	dbh.connect((err)=>{
		if (err) throw err;
		
		var sql = "INSERT INTO `agents`(`AgtFirstName`, `AgtMiddleInitial`, `AgtLastName`, `AgtBusPhone`, `AgtEmail`, `AgtPosition`, `AgencyId`) VALUES (?,?,?,?,?,?,?)";
		var data = [ req.body.AgtFirstName, req.body.AgtMiddleInitial, req.body.AgtLastName,
			req.body.AgtBusPhone, req.body.AgtEmail, req.body.AgtPosition,
			req.body.AgencyId ];
		dbh.query({sql: sql, values: data}, (err, result)=>{
			var message = "";
			console.log(result);
			if (result.affectedRows)
			{
				message = "Inserted successfully";
			}
			else
			{
				message = "Insert failed";
			}
			res.render("thank-you", { myTitle:"Confirmation", message: message });
		});
	});
});






