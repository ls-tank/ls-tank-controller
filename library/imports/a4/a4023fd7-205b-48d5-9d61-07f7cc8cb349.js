'use strict';

var bizSocket = require('../../socket/biz-socket');

cc.Class({
    'extends': cc.Component,

    properties: {},

    onLoad: function onLoad() {},

    fire: function fire() {
        bizSocket.emit('c-fire', {
            fire: 'fire'
        });
    }
});