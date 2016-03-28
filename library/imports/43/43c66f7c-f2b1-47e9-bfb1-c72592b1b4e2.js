function User(user) {}

User.prototype.init = function (user) {
    this.Id = user.Id;
    this.Name = user.Name;
    this.Diamond = user.Diamond;
    this.Kill = user.Kill;
    this.TankBody = user.TankBody;
    this.TankHead = user.TankHead;
    this.TankWheel = user.TankWheel;
};

module.exports = new User();