var express = require('express');
var youtube = require('youtube-random-video');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  youtube.getRandomVid('AIzaSyAe7YL9j_R2AbDY-6yuj_CHWKhK6zwMi2s', function(err , data){
    console.log(data.id.videoId);
    res.send(data.id.videoId);
  });
});

module.exports = router;
