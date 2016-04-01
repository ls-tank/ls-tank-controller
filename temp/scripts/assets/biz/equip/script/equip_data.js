"use strict";
cc._RFpush(module, '1b1cayaZSRNU4ieNthkGkTh', 'equip_data');
// biz/equip/script/equip_data.js

var head = [{
    desc: '最基础的炮弹，适合新手菜鸟',
    cost: 0
}, {
    desc: '其实就是换上了弹药，不过可以用来吓人',
    cost: 200
}, {
    desc: '看上去非常威武，用起来貌似也不错',
    cost: 400
}, {
    desc: '勇气沸腾想要散发出来，似乎可以去当勇者了',
    cost: 800
}, {
    desc: '强大的攻击力，史上排名第二的坦克炮',
    cost: 1600
}, {
    desc: '最强的火炮，没有比这个更炫了',
    cost: 3200
}, {
    desc: '已经升级到了顶级',
    cost: '顶级'
}];

var body = [{
    desc: '提供最基础的防御能力而已',
    cost: 0
}, {
    desc: '只是多了一些修饰的钢甲',
    cost: 200
}, {
    desc: '钢造的，非常坚硬但不防震',
    cost: 400
}, {
    desc: '用沙子非常仔细的打磨过，自信满满的作品',
    cost: 800
}, {
    desc: '相当优秀的防御能力，助你驰骋疆场',
    cost: 1600
}, {
    desc: '只有久经沙场独孤求败的你才有资格拥有',
    cost: 3200
}, {
    desc: '已经升级到了顶级',
    cost: '顶级'
}];

var wheel = [{
    desc: '最最最普通的履带，有了它，你才能动',
    cost: 0
}, {
    desc: '稍微改变了些造型而已，速度小有提升',
    cost: 200
}, {
    desc: '可以承受较强的压力，装上后似乎开的不慢',
    cost: 400
}, {
    desc: '已经不错的行驶能力，还有继续提升空间',
    cost: 800
}, {
    desc: '优秀的合金打造，似乎燃起了飙坦克的欲望',
    cost: 1600
}, {
    desc: '又硬又轻，装上它可以跑第一名',
    cost: 3200
}, {
    desc: '已经升级到了顶级',
    cost: '顶级'
}];

module.exports = {
    tankHead: head,
    tankBody: body,
    tankWheel: wheel
};

cc._RFpop();