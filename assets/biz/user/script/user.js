function User(user) {
    this.tankBody = 0;
    this.tankHead = 0;
    this.tankWheel = 0;
    this.diamond = 10;
    this.kill = 10;
    this.dead = 10;
    this.nickname = '⚡Flash⚡️';
}

User.prototype.init = function(user) {
    this.id = user.Id;
    this.username = user.Username;
    this.nickname = user.Nickname;
    this.diamond = user.Diamond;
    this.kill = user.Kill;
    this.dead = user.Dead;
    this.tankBody = user.TankBody;
    this.tankHead = user.TankHead;
    this.tankWheel = user.TankWheel;
};

User.prototype.cost = function(type, cost) {
    this[type]++;
    this.diamond -= cost;
};

module.exports = new User();