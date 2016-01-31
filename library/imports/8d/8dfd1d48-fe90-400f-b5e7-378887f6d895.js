"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        follower: {
            "default": null,
            type: cc.Node
        },
        followSpeed: 0
    },

    onLoad: function onLoad() {
        this.setTouchControl();
    },

    setTouchControl: function setTouchControl() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: self.onTouchBegan,
            onTouchMoved: self.onTouchMoved,
            onTouchEnded: self.onTouchEnded
        }, self.node);
    },

    __getAngle: function __getAngle(pos) {
        this.angle = Math.atan2(pos.y, pos.x) * 57.29577951;
        return this.angle;
    },

    __getRadians: function __getRadians(pos) {
        this.radians = cc.PI / 180 * this._getAngle(pos);
        return this.radians;
    },

    __getLength: function __getLength(pos) {
        return Math.sqrt(pos.x * pos.x + pos.y * pos.y);
    },

    onTouchBegan: function onTouchBegan(touch, event) {
        return true;
    },

    onTouchMoved: function onTouchMoved(touch, event) {},

    onTouchEnded: function onTouchEnded(touch, event) {},

    update: function update(dt) {}
});