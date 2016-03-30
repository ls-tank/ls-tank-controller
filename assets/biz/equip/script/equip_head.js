var head = require('head');
var user = require('user');

cc.Class({
    extends: cc.Component,

    properties: {
        heads: {
            default: [],
            type: cc.SpriteFrame
        },
        head: {
            default: null,
            type: cc.Sprite
        },
        headDesc: {
            default: null,
            type: cc.Label
        },
        headCost: {
            default: null,
            type: cc.Label
        }
    },
    
    setHeadLevel: function(level) {
        this.head.spriteFrame = this.heads[level];
        this.headDesc.string = head[level].desc;
        this.headCost.string = head[level].cost;
    },
    
    onLoad: function() {
        this.setHeadLevel(2);
    }
});
