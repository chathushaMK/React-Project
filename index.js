nnn
     
const { createServer } = require('http');
const { Server } = require('socket.io');

console.log('Starting server...');

const httpServer = createServer();
const io = new Server(httpServer, {});

const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('A user connected');