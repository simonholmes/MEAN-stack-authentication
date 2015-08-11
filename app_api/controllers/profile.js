var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


module.exports.profileRead = function(req, res) {
  console.log("Reading profile ID: " + req.params.userid);
  res.status(200);
  res.json({
    "message" : "Profile read: " + req.params.userid
  });
};

module.exports.profileUpdate = function(req, res) {
  console.log("Updating profile ID: " + req.params.userid);
  res.status(200);
  res.json({
    "message" : "Profile updated for " + req.params.userid
  });
};
