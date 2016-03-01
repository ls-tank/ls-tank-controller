'use strict';

var bizSocket = require('../../socket/biz-socket');

cc.Class({
    'extends': cc.Component,

    properties: {},

    backToMain: function backToMain() {
        bizSocket.disconnect();
        cc.director.loadScene('main');
    },

    onLoad: function onLoad() {},

    update: function update(dt) {}
});