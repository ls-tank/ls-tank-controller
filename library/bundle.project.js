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
            onTouchBegan: self.onTouchBegan.bind(self),
            onTouchMoved: self.onTouchMoved.bind(self),
            onTouchEnded: self.onTouchEnded.bind(self)
        }, self.node);
    },

    __getAngle: function __getAngle(pos) {
        this.angle = Math.atan2(pos.y, pos.x) * 57.29577951; // todo
        return this.angle;
    },

    __getRadians: function __getRadians(pos) {
        this.radians = cc.PI / 180 * this.__getAngle(pos);
        return this.radians;
    },

    __getLength: function __getLength(pos) {
        return Math.sqrt(pos.x * pos.x + pos.y * pos.y);
    },

    onUpdateDirection: function onUpdateDirection(position) {
        // if(this.angle > -22.5 && this.angle < 22.5){
        //     this.direction = 'D_RIGHT';
        // }
        // else if(this.angle > 22.5 && this.angle < 67.5){
        //     this.direction = 'D_RIGHT_UP';
        // }
        // else if(this.angle > 67.5 && this.angle < 112.5){
        //     this.direction = 'D_UP';
        // }
        // else if(this.angle > 112.5 && this.angle < 157.5){
        //     this.direction = 'D_LEFT_UP';
        // }
        // else if((this.angle > 157.5 && this.angle < 180)||(this.angle < -157.5 && this.angle > -180)){
        //     this.direction = 'D_LEFT';
        // }
        // else if(this.angle < -112.5 && this.angle > -157.5){
        //     this.direction = 'D_LEFT_DOWN';
        // }
        // else if(this.angle < -67.5 && this.angle > -112.5){
        //     this.direction = 'D_DOWN';
        // }
        // else if(this.angle < -22.5 && this.angle > -67.5){
        //     this.direction = 'D_RIGHT_DOWN';
        // }
    },

    onTouchBegan: function onTouchBegan(touch, event) {
        var target = this.follower;
        var touchLoc = touch.getLocation();

        var locInNode = target.convertToNodeSpace(touchLoc);

        var size = target.parent.getContentSize();
        size.width = size.width * target.parent.scale;
        size.height = size.height * target.parent.scale;

        var rect = cc.rect(0, 0, size.width, size.height);
        if (!cc.rectContainsPoint(rect, locInNode)) {
            return false;
        }

        return true;
    },

    onTouchMoved: function onTouchMoved(touch, event) {
        var target = this.follower;
        var touchLoc = touch.getLocation();

        var locInNode = target.convertToNodeSpace(touchLoc);

        this.__getAngle(locInNode);
        this.__getRadians(locInNode);
        this.onUpdateDirection(locInNode);
        console.log(this.direction);
    },

    onTouchEnded: function onTouchEnded(touch, event) {},

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL2Jpei9jb250cm9sbGVyL3NjcmlwdC9jb250cm9sbGVyLmpzIiwiYXNzZXRzL2Jpei9jb250cm9sbGVyL3NjcmlwdC9kaXJlY3Rpb25DdHJsLmpzIiwiYXNzZXRzL2Jpei9tYWluL3NjcmlwdC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNjLl9SRnB1c2gobW9kdWxlLCAnZjJkOTBxNDB3Wk8wcjMzSmVRZTFzRmYnLCAnY29udHJvbGxlcicpO1xuLy8gYml6L2NvbnRyb2xsZXIvc2NyaXB0L2NvbnRyb2xsZXIuanNcblxuJ3VzZSBzdHJpY3QnO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIGJhY2tUb01haW46IGZ1bmN0aW9uIGJhY2tUb01haW4oKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHt9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiY2MuX1JGcHVzaChtb2R1bGUsICc4ZGZkMTFJL3BCQUQ3WG5ONGlIOXRpVicsICdkaXJlY3Rpb25DdHJsJyk7XG4vLyBiaXovY29udHJvbGxlci9zY3JpcHQvZGlyZWN0aW9uQ3RybC5qc1xuXG5cInVzZSBzdHJpY3RcIjtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGZvbGxvd2VyOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgZm9sbG93U3BlZWQ6IDBcbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG5cbiAgICAgICAgdGhpcy5zZXRUb3VjaENvbnRyb2woKTtcbiAgICB9LFxuXG4gICAgc2V0VG91Y2hDb250cm9sOiBmdW5jdGlvbiBzZXRUb3VjaENvbnRyb2woKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLlRPVUNIX09ORV9CWV9PTkUsXG4gICAgICAgICAgICBvblRvdWNoQmVnYW46IHNlbGYub25Ub3VjaEJlZ2FuLmJpbmQoc2VsZiksXG4gICAgICAgICAgICBvblRvdWNoTW92ZWQ6IHNlbGYub25Ub3VjaE1vdmVkLmJpbmQoc2VsZiksXG4gICAgICAgICAgICBvblRvdWNoRW5kZWQ6IHNlbGYub25Ub3VjaEVuZGVkLmJpbmQoc2VsZilcbiAgICAgICAgfSwgc2VsZi5ub2RlKTtcbiAgICB9LFxuXG4gICAgX19nZXRBbmdsZTogZnVuY3Rpb24gX19nZXRBbmdsZShwb3MpIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguYXRhbjIocG9zLnksIHBvcy54KSAqIDU3LjI5NTc3OTUxOyAvLyB0b2RvXG4gICAgICAgIHJldHVybiB0aGlzLmFuZ2xlO1xuICAgIH0sXG5cbiAgICBfX2dldFJhZGlhbnM6IGZ1bmN0aW9uIF9fZ2V0UmFkaWFucyhwb3MpIHtcbiAgICAgICAgdGhpcy5yYWRpYW5zID0gY2MuUEkgLyAxODAgKiB0aGlzLl9fZ2V0QW5nbGUocG9zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFkaWFucztcbiAgICB9LFxuXG4gICAgX19nZXRMZW5ndGg6IGZ1bmN0aW9uIF9fZ2V0TGVuZ3RoKHBvcykge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHBvcy54ICogcG9zLnggKyBwb3MueSAqIHBvcy55KTtcbiAgICB9LFxuXG4gICAgb25VcGRhdGVEaXJlY3Rpb246IGZ1bmN0aW9uIG9uVXBkYXRlRGlyZWN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIC8vIGlmKHRoaXMuYW5nbGUgPiAtMjIuNSAmJiB0aGlzLmFuZ2xlIDwgMjIuNSl7XG4gICAgICAgIC8vICAgICB0aGlzLmRpcmVjdGlvbiA9ICdEX1JJR0hUJztcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIGlmKHRoaXMuYW5nbGUgPiAyMi41ICYmIHRoaXMuYW5nbGUgPCA2Ny41KXtcbiAgICAgICAgLy8gICAgIHRoaXMuZGlyZWN0aW9uID0gJ0RfUklHSFRfVVAnO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2UgaWYodGhpcy5hbmdsZSA+IDY3LjUgJiYgdGhpcy5hbmdsZSA8IDExMi41KXtcbiAgICAgICAgLy8gICAgIHRoaXMuZGlyZWN0aW9uID0gJ0RfVVAnO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2UgaWYodGhpcy5hbmdsZSA+IDExMi41ICYmIHRoaXMuYW5nbGUgPCAxNTcuNSl7XG4gICAgICAgIC8vICAgICB0aGlzLmRpcmVjdGlvbiA9ICdEX0xFRlRfVVAnO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2UgaWYoKHRoaXMuYW5nbGUgPiAxNTcuNSAmJiB0aGlzLmFuZ2xlIDwgMTgwKXx8KHRoaXMuYW5nbGUgPCAtMTU3LjUgJiYgdGhpcy5hbmdsZSA+IC0xODApKXtcbiAgICAgICAgLy8gICAgIHRoaXMuZGlyZWN0aW9uID0gJ0RfTEVGVCc7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSBpZih0aGlzLmFuZ2xlIDwgLTExMi41ICYmIHRoaXMuYW5nbGUgPiAtMTU3LjUpe1xuICAgICAgICAvLyAgICAgdGhpcy5kaXJlY3Rpb24gPSAnRF9MRUZUX0RPV04nO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2UgaWYodGhpcy5hbmdsZSA8IC02Ny41ICYmIHRoaXMuYW5nbGUgPiAtMTEyLjUpe1xuICAgICAgICAvLyAgICAgdGhpcy5kaXJlY3Rpb24gPSAnRF9ET1dOJztcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIGlmKHRoaXMuYW5nbGUgPCAtMjIuNSAmJiB0aGlzLmFuZ2xlID4gLTY3LjUpe1xuICAgICAgICAvLyAgICAgdGhpcy5kaXJlY3Rpb24gPSAnRF9SSUdIVF9ET1dOJztcbiAgICAgICAgLy8gfVxuICAgIH0sXG5cbiAgICBvblRvdWNoQmVnYW46IGZ1bmN0aW9uIG9uVG91Y2hCZWdhbih0b3VjaCwgZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuZm9sbG93ZXI7XG4gICAgICAgIHZhciB0b3VjaExvYyA9IHRvdWNoLmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgdmFyIGxvY0luTm9kZSA9IHRhcmdldC5jb252ZXJ0VG9Ob2RlU3BhY2UodG91Y2hMb2MpO1xuXG4gICAgICAgIHZhciBzaXplID0gdGFyZ2V0LnBhcmVudC5nZXRDb250ZW50U2l6ZSgpO1xuICAgICAgICBzaXplLndpZHRoID0gc2l6ZS53aWR0aCAqIHRhcmdldC5wYXJlbnQuc2NhbGU7XG4gICAgICAgIHNpemUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKiB0YXJnZXQucGFyZW50LnNjYWxlO1xuXG4gICAgICAgIHZhciByZWN0ID0gY2MucmVjdCgwLCAwLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gICAgICAgIGlmICghY2MucmVjdENvbnRhaW5zUG9pbnQocmVjdCwgbG9jSW5Ob2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIG9uVG91Y2hNb3ZlZDogZnVuY3Rpb24gb25Ub3VjaE1vdmVkKHRvdWNoLCBldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5mb2xsb3dlcjtcbiAgICAgICAgdmFyIHRvdWNoTG9jID0gdG91Y2guZ2V0TG9jYXRpb24oKTtcblxuICAgICAgICB2YXIgbG9jSW5Ob2RlID0gdGFyZ2V0LmNvbnZlcnRUb05vZGVTcGFjZSh0b3VjaExvYyk7XG5cbiAgICAgICAgdGhpcy5fX2dldEFuZ2xlKGxvY0luTm9kZSk7XG4gICAgICAgIHRoaXMuX19nZXRSYWRpYW5zKGxvY0luTm9kZSk7XG4gICAgICAgIHRoaXMub25VcGRhdGVEaXJlY3Rpb24obG9jSW5Ob2RlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kaXJlY3Rpb24pO1xuICAgIH0sXG5cbiAgICBvblRvdWNoRW5kZWQ6IGZ1bmN0aW9uIG9uVG91Y2hFbmRlZCh0b3VjaCwgZXZlbnQpIHt9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHt9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiY2MuX1JGcHVzaChtb2R1bGUsICc0Nzg4ZVZNU0ZoTDJxZ0NnVE4xcnB1aicsICdtYWluJyk7XG4vLyBiaXovbWFpbi9zY3JpcHQvbWFpbi5qc1xuXG4ndXNlIHN0cmljdCc7XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgZW50ZXJBY3Rpb246IGZ1bmN0aW9uIGVudGVyQWN0aW9uKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2NvbnRyb2xsZXInKTtcbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7fVxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
