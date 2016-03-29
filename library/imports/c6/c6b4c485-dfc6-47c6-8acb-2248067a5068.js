var Connect = require('connect');

cc.Class({
    'extends': cc.Component,

    properties: {},

    onLoad: function onLoad() {},

    onFire: function onFire() {
        Connect.emit('c-fire', { fire: 'fire' });
    }
});