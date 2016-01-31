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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL2Jpei9jb250cm9sbGVyL3NjcmlwdC9jb250cm9sbGVyLmpzIiwiYXNzZXRzL2Jpei9jb250cm9sbGVyL3NjcmlwdC9kaXJlY3Rpb25DdHJsLmpzIiwiYXNzZXRzL2Jpei9tYWluL3NjcmlwdC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjYy5fUkZwdXNoKG1vZHVsZSwgJ2YyZDkwcTQwd1pPMHIzM0plUWUxc0ZmJywgJ2NvbnRyb2xsZXInKTtcbi8vIGJpei9jb250cm9sbGVyL3NjcmlwdC9jb250cm9sbGVyLmpzXG5cbid1c2Ugc3RyaWN0JztcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICBiYWNrVG9NYWluOiBmdW5jdGlvbiBiYWNrVG9NYWluKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7fVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnOGRmZDExSS9wQkFEN1huTjRpSDl0aVYnLCAnZGlyZWN0aW9uQ3RybCcpO1xuLy8gYml6L2NvbnRyb2xsZXIvc2NyaXB0L2RpcmVjdGlvbkN0cmwuanNcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBmb2xsb3dlcjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIGZvbGxvd1NwZWVkOiAwXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNldFRvdWNoQ29udHJvbCgpO1xuICAgIH0sXG5cbiAgICBzZXRUb3VjaENvbnRyb2w6IGZ1bmN0aW9uIHNldFRvdWNoQ29udHJvbCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuVE9VQ0hfT05FX0JZX09ORSxcbiAgICAgICAgICAgIG9uVG91Y2hCZWdhbjogc2VsZi5vblRvdWNoQmVnYW4sXG4gICAgICAgICAgICBvblRvdWNoTW92ZWQ6IHNlbGYub25Ub3VjaE1vdmVkLFxuICAgICAgICAgICAgb25Ub3VjaEVuZGVkOiBzZWxmLm9uVG91Y2hFbmRlZFxuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuICAgIH0sXG5cbiAgICBfX2dldEFuZ2xlOiBmdW5jdGlvbiBfX2dldEFuZ2xlKHBvcykge1xuICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5hdGFuMihwb3MueSwgcG9zLngpICogNTcuMjk1Nzc5NTE7XG4gICAgICAgIHJldHVybiB0aGlzLmFuZ2xlO1xuICAgIH0sXG5cbiAgICBfX2dldFJhZGlhbnM6IGZ1bmN0aW9uIF9fZ2V0UmFkaWFucyhwb3MpIHtcbiAgICAgICAgdGhpcy5yYWRpYW5zID0gY2MuUEkgLyAxODAgKiB0aGlzLl9nZXRBbmdsZShwb3MpO1xuICAgICAgICByZXR1cm4gdGhpcy5yYWRpYW5zO1xuICAgIH0sXG5cbiAgICBfX2dldExlbmd0aDogZnVuY3Rpb24gX19nZXRMZW5ndGgocG9zKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQocG9zLnggKiBwb3MueCArIHBvcy55ICogcG9zLnkpO1xuICAgIH0sXG5cbiAgICBvblRvdWNoQmVnYW46IGZ1bmN0aW9uIG9uVG91Y2hCZWdhbih0b3VjaCwgZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIG9uVG91Y2hNb3ZlZDogZnVuY3Rpb24gb25Ub3VjaE1vdmVkKHRvdWNoLCBldmVudCkge30sXG5cbiAgICBvblRvdWNoRW5kZWQ6IGZ1bmN0aW9uIG9uVG91Y2hFbmRlZCh0b3VjaCwgZXZlbnQpIHt9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHt9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiY2MuX1JGcHVzaChtb2R1bGUsICc0Nzg4ZVZNU0ZoTDJxZ0NnVE4xcnB1aicsICdtYWluJyk7XG4vLyBiaXovbWFpbi9zY3JpcHQvbWFpbi5qc1xuXG4ndXNlIHN0cmljdCc7XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgZW50ZXJBY3Rpb246IGZ1bmN0aW9uIGVudGVyQWN0aW9uKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2NvbnRyb2xsZXInKTtcbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7fVxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
