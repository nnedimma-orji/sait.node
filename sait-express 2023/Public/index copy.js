const express = require ("express");
const app = express();
app.listen(8000, (err)=>{
    if (err) throw err;
    console.log("server started on port 8000");
});