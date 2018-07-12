const express = require('express');
const app = express();
const router = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/users');
const _ = require('lodash');
const config = require('../config/config');
var bcrypt = require('bcryptjs');


router.post('/login', function (req, res) {
  console.log('login end point');
  User.findOne({
    email: req.body.email
  }, function (err, user) {

    if (err) throw err.message;

    if (!user) {
      res.json({
        message: 'User not found..!'
      }).status(404);
    } else if (user) {
      bcrypt.compare(req.body.password, user.password, function (err, yes) {

        if (err) {
          return res.json({
            message: 'Password does not match..!'
          }).status(500);
        }

        const payload = {
          admin: user.admin,
          email:user.email
        };

        const token = jwt.sign(payload, 'superSecrete'
          // ,{
          //   expiresInMinutes: 1440 
          // }
        );

        console.log('tokentoken ' + token);
        return res.json({
          auth: true,
          message: 'Enjoy your token',
          token: token,

        }).status(200);
      });
    }
  });
});


router.get('/', function (req, res) {
  res.json({
    message: 'Welcome to the coolest API on earth!'
  });
});

router.get('/all', function (req, res) {
  console.log('hbhjb hjbjhb');
  User.find({}, function (err, users) {
    res.json(users);
  });
});

router.post('/register', function (req, res) {
  console.log('User reg', req.body);
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  var user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = hashedPassword;
  //user.admin=true;

  user.save(function (err, user) {
    if (err) {
      console.log('There was a problem registering the user.');
      return res.status(500).json("There was a problem registering the user.");
    } else {
      console.log('User registered succesfully..!');
      return res.send({
        message: "User registered succesfully..!"
      }).status(201);
    }
  });
});

module.exports = router;
