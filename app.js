app = require('express.io')();
app.http().io();

var votes = {
  loi: 0,
  cincis: 0,
  gennaro: 0,
  dario: 0
};

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/client.html');
});

app.io.route('vote', function(req) {
  votes[req.data.name] += 1;
  req.io.broadcast('voted', votes);
});

app.listen(3000);
