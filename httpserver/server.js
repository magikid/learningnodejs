var http = require("http");

function start(){

    function onRequest(request, response) {
        console.log("Request received");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello world!");
        response.end();    
    }
    
    http.createServer(onRequest).listen(process.env.PORT);
    
    console.log("Server started");
}

exports.start = start;