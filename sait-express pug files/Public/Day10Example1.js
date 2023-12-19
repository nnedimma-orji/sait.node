const express = require("express");
const app = express();

app.listen(8000, ()=>{
	console.log("Server started on port 8000");
});

app.use(express.static("views", { "extensions": ["html"] }));


app.get("/", (req, res)=>{
	console.log(__dirname);
	res.send("Welcome to the main page");
});

app.get("/about", (req, res)=>{
	console.log(__dirname);

	res.sendFile(__dirname + "/about.html");
});

app.get("/contact", (req, res)=>{
	console.log(__dirname);

	res.send("This is the contact page");
});

app.post("/register", (req, res)=>{
	console.log(__dirname);
	console.log(req.params.fname);
	console.log(req.query.lname);
	console.log(req.query.phone);

	res.send("This page was triggered by a register post");
});

app.post("/customer", (req, res)=>{
	console.log(__dirname);

	res.send("This page was triggered by a customer post");
});

app.put("/putorder", (req, res)=>{
	console.log(__dirname);

	res.send("This page was triggered by a put");
});

app.delete("/delorder/:id", (req, res)=>{
	console.log(__dirname);
	console.log("id=" + req.params.id);

	res.send("This page was triggered by a delete");
});

app.use((req, res, next)=>{
	console.log("got to the first use method");
	next();
});

app.use((req, res, next)=>{
	console.log("got to the second use method");
	next();
});

app.use((req, res, next)=>{
	console.log("got to the third use method");
	//res.send("finished");
	next();
});

app.use((err, req, res, next)=>{
	res.status(404).sendFile(__dirname + "/404.html");
});