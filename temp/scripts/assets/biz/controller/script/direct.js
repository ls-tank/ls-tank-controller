"use strict";
cc._RFpush(module, 'd84f583V+NNcaK876y7fzDp', 'direct');
// biz/controller/script/direct.js

cc.Class({
    "extends": cc.Component,

    properties: {
        follower: {
            "default": null,
            type: cc.Node
        }
    },

    onLoad: function onLoad() {
        var self = this;
        this.setTouchControl();
    },

    setTouchControl: function setTouchControl() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: self.onTouchBegin.bind(self),
            onTouchMoved: self.onTouchMove.bind(self),
            onTouchEnded: self.onTouchEnd.bind(self)
        }, self.node);
    },

    _getAngle: function _getAngle(pos) {
        this.angle = Math.atan2(pos.y, pos.x) / cc.PI * 180;
        return this.angle;
    },

    _getRadians: function _getRadians(pos) {
        this.radians = Math.atan2(pos.y, pos.x);
        return this.radians;
    },

    _getLength: function _getLength(pos) {
        return Math.sqrt(pos.x * pos.x + pos.y * pos.y);
    },

    onTouchBegin: function onTouchBegin(touch, event) {
        var target = this.follower;
        var touchLoc = touch.getLocation();
        var locInNode = this.node.convertToNodeSpaceAR(touchLoc);
        var tmpLength = this._getLength(locInNode);
        return tmpLength < 103;
    },

    onTouchMove: function onTouchMove(touch, event) {
        var target = this.follower;
        var touchLoc = touch.getLocation();
        var locInNode = this.node.convertToNodeSpaceAR(touchLoc);

        this._getRadians(locInNode);

        var tmpLength = this._getLength(locInNode);

        if (tmpLength < 103) {
            target.setPosition(locInNode);
        } else {
            var x = Math.cos(this.radians) * 103;
            var y = Math.sin(this.radians) * 103;
            target.setPosition(cc.p(x, y));
        }
    },

    onTouchEnd: function onTouchEnd() {
        var target = this.follower;
        target.setPosition({ x: 0, y: 0 });
    },

    update: function update(dt) {}
});

cc._RFpop();