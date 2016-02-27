/*global require*/
/*global __dirname*/

var express = require('express');
var app = express();
var sleep = require('sleep');
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


var state = {
  clusterList: [
    {
      id: 1,
      name: 'first',
    },
    {
      id: 2,
      name: 'second',
    }
  ],
  nodeList: [
    {
      id: 1,
      clusterId: 1,
      name: 'node a'
    },
    {
      id: 2,
      clusterId: 1,
      name: 'node b'
    },
    {
      id: 3,
      clusterId: 2,
      name: 'node x'
    },
    {
      id: 4,
      clusterId: 2,
      name: 'node y'
    },
    {
      id: 5,
      clusterId: 2,
      name: 'node z'
    },
  ]
}

app.get('/get-all', function(req, res){
  sleep.usleep(400000);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    state: state
  }));
});


app.all('*', function(req, res){
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
