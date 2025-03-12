"use strict";
cc._RF.push(module, 'c477602WClK/LkugcqMbb40', 'TileRow_v0');
// Scripts/TileRow_v0.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  properties: {
    // cells:{
    //     default:[],
    //     type: [TileCell]
    // }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.cells = this.getComponentsInChildren("TileCell");
  },
  start: function start() {} // update (dt) {},
});

cc._RF.pop();