var express = require('express');
var app = express();
var fs = require('fs');

app.get("/", function (req, res) {
    res.send("Selamat datang");
  });

app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data);
    });
})

var server = app.listen(8080, function(){
    var port = server.address().port
    console.log("REST API demo app listening at http://localhost:%s", port)
})