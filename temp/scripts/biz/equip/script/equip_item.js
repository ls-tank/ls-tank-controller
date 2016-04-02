"use strict";
cc._RFpush(module, '1883asn6SJKXY50uNG7yIZv', 'equip_item');
// biz/equip/script/equip_item.js

var user = require('user');
var tank = require('equip_data');

cc.Class({
    'extends': cc.Component,

    properties: {
        items: {
            'default': [],
            type: cc.SpriteFrame
        },
        now: {
            'default': null,
            type: cc.Sprite
        },
        next: {
            'default': null,
            type: cc.Sprite
        },
        desc: {
            'default': null,
            type: cc.Label
        },
        cost: {
            'default': null,
            type: cc.Label
        },
        btn: {
            'default': null,
            type: cc.Button
        },
        equipType: ''
    },

    setLevel: function setLevel(level) {
        this.now.spriteFrame = this.items[level];
        this.next.spriteFrame = this.items[level + 1];
        this.desc.string = tank[this.equipType][level + 1].desc;
        this.cost.string = tank[this.equipType][level + 1].cost;
    },

    upgrade: function upgrade() {
        if (+tank[this.equipType][user[this.equipType] + 1].cost > +user.diamond) {
            return this.node.emit('nocost');
        }
        user.cost(this.equipType, +tank[this.equipType][user[this.equipType] + 1].cost);
        if (user[this.equipType] === 5) {
            this.btn.interactable = false;
        }
        this.setLevel(user[this.equipType]);
        this.node.emit('cost');
    },

    onLoad: function onLoad() {
        this.setLevel(user[this.equipType]);
    }
});

cc._RFpop();