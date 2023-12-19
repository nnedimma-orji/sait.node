const mysql = require("mysql");
var dbh = mysql.createConnection({
host: "localhost",
user: "Jennifer",
//password: "jennifer58312566",
database: "travelexperts"
});

dbh.connect((err)=>{
    if (err) throw err;
    console.log("Connected to travel experts!");

    var sql = 'select CustomerId, CustFirstName, CustLastName from customers where AgentId=4';
    dbh.query(sql, (err, result, fields)=>{
       // console.log(result);
        //console.log(fields);
        for (var i=0; i<result.length; i++)
        {
            var cust = result[i];
            var outputString = cust.CustomerId + " / " + cust.CustFirstName + " / " + cust.CustLastName;
            console.log(outputString);
        }
        dbh.end((err)=>{
            if (err) throw err;
            console.log("disconnected from travelexperts");
        });
    });
});

