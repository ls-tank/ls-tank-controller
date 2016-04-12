var Connect = require('connect');
var user = require('user');
var api = require('api');

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
            user.lose();
            api.update({
                diamond: user.diamond,
                kill: user.kill,
                dead: user.dead,
                tankbody: user.tankbody,
                tankhead: user.tankhead,
                tankwheel: user.tankwheel
            })
        });
        
        Connect.on('c-score', event => {
            user.win(event.data.price);
            api.update({
                diamond: user.diamond,
                kill: user.kill,
                dead: user.dead,
                tankbody: user.tankbody,
                tankhead: user.tankhead,
                tankwheel: user.tankwheel
            })
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
