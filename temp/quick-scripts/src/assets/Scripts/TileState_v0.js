"use strict";
cc._RF.push(module, 'dd10099JlhBa6P08ufwx9NX', 'TileState_v0');
// Scripts/TileState_v0.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  getTileValue: function getTileValue(number) {
    var data = {};
    if (number == 2) {
      data.bgColor = cc.color('#EEE4DA');
      data.textColor = cc.color('#776E65');
    } else if (number == 4) {
      data.bgColor = cc.color('#EEE1C9');
      data.textColor = cc.color('#776E65');
    } else if (number == 8) {
      data.bgColor = cc.color('#F3B27A');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 16) {
      data.bgColor = cc.color('#F69664');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 32) {
      data.bgColor = cc.color('#F77C5F');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 64) {
      data.bgColor = cc.color('#F75F3B');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 128) {
      data.bgColor = cc.color('#EDD073');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 256) {
      data.bgColor = cc.color('#EDCC62');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 512) {
      data.bgColor = cc.color('#EDC950');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 1024) {
      data.bgColor = cc.color('#EDC53F');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 2048) {
      data.bgColor = cc.color('#EDC22E');
      data.textColor = cc.color('#F9F6F2');
    }
    return data;
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},
});

cc._RF.pop();