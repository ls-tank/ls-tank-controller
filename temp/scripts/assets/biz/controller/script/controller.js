"use strict";
cc._RFpush(module, '567615sefhI94g/0tQTKQ6o', 'controller');
// biz/controller/script/controller.js

var Connect = require('connect');

cc.Class({
    'extends': cc.Component,

    properties: {},

    onLoad: function onLoad() {},

    backHandler: function backHandler() {
        Connect.disconnect();
        cc.director.loadScene('Main');
    }
});

cc._RFpop();