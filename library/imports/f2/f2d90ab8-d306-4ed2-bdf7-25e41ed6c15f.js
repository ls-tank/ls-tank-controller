'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {},

    backToMain: function backToMain() {
        cc.director.loadScene('main');
        window.socket.disconnect();
    },

    onLoad: function onLoad() {},

    update: function update(dt) {}
});