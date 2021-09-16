"use strict";

var http = require('http');

var routes = require('./prove01-routes'); //cannot edit imported objects


var server = http.createServer(routes);
server.listen(3000);