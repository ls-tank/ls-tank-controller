cc.Class({
    extends: cc.Component,

    properties: {
        follower: {
            default: null,
            type: cc.Node
        },
        followSpeed: 0
    },

    onLoad: function () {
        this.setTouchControl();
    },
    
    setTouchControl: function () {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: self.onTouchBegan,
            onTouchMoved: self.onTouchMoved,
            onTouchEnded: self.onTouchEnded
        }, self.node);
    },
    
    __getAngle: function (pos) {
        this.angle = Math.atan2(pos.y, pos.x) * 57.29577951;
        return this.angle;
    },
    
    __getRadians: function (pos) {
        this.radians = cc.PI / 180 * this._getAngle(pos);
        return this.radians;
    },
    
    __getLength: function (pos) {
        return Math.sqrt(pos.x * pos.x + pos.y * pos.y);
    },
    
    onTouchBegan: function (touch, event) {
        return true;
    },
    
    onTouchMoved: function (touch, event) {
    },
    
    onTouchEnded: function (touch, event) {
        
    },
    
    update: function (dt) {
    },
});
