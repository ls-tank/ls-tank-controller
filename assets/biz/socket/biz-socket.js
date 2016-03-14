var socketIO = require('../../lib/socket.io');
var utils = require('../../utils/index');

var BizSocket = (function() {
    var URI = '10.10.1.38:3000/tankControllers';
    var UID = utils.getUid();
    
    var ws = socketIO(URI + '?uid=' + UID);
    
    var connect = function () {
        ws.emit('c-enter');
    };
    
    var disconnect = function () {
        ws.emit('c-leave');
    };
    
    var on = function (eventName, callback) {
        ws.on(eventName, callback);    
    };
    
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