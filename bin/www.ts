/// <reference path="../typings/tsd.d.ts" />

/**
 * Module dependecies
 */
 
import app = require('../app');
import debugModule = require('debug');
import http = require('http');
import socketIo = require('socket.io');

var debug = debugModule('myApp:server');

/**
 * Get port from environment and store it in Express
 */
 
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server
 */
 
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
 
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Init socket.io
 */

 var socketServer = socketIo.listen(server);
 
 socketServer.on('connection', function(socket: SocketIO.Socket) {
	 // Socket routes go here
	 debug('User connected');
	 
	 socket.on('event', function(data) {
		console.log('event received!');
		socket.emit('success', ['string1', 'string2', 'string3']);
	 	console.log('event emitted!!');
	 });
	 
	 socket.on('disconnect', function() { 
		 debug('User disconnected');
	 });
 });

function normalizePort(val) {
	var port = parseInt(val, 10);

 	if (isNaN(port)) {
    	// named pipe
    	return val;
  	}

  	if (port >= 0) {
    	// port number
    	return port;
  	}

  	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
 
function onError(error) {
	if (error.syscall !== 'listen') {
    	throw error;
  	}

  	var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  	// handle specific listen errors with friendly messages
  	switch (error.code) {
        case 'EACCES':
	        console.error(bind + ' requires elevated privileges');
	      	process.exit(1);
		    break;
    	case 'EADDRINUSE':
      		console.error(bind + ' is already in use');
      		process.exit(1);
      		break;
    	default:
    		throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */
 
function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	debug('Listening on ' + bind);
}