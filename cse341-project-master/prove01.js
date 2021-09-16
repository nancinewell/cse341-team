const http = require('http');

const routes = require('./prove01-routes');
//cannot edit imported objects

const server = http.createServer(routes);

server.listen(3000);