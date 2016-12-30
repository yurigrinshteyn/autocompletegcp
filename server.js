var express = require('express');
var app = express();
//specify port for server
var port = 8080;

// refer requests to the desired home page
app.get('/', function (req, res, next) {
 res.sendFile( __dirname + '/autocomplete.html');
});

//specify port to listen on - from above
app.listen(port, '0.0.0.0', function() {
 console.log('Server running at port ' + port);
});
