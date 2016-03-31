var user = require('user');

cc.Class({
    'extends': cc.Component,

    properties: {
        top: {
            'default': null,
            type: cc.Node
        },
        bottom: {
            'default': null,
            type: cc.Node
        },
        nickname: {
            'default': null,
            type: cc.Label
        },
        diamond: {
            'default': null,
            type: cc.Label
        },
        kill: {
            'default': null,
            type: cc.Label
        },
        dead: {
            'default': null,
            type: cc.Label
        },
        head: {
            'default': null,
            type: cc.Component
        },
        body: {
            'default': null,
            type: cc.Component
        },
        wheel: {
            'default': null,
            type: cc.Component
        }
    },

    uiShow: function uiShow() {
        var self = this;
        this.bottom.runAction(cc.moveTo(0.5, 0, 0).easing(cc.easeIn(3.0)));
        setTimeout(function () {
            self.top.runAction(cc.moveTo(0.5, 0, 0).easing(cc.easeIn(3.0)));
        }, 250);
    },

    initData: function initData() {
        this.nickname.string = user.nickname;
        this.diamond.string = user.diamond;
        this.kill.string = user.kill;
        this.dead.string = user.dead;
    },

    onLoad: function onLoad() {
        this.initData();
        this.uiShow();

        this.headComponent = this.head.getComponent('equip_head');
        this.bodyComponent = this.body.getComponent('equip_body');
        this.wheelComponent = this.wheel.getComponent('equip_wheel');
    },

    onBackHandler: function onBackHandler() {
        cc.director.loadScene('Main');
    }
});