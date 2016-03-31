var body = require('body');
var user = require('user');

var upgradeAction = cc.spawn(cc.sequence(cc.scaleTo(0.5, 2), cc.scaleTo(0.5, 0)), cc.rotateBy(1, 180)).easing(cc.easeIn(2.0));

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
        },
        btn: {
            'default': null,
            type: cc.Button
        },
        bg: {
            'default': null,
            type: cc.Sprite
        }
    },

    setBodyLevel: function setBodyLevel(level) {
        level = level || 0;
        this.body.spriteFrame = this.bodies[level];
        this.bodyDesc.string = body[level].desc;
        this.bodyCost.string = body[level].cost;
    },

    upgrade: function upgrade() {
        var self = this;
        this.bg.node.runAction(upgradeAction);
        user.tankBody++;
        setTimeout(function () {
            self.setBodyLevel(user.tankBody);
        }, 1000);

        if (user.tankBody === 5) this.btn.interactable = false;
    },

    onLoad: function onLoad() {
        this.setBodyLevel(user.tankBody);
    }
});