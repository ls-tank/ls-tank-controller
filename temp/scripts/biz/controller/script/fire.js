"use strict";
cc._RFpush(module, 'c6b4cSF38ZHxorLIkgGelBo', 'fire');
// biz/controller/script/fire.js

var Connect = require('connect');

cc.Class({
    'extends': cc.Component,

    properties: {},

    onLoad: function onLoad() {},

    onFire: function onFire() {
        Connect.emit('c-fire', { fire: 'fire' });
    }
});

cc._RFpop();