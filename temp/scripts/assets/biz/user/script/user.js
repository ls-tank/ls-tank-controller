"use strict";
cc._RFpush(module, '43c66988rFH6b+xxyWSsbTi', 'user');
// biz/user/script/user.js

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

cc._RFpop();