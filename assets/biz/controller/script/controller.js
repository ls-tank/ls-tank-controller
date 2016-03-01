var bizSocket = require('../../socket/biz-socket');

cc.Class({
    extends: cc.Component,

    properties: {
        
    },
    
    backToMain: function() {
        bizSocket.disconnect();
        cc.director.loadScene('main');
    },
    
    onLoad: function () {
        
    },

    update: function (dt) {

    },
});
