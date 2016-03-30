function User(user) {}

User.prototype.init = function (user) {
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

module.exports = new User();