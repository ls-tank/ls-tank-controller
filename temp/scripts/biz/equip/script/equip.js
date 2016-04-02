"use strict";
cc._RFpush(module, 'b2e86biu09Hy7mfNcjUwbGN', 'equip');
// biz/equip/script/equip.js

var user = require('user');
var api = require('api');

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
        },
        infoBox: {
            'default': null,
            type: cc.Node
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

        this.headComponent = this.head.getComponent('equip_item');
        this.bodyComponent = this.body.getComponent('equip_item');
        this.wheelComponent = this.wheel.getComponent('equip_item');

        this.onCost();
    },

    onCost: function onCost() {
        var self = this;

        this.headComponent.node.on('cost', function (event) {
            self.initData();self.updateRemote();
        });
        this.bodyComponent.node.on('cost', function (event) {
            self.initData();self.updateRemote();
        });
        this.wheelComponent.node.on('cost', function (event) {
            self.initData();self.updateRemote();
        });
    },

    updateRemote: function updateRemote() {
        api.update(user);
    },

    onNoCost: function onNoCost() {
        var self = this;

        this.headComponent.node.on('nocost', function (event) {
            self.initData();
        });
        this.bodyComponent.node.on('nocost', function (event) {
            self.initData();
        });
        this.wheelComponent.node.on('nocost', function (event) {
            self.initData();
        });
    },

    onBackHandler: function onBackHandler() {
        cc.director.loadScene('Main');
    }
});

cc._RFpop();