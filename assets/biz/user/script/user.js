function User(user) {}

User.prototype.init = function(user) {
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

module.exports = new User();