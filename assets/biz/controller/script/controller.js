var Connect = require('connect');

var loseAction = {
    show: cc.moveTo(0.5, cc.p(0, 0)).easing(cc.easeIn(3.0)),
    hide: cc.moveTo(0.5, cc.p(0, 640)).easing(cc.easeIn(3.0))
};

cc.Class({
    extends: cc.Component,

    properties: {
        lose: {
            default: null,
            type: cc.Node
        },
        direct: {
            default: null,
            type: cc.Node
        },
        fire: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function() {
        Connect.connect();
        Connect.on('c-boom', event => {
            this.lose.runAction(loseAction.show);    
        });
    },
    
    onDestory: function() {
        
    },
    
    nextHandler: function() {
        this.lose.runAction(loseAction.hide);
        Connect.emit('c-next');
    },
    
    equipHandler: function() {
        cc.director.loadScene('Equip');
        Connect.disconnect();
    },
    
    backHandler: function() {
        cc.director.loadScene('Main');
        Connect.disconnect();
    }
});
