var boxShow;
var bottomShow;

cc.Class({
    extends: cc.Component,

    properties: {
        top: {
            default: null,
            type: cc.Node
        },
        bottom: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function() {
        var self = this;
        this.bottom.runAction(cc.moveTo(0.5, 0, 0));
        setTimeout(function() {
            self.top.runAction(cc.moveTo(0.5, 0, 0));    
        }, 250);
        
    },
    
    onBackHandler: function() {
        cc.director.loadScene('Main');
    }
});
