const http = require('http');
const app = require('./app');
const socketio = require('socket.io');

const port = process.env.POWER4_FRONT_PORT || 3001;

const server = http.createServer(app);
const io = socketio(server);

server.listen(port);