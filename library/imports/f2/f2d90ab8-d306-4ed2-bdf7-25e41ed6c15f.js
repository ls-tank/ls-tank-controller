'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {},

    backToMain: function backToMain() {
        cc.director.loadScene('main');
    },

    onLoad: function onLoad() {},

    update: function update(dt) {}
});