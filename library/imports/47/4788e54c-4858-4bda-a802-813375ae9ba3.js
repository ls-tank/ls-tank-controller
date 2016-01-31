'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {},

    enterAction: function enterAction() {
        cc.director.loadScene('controller');
    },

    onLoad: function onLoad() {},

    update: function update(dt) {}
});