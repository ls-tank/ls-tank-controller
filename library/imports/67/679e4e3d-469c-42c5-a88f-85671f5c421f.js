var qwest = require('qwest');
var user = require('user');
var api = require('api');

var btnAction = {
    show: cc.moveTo(0.5, cc.p(540, 280)).easing(cc.easeIn(3.0)),
    hide: cc.moveTo(0.5, cc.p(540, 425)).easing(cc.easeIn(3.0))
};

var loginGroupAction = {
    show: cc.moveTo(0.5, cc.p(0, -150)).easing(cc.easeIn(3.0)),
    hide: cc.moveTo(0.5, cc.p(0, -500)).easing(cc.easeIn(3.0))
};

var registerGroupAction = {
    show: cc.moveTo(0.5, cc.p(0, 0)).easing(cc.easeIn(3.0)),
    hide: cc.moveTo(0.5, cc.p(0, -660)).easing(cc.easeIn(3.0))
};

cc.Class({
    'extends': cc.Component,

    properties: {
        username: {
            'default': null,
            type: cc.EditBox
        },

        password: {
            'default': null,
            type: cc.EditBox
        },

        loginBtn: {
            'default': null,
            type: cc.Button
        },

        registerBtnBox: {
            'default': null,
            type: cc.Node
        },

        cancelBtnBox: {
            'default': null,
            type: cc.Node
        },

        loginGroup: {
            'default': null,
            type: cc.Node
        },

        registerGroup: {
            'default': null,
            type: cc.Node
        }
    },

    onLoginBtnEnter: function onLoginBtnEnter() {
        api.login({
            name: this.username.string,
            password: this.password.string
        }).then(function (data) {
            user.init(data.data);
            cc.director.loadScene('Main');
        }, function (err) {
            alert(err.data);
        });
    },

    onCancelBtnToggle: function onCancelBtnToggle() {
        this.registerBtnBox.runAction(btnAction.show);
        this.cancelBtnBox.runAction(btnAction.hide);
        this.loginGroup.runAction(loginGroupAction.show);
        this.registerGroup.runAction(registerGroupAction.hide);
    },

    onRegisterBtnToggle: function onRegisterBtnToggle() {
        this.registerBtnBox.runAction(btnAction.hide);
        this.cancelBtnBox.runAction(btnAction.show);
        this.loginGroup.runAction(loginGroupAction.hide);
        this.registerGroup.runAction(registerGroupAction.show);
    },

    onLoad: function onLoad() {},

    update: function update(dt) {}
});