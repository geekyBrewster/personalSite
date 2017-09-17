var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

var port = process.env.PORT || 7000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Catch-all for requests
app.get("/*", function(req, res){
  var file = req.params[0] || "views/index.html";
  res.sendFile(path.join(__dirname, "public", file));
});

// Start up the server
app.listen(port, function(){
  console.log("Server up and running on port " + port);
});
