'use strict';

var bizSocket = require('../../socket/biz-socket');

cc.Class({
    'extends': cc.Component,

    properties: {
        follower: {
            'default': null,
            type: cc.Node
        },
        followSpeed: 0,
        direction: 'STOP'
    },

    onLoad: function onLoad() {
        var self = this;
        this.setTouchControl();
        this.node.on('direction', function (event) {
            if (self.direction !== event.detail.direction) {
                self.direction = event.detail.direction;
                bizSocket.emit('c-direction', {
                    direction: self.direction
                });
            }
        });
    },

    setTouchControl: function setTouchControl() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: self.onTouchBegan.bind(self),
            onTouchMoved: self.onTouchMoved.bind(self),
            onTouchEnded: self.onTouchEnded.bind(self)
        }, self.node);
    },

    __getAngle: function __getAngle(pos) {
        this.angle = Math.atan2(pos.y, pos.x) / cc.PI * 180;
        return this.angle;
    },

    __getRadians: function __getRadians(pos) {
        this.radians = Math.atan2(pos.y, pos.x);
        return this.radians;
    },

    __getLength: function __getLength(pos) {
        return Math.sqrt(pos.x * pos.x + pos.y * pos.y);
    },

    onUpdateDirection: function onUpdateDirection(length) {
        var direction;

        if (length <= 10) {
            return this.node.emit('direction', {
                direction: 'STOP'
            });
        }

        if (this.angle < 0) this.angle = this.angle + 360;

        if (this.angle >= 0 && this.angle <= 45 || this.angle > 315 && this.angle <= 360) {
            direction = 'RIGHT';
        } else if (this.angle > 45 && this.angle <= 135) {
            direction = 'UP';
        } else if (this.angle > 135 && this.angle <= 225) {
            direction = 'LEFT';
        } else if (this.angle > 225 && this.angle <= 315) {
            direction = 'DOWN';
        }

        return this.node.emit('direction', {
            direction: direction
        });
    },

    onStop: function onStop() {
        this.node.emit('direction', {
            direction: 'STOP'
        });
    },

    onTouchBegan: function onTouchBegan(touch, event) {
        var target = this.follower;
        var touchLoc = touch.getLocation();

        var locInNode = this.node.convertToNodeSpaceAR(touchLoc);
        var tmpLength = this.__getLength(locInNode);

        return tmpLength < 103;
    },

    onTouchMoved: function onTouchMoved(touch, event) {
        var target = this.follower;
        var touchLoc = touch.getLocation();
        var locInNode = this.node.convertToNodeSpaceAR(touchLoc);
        this.__getAngle(locInNode);
        this.__getRadians(locInNode);
        var tmpLength = this.__getLength(locInNode);

        if (tmpLength < 103) {
            target.setPosition(locInNode);
        } else {
            var x = Math.cos(this.radians) * 103;
            var y = Math.sin(this.radians) * 103;
            target.setPosition(cc.p(x, y));
        }

        this.onUpdateDirection(tmpLength);
    },

    onTouchEnded: function onTouchEnded(touch, event) {
        var target = this.follower;
        target.setPosition({ x: 0, y: 0 });
        this.onStop();
    },

    update: function update(dt) {}
});