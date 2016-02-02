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
            onTouchBegan: self.onTouchBegan.bind(self),
            onTouchMoved: self.onTouchMoved.bind(self),
            onTouchEnded: self.onTouchEnded.bind(self)
        }, self.node);
    },
    
    __getAngle: function (pos) {
        this.angle = Math.atan2(pos.y, pos.x) * 57.29577951; // todo
        return this.angle;
    },
    
    __getRadians: function (pos) {
        this.radians = cc.PI / 180 * this.__getAngle(pos);
        return this.radians;
    },
    
    __getLength: function (pos) {
        return Math.sqrt(pos.x * pos.x + pos.y * pos.y);
    },
    
    onUpdateDirection : function (position) {
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
    
    onTouchBegan: function (touch, event) {
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
    
    onTouchMoved: function (touch, event) {
        var target = this.follower;
        var touchLoc = touch.getLocation();
        
        var locInNode = target.convertToNodeSpace(touchLoc);
        
        this.__getAngle(locInNode);
        this.__getRadians(locInNode);
        this.onUpdateDirection(locInNode);
        console.log(this.direction);
        
        
    },
    
    onTouchEnded: function (touch, event) {
        
    },
    
    update: function (dt) {
    },
});
