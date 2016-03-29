"use strict";
cc._RFpush(module, '628b1Sm1j9LRYrbMGpLPljr', 'connect');
// biz/connect/script/connect.js

var sio = require('socket.io');
var User = require('user');

var Connect = (function () {
    var URI = '10.10.1.38:3000/tankControllers';

    var ws;

    var connect = function connect() {
        ws = sio(URI + '?uid=' + User.Id);
    };

    var disconnect = function disconnect() {
        ws.disconnect();
    };

    var on = function on(eventName, callback) {
        ws.on(eventName, callback);
    };

    var emit = function emit(eventName, eventObj) {
        ws.emit(eventName, {
            uid: User.Id,
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

module.exports = Connect;

cc._RFpop();