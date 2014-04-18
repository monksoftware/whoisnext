var express = require('express.io');
var path = require('path');
app = require('express.io')();
app.http().io();

var votes = {
  loi: 0,
  cincis: 0,
  gennaro: 0,
  dario: 0
};

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/client.html');
});

app.io.route('vote', function(req) {
  votes[req.data.name] += 1;
  app.io.broadcast('voted', votes);
});

app.listen(3000);
