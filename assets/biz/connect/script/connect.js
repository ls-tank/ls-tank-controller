var sio = require('socket.io')
var User = require('user');

var Connect = (function() {
    var URI = '10.10.1.38:3000/tankControllers';
    
    var ws;
    
    var connect = function() {
        ws = sio(URI + '?uid=' + User.Id); 
    }
    
    var disconnect = function() {
        ws.disconnect();
    }
    
    var on = function(eventName, callback) {
        ws.on(eventName, callback);
    }
    
    var emit = function(eventName, eventObj) {
        ws.emit(eventName, {
           uid: User.Id,
           data: eventObj
        });
    }
    
    return {
        connect: connect,
        disconnect: disconnect,
        on: on,
        emit: emit
    }
})();

module.exports = Connect;