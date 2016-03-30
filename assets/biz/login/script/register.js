var api = require('api');
var user = require('user');

cc.Class({
    extends: cc.Component,

    properties: {
        username: {
            default: null,
            type: cc.EditBox,
        },
        
        password: {
            default: null,
            type: cc.EditBox,
        },
        
        nickname: {
            default: null,
            type: cc.EditBox
        }
    },
    
    onRegisterBtnEnter: function() {
        api.register({
            username: this.username.string, 
            password: this.password.string,
            nickname: this.nickname.string
        }).then(function(data) {
            user.init(data.data);
            console.log(user);
            cc.director.loadScene('Main');
        }, function(err) {
            alert(err.data);
        });
    },
    
    onLoad: function() {

    },

});
