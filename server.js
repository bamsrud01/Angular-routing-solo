//  Required modules
var express = require('express');
var path = require('path');

//  Set up express
var app = express();
app.use(express.static('public'));

//  GET request
app.get('/*',function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(3000);
console.log('Listening on port 3000');
