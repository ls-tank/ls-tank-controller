'use strict';

var socketIO = require('../../lib/socket.io');
var utils = require('../../utils/index');

var BizSocket = (function () {
    var URI = '10.10.1.7:3000/tankControllers';
    var UID = utils.getUid();

    var ws = socketIO(URI + '?uid=' + UID);

    var connect = function connect() {
        ws.emit('c-enter');
    };

    var disconnect = function disconnect() {
        ws.emit('c-leave');
    };

    var on = function on(eventName, callback) {
        ws.on(eventName, callback);
    };

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