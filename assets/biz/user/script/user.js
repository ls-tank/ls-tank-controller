function User(user) {}

User.prototype.init = function(user) {
    this._id = user.Id;
    this.nickname = user.Nickname;
    
    this.diamond = user.Diamond;
    this.kill = user.Kill;
    this.dead = user.Dead;
    this.tankbody = user.TankBody;
    this.tankhead = user.TankHead;
    this.tankwheel = user.TankWheel;
};

User.prototype.cost = function(type, cost) {
    this[type]++;
    this.diamond -= cost;
};

User.prototype.uncost = function(type, cost) {
    this[type]--;
    this.diamond += cost;
};

User.prototype.win = function(diamond) {
    this.kill++;
    this.diamond += diamond;
};

User.prototype.lose = function() {
    this.dead++;    
};

module.exports = new User();