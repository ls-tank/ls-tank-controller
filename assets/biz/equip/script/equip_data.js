var head = [{
    desc: '最基础的炮弹，适合新手菜鸟',
    cost: 0
}, {
    desc: '其实就是换上了弹药，可以吓人。攻击力+10',
    cost: 200
}, {
    desc: '看上去非常威武，用起来不错。攻击力+20',
    cost: 400
}, {
    desc: '勇气沸腾想要散发出来。攻击力+30',
    cost: 800
}, {
    desc: '排名第二的坦克炮。攻击力+40',
    cost: 1600
}, {
    desc: '最强的火炮，没有比这个更炫了。攻击力+50',
    cost: 3200
}, {
    desc: '已经升级到了顶级',
    cost: '顶级'
}];

var body = [{
    desc: '提供最基础的防御能力而已',
    cost: 0
}, {
    desc: '只是多了一些修饰的钢甲。HP+10',
    cost: 200
}, {
    desc: '钢造的，非常坚硬但不防震。HP+20',
    cost: 400
}, {
    desc: '用沙子非常仔细的打磨过。HP+30',
    cost: 800
}, {
    desc: '相当优秀的防御能力。HP+40',
    cost: 1600
}, {
    desc: '只有久经沙场的你才有资格拥有。HP+50',
    cost: 3200
}, {
    desc: '已经升级到了顶级',
    cost: '顶级'
}];

var wheel = [{
    desc: '最最最普通的履带，有了它，你才能动',
    cost: 0
}, {
    desc: '稍微改变了些造型而已。速度+10',
    cost: 200
}, {
    desc: '可以承受较强的压力。速度+20',
    cost: 400
}, {
    desc: '已经不错的行驶能力。速度+30',
    cost: 800
}, {
    desc: '似乎燃起了飙坦克的欲望。速度+40',
    cost: 1600
}, {
    desc: '又硬又轻，装上它可以跑第一名。速度+50',
    cost: 3200
}, {
    desc: '已经升级到了顶级',
    cost: '顶级'
}];

module.exports = {
    tankhead: head,
    tankbody: body,
    tankwheel: wheel
};