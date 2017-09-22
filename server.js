// server.js
// where your node app star

// init project
var express = require('express');
var url = require('url');
var tinyurl = require('tinyurl');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
   response.sendFile(__dirname + '/views/index.html');
});

app.get("/new/:req_url", function(request, response){

  var req_url = request.params["req_url"];
  var tiny_url;
  // tinyurl.shorten(req_url, function(res){
  //   tiny_url = res;
  //   console.log("tiny_url");
  // });
  response.json({"tiny url" : req_url});
});

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

function find_unix_time_from_given_date(date_args){
  var month = 1;
  var day = 1;
  var year = 1970;
  month = date_args[0].toLowerCase();
  day = parseInt(date_args[1]);
  year = parseInt(date_args[2]);
  var parsedUnixTime = new Date(day + ' ' + month + ' ' +  year).getUnixTime();
  // var parsedUnixTime = new Date('25 december 1995').getUnixTime();
  return parsedUnixTime;
}

function find_natural_date_from_unix_timestamp(date_args){
  
  var t = new Date(date_args[0]*1000);
  return t.toDateString();
}

Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };