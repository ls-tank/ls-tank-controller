var socketIO = require('../../lib/socket.io');

var BizSocket = (function() {
    var URI = '10.10.1.29:3000/tankControllers';
    var UID = 'lisheng';
    
    var ws = socketIO(URI + '?uid=' + UID);
    
    var connect = function () {
        ws.emit('c-enter');
    };
    
    var disconnect = function () {
        ws.emit('c-leave');
    };
    
    var on = ws.on.bind(ws);
    
    var emit = function(eventName, eventObj) {
        ws.emit(eventName, {
           uid: UID,
           data: eventObj
        });
    };
    
    return {
        connect: connect,
        disconnect: disconnect,
        on: on,
        emit: emit
    }
})();

module.exports = BizSocket;