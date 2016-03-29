var Connect = require('connect');

cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    onLoad: function() {
    
    },
    
    backHandler: function() {
        Connect.disconnect();
        cc.director.loadScene('Main');
    }
});
