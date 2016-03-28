var cloudAction = cc.fadeOut(1.0);

var btnAction = cc.sequence(cc.scaleTo(0.25, 0.8, 1.4).easing(cc.easeInOut(3.0)), cc.scaleTo(0.25, 1, 1).easing(cc.easeInOut(3.0)));

cc.Class({
    "extends": cc.Component,

    properties: {
        toPlayBtn: {
            "default": null,
            type: cc.Node
        },

        toEquipBtn: {
            "default": null,
            type: cc.Node
        },

        cloudMask: {
            "default": null,
            type: cc.Sprite
        }
    },

    onLoad: function onLoad() {
        var self = this;
        this.cloudMask.node.runAction(cloudAction);

        // setTimeout(function() {
        //     self.toPlayBtn.runAction(btnAction);
        // }, 500);
        // setTimeout(function() {
        //     self.toEquipBtn.runAction(btnAction);
        // }, 1000);
    },

    update: function update(dt) {}
});