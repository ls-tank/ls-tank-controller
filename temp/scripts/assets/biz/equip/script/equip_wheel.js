"use strict";
cc._RFpush(module, 'fcc17OaZGdCU6AAxaXbyCVu', 'equip_wheel');
// biz/equip/script/equip_wheel.js

var wheel = require('wheel');
var user = require('user');

cc.Class({
    'extends': cc.Component,

    properties: {
        wheels: {
            'default': [],
            type: cc.SpriteFrame
        },
        wheel: {
            'default': null,
            type: cc.Sprite
        },
        wheelDesc: {
            'default': null,
            type: cc.Label
        },
        wheelCost: {
            'default': null,
            type: cc.Label
        }
    },

    setwheelLevel: function setwheelLevel(level) {
        level = level || 0;
        this.wheel.spriteFrame = this.wheels[level];
        this.wheelDesc.string = wheel[level].desc;
        this.wheelCost.string = wheel[level].cost;
    },

    upgrade: function upgrade() {
        user.tankWheel++;
        this.setBodyLevel(user.tankWheel);
    },

    onLoad: function onLoad() {
        this.setwheelLevel(user.tankWheel);
    }
});

cc._RFpop();