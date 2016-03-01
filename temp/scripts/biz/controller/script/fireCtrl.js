cc._RFpush(module, 'a4023/XIFtI1Z1hB/fMjLNJ', 'fireCtrl');
// biz/controller/script/fireCtrl.js

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

cc._RFpop();