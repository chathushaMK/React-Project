nnn
     
const { createServer } = require('http');
const { Server } = require('socket.io');

console.log('Starting server...');

const httpServer = createServer();
const io = new Server(httpServer, {})