var currentURL = window.location.origin;

// get data from our form 

// POST data to my endpoint 
// $.POST(endpoint-url)

$('button').on('click', function(e){
    //e.preventDefault();
    $.post( "/api/friends", { name: "John", time: "2pm" }, function( data ) {
        console.log(data);
    });
});