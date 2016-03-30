var user = require('user');

cc.Class({
    extends: cc.Component,

    properties: {
        top: {
            default: null,
            type: cc.Node
        },
        bottom: {
            default: null,
            type: cc.Node
        },
        nickname: {
            default: null,
            type: cc.Label
        },
        diamond: {
            default: null,
            type: cc.Label
        },
        kill: {
            default: null,
            type: cc.Label
        },
        dead: {
            default: null,
            type: cc.Label
        }
    },
    
    uiShow: function() {
        var self = this;
        this.bottom.runAction(cc.moveTo(0.5, 0, 0).easing(cc.easeIn(3.0)));
        setTimeout(function() {
            self.top.runAction(cc.moveTo(0.5, 0, 0).easing(cc.easeIn(3.0)));    
        }, 250);
    },
    
    initData: function() {
        this.nickname.string = user.nickname;
        this.diamond.string = user.diamond;
        this.kill.string = user.kill;
        this.dead.string = user.dead;
    },
    
    onLoad: function() {
        this.initData();
        this.uiShow();
    },
    
    onBackHandler: function() {
        cc.director.loadScene('Main');
    }
});
