const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');
const _ = require('lodash');

const db = "mongodb://yalairfan:yalairfan@ds219100.mlab.com:19100/playvideo";

mongoose.connect(db, function (err) {
  if (!err) console.log("Connected to the mongoDB ");
  else console.log("error while connnecting mongoDb ", err.message);
});

router.get('/', function (req, res) {
  res.send("API Works");
});

router.get('/videos', function (req, res) {
  console.log("GET request for Videos");
  Video.find((err, videoList) => {
    if (err) {
      console.error('error while retriving videos ', err.message);
    } else {
      res.json(videoList);
    }
  });
});

router.get('/videos/:id', function (req, res) {
  console.log("GET request for Video by id ", req.params.id);
  Video.findById(req.params.id, (err, video) => {
    if (err) {
      console.error('error while retriving videos ', err.message);
    } else {
      res.json(video);
    }
  });
});

router.post('/video',  function (req, res) {
  console.log("POST req for new video");
  var newVideo = new Video();
  newVideo.title = req.body.title;
  newVideo.url = req.body.url;
  newVideo.description = req.body.description;
  newVideo.save(function (err, videoWithId) {
    if (err) {
      console.log('error while inserting video ', err.message);
    } else {
      res.json(videoWithId);
    }
  });

});

router.put('/video/:id', function (req, res) {
  console.log('Update a video');
  Video.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      url: req.body.url,
      description: req.body.description
    }
  }, function (err, video) {
    if (!err) {
      console.log('CCCCCCCCCC ', video);
      res.send(video);
    }
  });
});

router.delete('/video/:id', function (req, res) {
  console.log('Deleting a video ');
  Video.findByIdAndRemove(req.params.id, function (err, deletedVideo) {
    if (!err)
      res.json(deletedVideo);
    else res.send('error while deleting video: ', err.message)
  });
})

module.exports = router;
