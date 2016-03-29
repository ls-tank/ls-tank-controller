var Connect = require('connect');

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad: function() {

    },

    onFire: function() {
        Connect.emit('c-fire', { fire: 'fire' });
    }
});
