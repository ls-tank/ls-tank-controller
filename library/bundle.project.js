require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"controller":[function(require,module,exports){
cc._RFpush(module, 'f2d90q40wZO0r33JeQe1sFf', 'controller');
// biz/controller/script/controller.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {},

    backToMain: function backToMain() {
        cc.director.loadScene('main');
    },

    onLoad: function onLoad() {},

    update: function update(dt) {}
});

cc._RFpop();
},{}],"directionCtrl":[function(require,module,exports){
cc._RFpush(module, '8dfd11I/pBAD7XnN4iH9tiV', 'directionCtrl');
// biz/controller/script/directionCtrl.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        follower: {
            'default': null,
            type: cc.Node
        },
        followSpeed: 0
    },

    onLoad: function onLoad() {
        this.setTouchControl();

        this.node.on('direction', function (event) {
            console.log(event.detail.direction);
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

    onUpdateDirection: function onUpdateDirection(position) {
        if (this.angle < 0) this.angle = this.angle + 360;

        if (this.angle > -45 && this.angle <= 45) this.direction = 'RIGHT';
        if (this.angle > 45 && this.angle <= 135) this.direction = 'UP';
        if (this.angle > 135 && this.angle <= 225) this.direction = 'LEFT';
        if (this.angle > 225 && this.angle <= 315) this.direction = 'DOWN';

        this.node.emit('direction', {
            direction: this.direction
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
        this.onUpdateDirection(locInNode);

        var tmpLength = this.__getLength(locInNode);

        if (tmpLength < 103) {
            target.setPosition(locInNode);
        } else {
            var x = Math.cos(this.radians) * 103;
            var y = Math.sin(this.radians) * 103;
            target.setPosition(cc.p(x, y));
        }
    },

    onTouchEnded: function onTouchEnded(touch, event) {
        var target = this.follower;
        target.setPosition({ x: 0, y: 0 });
    },

    update: function update(dt) {}
});

cc._RFpop();
},{}],"main":[function(require,module,exports){
cc._RFpush(module, '4788eVMSFhL2qgCgTN1rpuj', 'main');
// biz/main/script/main.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {},

    enterAction: function enterAction() {
        cc.director.loadScene('controller');
    },

    onLoad: function onLoad() {},

    update: function update(dt) {}
});

cc._RFpop();
},{}]},{},["main","directionCtrl","controller"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL2Jpei9jb250cm9sbGVyL3NjcmlwdC9jb250cm9sbGVyLmpzIiwiYXNzZXRzL2Jpei9jb250cm9sbGVyL3NjcmlwdC9kaXJlY3Rpb25DdHJsLmpzIiwiYXNzZXRzL2Jpei9tYWluL3NjcmlwdC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2MuX1JGcHVzaChtb2R1bGUsICdmMmQ5MHE0MHdaTzByMzNKZVFlMXNGZicsICdjb250cm9sbGVyJyk7XG4vLyBiaXovY29udHJvbGxlci9zY3JpcHQvY29udHJvbGxlci5qc1xuXG4ndXNlIHN0cmljdCc7XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgYmFja1RvTWFpbjogZnVuY3Rpb24gYmFja1RvTWFpbigpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYWluJyk7XG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge31cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJzhkZmQxMUkvcEJBRDdYbk40aUg5dGlWJywgJ2RpcmVjdGlvbkN0cmwnKTtcbi8vIGJpei9jb250cm9sbGVyL3NjcmlwdC9kaXJlY3Rpb25DdHJsLmpzXG5cbid1c2Ugc3RyaWN0JztcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBmb2xsb3dlcjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBmb2xsb3dTcGVlZDogMFxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zZXRUb3VjaENvbnRyb2woKTtcblxuICAgICAgICB0aGlzLm5vZGUub24oJ2RpcmVjdGlvbicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLmRpcmVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzZXRUb3VjaENvbnRyb2w6IGZ1bmN0aW9uIHNldFRvdWNoQ29udHJvbCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuVE9VQ0hfT05FX0JZX09ORSxcbiAgICAgICAgICAgIG9uVG91Y2hCZWdhbjogc2VsZi5vblRvdWNoQmVnYW4uYmluZChzZWxmKSxcbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlZDogc2VsZi5vblRvdWNoTW92ZWQuYmluZChzZWxmKSxcbiAgICAgICAgICAgIG9uVG91Y2hFbmRlZDogc2VsZi5vblRvdWNoRW5kZWQuYmluZChzZWxmKVxuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuICAgIH0sXG5cbiAgICBfX2dldEFuZ2xlOiBmdW5jdGlvbiBfX2dldEFuZ2xlKHBvcykge1xuICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5hdGFuMihwb3MueSwgcG9zLngpIC8gY2MuUEkgKiAxODA7XG4gICAgICAgIHJldHVybiB0aGlzLmFuZ2xlO1xuICAgIH0sXG5cbiAgICBfX2dldFJhZGlhbnM6IGZ1bmN0aW9uIF9fZ2V0UmFkaWFucyhwb3MpIHtcbiAgICAgICAgdGhpcy5yYWRpYW5zID0gTWF0aC5hdGFuMihwb3MueSwgcG9zLngpO1xuICAgICAgICByZXR1cm4gdGhpcy5yYWRpYW5zO1xuICAgIH0sXG5cbiAgICBfX2dldExlbmd0aDogZnVuY3Rpb24gX19nZXRMZW5ndGgocG9zKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQocG9zLnggKiBwb3MueCArIHBvcy55ICogcG9zLnkpO1xuICAgIH0sXG5cbiAgICBvblVwZGF0ZURpcmVjdGlvbjogZnVuY3Rpb24gb25VcGRhdGVEaXJlY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPCAwKSB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArIDM2MDtcblxuICAgICAgICBpZiAodGhpcy5hbmdsZSA+IC00NSAmJiB0aGlzLmFuZ2xlIDw9IDQ1KSB0aGlzLmRpcmVjdGlvbiA9ICdSSUdIVCc7XG4gICAgICAgIGlmICh0aGlzLmFuZ2xlID4gNDUgJiYgdGhpcy5hbmdsZSA8PSAxMzUpIHRoaXMuZGlyZWN0aW9uID0gJ1VQJztcbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPiAxMzUgJiYgdGhpcy5hbmdsZSA8PSAyMjUpIHRoaXMuZGlyZWN0aW9uID0gJ0xFRlQnO1xuICAgICAgICBpZiAodGhpcy5hbmdsZSA+IDIyNSAmJiB0aGlzLmFuZ2xlIDw9IDMxNSkgdGhpcy5kaXJlY3Rpb24gPSAnRE9XTic7XG5cbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ2RpcmVjdGlvbicsIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb25cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uVG91Y2hCZWdhbjogZnVuY3Rpb24gb25Ub3VjaEJlZ2FuKHRvdWNoLCBldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5mb2xsb3dlcjtcbiAgICAgICAgdmFyIHRvdWNoTG9jID0gdG91Y2guZ2V0TG9jYXRpb24oKTtcblxuICAgICAgICB2YXIgbG9jSW5Ob2RlID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoTG9jKTtcbiAgICAgICAgdmFyIHRtcExlbmd0aCA9IHRoaXMuX19nZXRMZW5ndGgobG9jSW5Ob2RlKTtcblxuICAgICAgICByZXR1cm4gdG1wTGVuZ3RoIDwgMTAzO1xuICAgIH0sXG5cbiAgICBvblRvdWNoTW92ZWQ6IGZ1bmN0aW9uIG9uVG91Y2hNb3ZlZCh0b3VjaCwgZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuZm9sbG93ZXI7XG4gICAgICAgIHZhciB0b3VjaExvYyA9IHRvdWNoLmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgdmFyIGxvY0luTm9kZSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaExvYyk7XG4gICAgICAgIHRoaXMuX19nZXRBbmdsZShsb2NJbk5vZGUpO1xuICAgICAgICB0aGlzLl9fZ2V0UmFkaWFucyhsb2NJbk5vZGUpO1xuICAgICAgICB0aGlzLm9uVXBkYXRlRGlyZWN0aW9uKGxvY0luTm9kZSk7XG5cbiAgICAgICAgdmFyIHRtcExlbmd0aCA9IHRoaXMuX19nZXRMZW5ndGgobG9jSW5Ob2RlKTtcblxuICAgICAgICBpZiAodG1wTGVuZ3RoIDwgMTAzKSB7XG4gICAgICAgICAgICB0YXJnZXQuc2V0UG9zaXRpb24obG9jSW5Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4ID0gTWF0aC5jb3ModGhpcy5yYWRpYW5zKSAqIDEwMztcbiAgICAgICAgICAgIHZhciB5ID0gTWF0aC5zaW4odGhpcy5yYWRpYW5zKSAqIDEwMztcbiAgICAgICAgICAgIHRhcmdldC5zZXRQb3NpdGlvbihjYy5wKHgsIHkpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvblRvdWNoRW5kZWQ6IGZ1bmN0aW9uIG9uVG91Y2hFbmRlZCh0b3VjaCwgZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuZm9sbG93ZXI7XG4gICAgICAgIHRhcmdldC5zZXRQb3NpdGlvbih7IHg6IDAsIHk6IDAgfSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7fVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnNDc4OGVWTVNGaEwycWdDZ1ROMXJwdWonLCAnbWFpbicpO1xuLy8gYml6L21haW4vc2NyaXB0L21haW4uanNcblxuJ3VzZSBzdHJpY3QnO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIGVudGVyQWN0aW9uOiBmdW5jdGlvbiBlbnRlckFjdGlvbigpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdjb250cm9sbGVyJyk7XG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge31cbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
