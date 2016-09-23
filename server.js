var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleone',function(req,res){
    res.send("Article one requested , one will be served here")
});


app.get('/articletwo',function(req,res){
    res.send("Article Two requested , Two will be served here")
});


app.get('/articelthree',function(req,res){
    res.send("Article Three requested , Three will be served here")
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


//var port = 8181; // Use 8080 for local development because you might already have apache running on 80
app.listen(8181, function () {
  console.log(`IMAD course app listening on port {port}!`);
});