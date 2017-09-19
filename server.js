// server.js
// where your node app star

// init project
var express = require('express');
var url = require('url');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
   response.sendFile(__dirname + '/views/index.html');
});

app.get("/unix-timestamp/:date", function(request, response){
  var url_body = url.parse(request.url);
  var date_args = [];
  date_args = request.params.date.split(' ');
  find_unix_time_from_given_date(date_args);
  response.json({"unix": date_args});
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
  var year = 1970
  switch(date_args[0].toLowerCase())
  {
    case "january" :  month = 1;
                      break;
    case "feburary" :  month = 2;
                      break;
    case "march" :  month = 3;
                      break;
    case "april" :  month = 4;
                      break;
    case "may" :  month = 5;
                      break;
    case "june" :  month = 6;
                      break;
    case "july" :  month = 7;
                      break;
    case "august" :  month = 8;
                      break;
    case "september" :  month = 9;
                      break;
    case "october" :  month = 10;
                      break;
    case "november" :  month = 11;
                      break;
    case "december" :  month = 12;
                      break;
      
  }
   day = parseInt(date_args[1]);
  year = parseInt(date_args[2]);
  
}