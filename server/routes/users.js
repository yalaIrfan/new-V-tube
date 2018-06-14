const express = require('express');
const app = express();
const router = express.Router();
//const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/users');
const _ = require('lodash');
const config = require('../config/config');
var bcrypt = require('bcryptjs');
const db = config.database;


router.post('/authenticate', function (req, res) {
  User.findOne({
    name: req.body.name
  }, function (err,user) {
    
    if(err) throw err.message;
    
    if(!user){
        res.json({message:'User not found..!'})
    }

   else if(user){
      if(user.password != req.body.password){
        res.json({message:'Password does not match..!'})
      }
      else{
        const payload = {
          admin:user.admin
        };

        const token = jwt.sign(payload,'superSecrete'
        // ,{
        //   expiresInMinutes: 1440 
        // }
      );

        res.json({
          success:true,
          message:'Enjoy your token',
          token:token
        })
      }
    }
  });
});


router.get('/setup', function (req, res) {
  console.log('Res for users path');

  const nick = new User({
    name: 'Irfan H Y',
    password: 'pass@123',
    admin: true
  });

  nick.save(function (err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({
      success: true
    });
  });
});

router.get('/', function (req, res) {
  res.json({
    message: 'Welcome to the coolest API on earth!'
  });
});

router.get('/all', function (req, res) {
  console.log('hbhjbhjbjhb');
  User.find({}, function (err, users) {
    res.json(users);
  });
});

router.post('/register', function (req, res) {
  console.log('User reg',req.body);
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  var user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = hashedPassword;
  //user.admin=true;
  
  user.save(function(err,user){
    if(err){
      return res.status(500).send("There was a problem registering the user.");
    }else{
      console.log(user);
      return res.status(200).send("User registered succesfully..!");
    }
  });
});

module.exports = router;
