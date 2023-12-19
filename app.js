/*const http = require("http");
const fs= require("fs");
http.createServer((request, response) => {
      fs.readFile("demo.html", (err, data) => {
    
      const url = require(`url`);
      let address = "http:///;

      let parsedAddress = url.parse(address, true);
      console.log(parsedAddress);*/
      
      const http = require("http");
      const fs = require("fs");
      const url = require("url");
      let address="http://localhost:8000/demo.html?year=2019&month=october;"
      // Create HTTP server and listen on port 8000 for requests
      http.createServer((request, response) => {
      let parsedAddress = url.parse(request.url, true);
      let file = "." + parsedAddress.pathname;
      fs.readFile(file, (err, data) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      return response.end();
      });
      }).listen(8000);
      
      



/*http.createServer((request, response) => {
       response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<h1>Hello World!</h1>");
}).listen(8000, () => {
     
      console.log(`Server running on port 8000`)});*/
