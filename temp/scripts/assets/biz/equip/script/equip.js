"use strict";
cc._RFpush(module, 'b2e86biu09Hy7mfNcjUwbGN', 'equip');
// biz/equip/script/equip.js

var boxShow;
var bottomShow;

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
        }
    },

    onLoad: function onLoad() {
        var self = this;
        this.bottom.runAction(cc.moveTo(0.5, 0, 0));
        setTimeout(function () {
            self.top.runAction(cc.moveTo(0.5, 0, 0));
        }, 250);
    },

    onBackHandler: function onBackHandler() {
        cc.director.loadScene('Main');
    }
});

cc._RFpop();