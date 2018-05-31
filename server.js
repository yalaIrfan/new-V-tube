const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); //Built-in module
const morgan      = require('morgan');
const api = require('./server/routes/api');
const users = require('./server/routes/users');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./server/config/config'); // get our config file
var User   = require('./server/models/users'); // get our mongoose model
const app = express();
app.set('superSecret', config.secret);
const port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use('/api', api); 
app.use('/api/users', users);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
});

app.listen(port, function () {
  console.log("Server is listening on PORT : ", port);
});

