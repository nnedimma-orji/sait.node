const http = require ("http");
const greeting = require ("./greeting.js");
var server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type": "text/html"});
    res.write("<!Doctype html>");
    res.write("<html>");
    res.write("<head><title>Welcome to our page</title></head>");
    res.write("<body>");
    res.write("<h1>" + greeting.greet() + "</h1>");
    res.write("</body></html>");
    res.end();
});
server.listen(8000, (err)=>{
    if (err) throw err;
    console.log("server started on port 8000");
});