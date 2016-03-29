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