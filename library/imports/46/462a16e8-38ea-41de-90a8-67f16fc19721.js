'use strict';

var socketIO = require('../../lib/socket.io');

var BizSocket = (function () {
    var URI = '10.10.1.31:3000/tankControllers';
    var UID = 'lisheng';

    var ws = socketIO(URI + '?uid=' + UID);

    var connect = function connect() {
        ws.emit('c-enter');
    };

    var disconnect = function disconnect() {
        ws.emit('c-leave');
    };

    var on = ws.on.bind(ws);

    var emit = function emit(eventName, eventObj) {
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
    };
})();

module.exports = BizSocket;