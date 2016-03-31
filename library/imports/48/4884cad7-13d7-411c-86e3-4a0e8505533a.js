var body = require('body');
var user = require('user');

cc.Class({
    'extends': cc.Component,

    properties: {
        bodies: {
            'default': [],
            type: cc.SpriteFrame
        },
        body: {
            'default': null,
            type: cc.Sprite
        },
        bodyDesc: {
            'default': null,
            type: cc.Label
        },
        bodyCost: {
            'default': null,
            type: cc.Label
        }
    },

    setBodyLevel: function setBodyLevel(level) {
        level = level || 0;
        this.body.spriteFrame = this.bodies[level];
        this.bodyDesc.string = body[level].desc;
        this.bodyCost.string = body[level].cost;
    },

    onLoad: function onLoad() {
        this.setBodyLevel(user.tankBody);
    }
});