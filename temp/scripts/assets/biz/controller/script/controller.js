cc._RFpush(module, 'f2d90q40wZO0r33JeQe1sFf', 'controller');
// biz/controller/script/controller.js

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

cc._RFpop();