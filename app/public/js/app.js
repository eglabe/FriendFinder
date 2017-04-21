var currentURL = window.location.origin;

// get data from our form 

// POST data to my endpoint 
// $.POST(endpoint-url)

$("#submitBtn").on('click', function(e){
    //e.preventDefault();
    var newUser = {
        name: $("#userName").val().trim(),
        photo: $("#userPhoto").val().trim(),
        scores: {
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
        }
    };




    $.post( "/api/friends", { name: "John", time: "2pm" }, function( data ) {
        console.log(data);
    });
});