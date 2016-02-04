'use strict';

var sio = require('../../../lib/socket.io');
var data = require('./data');

cc.Class({
    'extends': cc.Component,

    properties: {},

    enterAction: function enterAction() {
        cc.director.loadScene('controller');
        // window.socket = sio('127.0.0.1:3000');
    },

    onLoad: function onLoad() {},

    update: function update(dt) {}
});