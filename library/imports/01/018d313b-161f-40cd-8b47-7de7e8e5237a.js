"use strict";
cc._RF.push(module, '018d3E7Fh9AzYtHfefo5SN6', 'TileCell_v0');
// Scripts/TileCell_v0.js

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
    tile: {
      "default": null,
      type: cc.Tile
    },
    empty: {
      "default": true,
      visible: false
    },
    occupied: {
      "default": false,
      visible: false
    }
  },
  onLoad: function onLoad() {
    this.coordinates = cc.v2(0, 0);
    this.updateState(); // Gọi hàm cập nhật trạng thái ban đầu
  },
  updateState: function updateState() {
    this.empty = this.tile === null;
    this.occupied = !this.empty;
  },
  // Hàm này được gọi khi thay đổi giá trị tile
  SetTile: function SetTile(newTile) {
    this.tile = newTile;
    this.updateState(); // Cập nhật lại trạng thái
  },
  start: function start() {} // update (dt) {},
});

cc._RF.pop();