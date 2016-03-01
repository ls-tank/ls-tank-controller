var bizSocket = require('../../socket/biz-socket');

cc.Class({
    extends: cc.Component,

    properties: {
        
    },
    
    onLoad: function () {

    },

    fire: function () {
        bizSocket.emit('c-fire', {
            fire: 'fire'
        });
    }
});
