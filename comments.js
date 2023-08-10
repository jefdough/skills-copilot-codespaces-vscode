// create web server
// run server: node comments.js
// open browser: http://localhost:3000
// open browser: http://localhost:3000/comments
// open browser: http://localhost:3000/comments/1

var express = require('express');
var app = express();

var comments = [
  { id: 1, author: 'Pete Hunt', text: 'This is one comment' },
  { id: 2, author: 'Jordan Walke', text: 'This is *another* comment' },
  { id: 3, author: 'Jordan Walke', text: 'This is *another* comment' }
];

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.get('/comments/:id', function(req, res) {
  var id = req.params.id;
  res.json(comments[id - 1]);
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});