// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const PORT = 3000 || process.env.PORT;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//for project
app.get("/api/whoami", function (req, res) {
  let ipaddress = req.headers.host;
  let language = req.headers["accept-language"];
  let software = req.headers["user-agent"];

  res.json({
    ipaddress,
    language,
    software
  })
});



// listen for requests :)
var listener = app.listen(PORT, function () {
  console.log('Your app is always just listening on port ' + listener.address().port);
});
