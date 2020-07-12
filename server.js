const http = require('http');
const app = require('./app');

const port = process.env.POWER4_FRONT_PORT || 3001;

const server = http.createServer(app);

server.listen(port);