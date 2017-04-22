var friendsArray = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {

    friendsArray.push(req.body);
    res.json({
      message: 'Success',
      data: req.body
    });
    console.log(friendsArray);
  });
  
};