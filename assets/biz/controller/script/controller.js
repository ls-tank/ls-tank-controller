cc.Class({
    extends: cc.Component,

    properties: {
        
    },
    
    backToMain: function() {
        cc.director.loadScene('main');
        window.socket.disconnect();
    },
    
    onLoad: function () {
        
    },

    update: function (dt) {

    },
});
