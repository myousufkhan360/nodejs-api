var express = require("express");
var app  = express();

app.listen(3000, ()=>{
   console.log('Server running on port 3000 address: http://localhost:3000'); 
});

app.get("/data", (req, res, next)=> {
    res.json([
        "Tony",
        "Lisa",
        "Food",
        "Apple"
    ]);
})