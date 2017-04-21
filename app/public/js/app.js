var friendsArray = require("../../data/friends.js");

var currentURL = window.location.origin;

// get data from our form 

// POST data to my endpoint 
// $.POST(endpoint-url)

$("#submitBtn").on('click', function(e){
    e.preventDefault();
    var newUser = {
        name: $("#userName").val().trim(),
        photo: $("#userPhoto").val().trim(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    };

    $.post( "/api/friends", newUser, function( data ) {
        console.log(data);
    });
});


var compareFriends = function(newFriend) {
    for (var i = 0; i < friendsArray.length; i++) {
        var possibleFriendScores = friendsArray[i].scores;
        var newFriendScores = newFriend.scores;

        var differencesArr = [];

        for (var j = 0; j < possibleFriendScores.length; j++) {
            var scoreA = possibleFriendScores[j];
            var scoreB = newFriendScores[j];

            var diff = Math.abs(scoreA - scoreB);
            differencesArr.push(diff);
        }
        
    }

}