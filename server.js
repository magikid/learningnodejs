var http = require("http");
var url = require("url");

function start(){

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello world!");
        response.end();    
    }
    
    http.createServer(onRequest).listen(process.env.PORT);
    
    console.log("Server started");
}

exports.start = start;