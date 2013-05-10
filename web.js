var server = require("./server/server");
var router = require("./server/router");
var requestHandlers = require("./server/requestHandlers");

var handle = {};
handle["/"] = requestHandlers.map;
handle["/map"] = requestHandlers.map;

server.start(router.route, handle);


