var wheel = require('wheel');
var user = require('user');

cc.Class({
    extends: cc.Component,

    properties: {
        wheels: {
            default: [],
            type: cc.SpriteFrame
        },
        wheel: {
            default: null,
            type: cc.Sprite
        },
        wheelDesc: {
            default: null,
            type: cc.Label
        },
        wheelCost: {
            default: null,
            type: cc.Label
        }
    },
    
    setwheelLevel: function(level) {
        level = level || 0;
        this.wheel.spriteFrame = this.wheels[level];
        this.wheelDesc.string = wheel[level].desc;
        this.wheelCost.string = wheel[level].cost;
    },
    
    onLoad: function() {
        this.setwheelLevel(user.tankWheel);
    }
});
