/*const fs = require("fs");
fs.appendFile("newfile.txt", "Everything is Awesome !", err => {
if (err) throw err;
console.log("File saved.");
});*/
const fs= require ("fs");
fs.writeFile('newFile2.txt', 'w', (err, file) => {
    if (err) throw err;
       console.log['File saved.'];
    });
  fs.unlink ("newFile2.txt", err => {if 
        
        (err) throw err; 
        console.log ["file deleted."];
    });