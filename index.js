var server = require("./server.js");
var router = require("./router.js");
var requesthandlers = require("./requestHandlers.js");

server.start(router.route);
