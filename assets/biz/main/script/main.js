var bizSocket = require('../../socket/biz-socket');

cc.Class({
    extends: cc.Component,

    properties: {
        
    },
    
    enterAction: function () {
        cc.director.loadScene('controller');
        bizSocket.connect();
    },
    
    onLoad: function () {
        
    },

    update: function (dt) {

    },
});
