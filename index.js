var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World how are you!');
});
app.listen(3230, function () {
  console.log('Example app listening on port 3230!');
});