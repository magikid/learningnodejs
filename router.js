function route(handle, pathname, response){
    console.log("About to route " + pathname);
    if(typeof handle[pathname] === "function"){
        handle[pathname](response);
    }else{
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-type": "text/plain"});
        response.write("404 not found");
        response.end();
    }
}

exports.route = route;