cc._RFpush(module, '4788eVMSFhL2qgCgTN1rpuj', 'main');
// biz/main/script/main.js

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

cc._RFpop();