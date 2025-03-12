"use strict";
cc._RF.push(module, 'da2a82QiblNFpnDJgH4Wd/w', 'TileGrid_v0');
// Scripts/TileGrid_v0.js

"use strict";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.size = 16;
    this.height = 4;
    this.width = 4;
    this.rows = this.getComponentsInChildren("TileRow");
    this.cells = this.getComponentsInChildren("TileCell");
  },
  start: function start() {
    for (var y = 0; y < this.rows.length; y++) {
      for (var x = 0; x < this.rows[y].cells.length; x++) {
        this.rows[y].cells[x].coordinates = cc.v2(x, y);
      }
    }
  },
  GetCell: function GetCell(x, y) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      return this.rows[y].cells[x];
    } else {
      return null;
    }
  },
  GetCellTemp: function GetCellTemp(coordinates) {
    return this.GetCell(coordinates.x, coordinates.y);
  },
  GetAdjacentCell: function GetAdjacentCell(cell, direction) {
    var coordinates = _extends({}, cell.coordinates);
    coordinates.x += direction.x;
    coordinates.y -= direction.y;
    return this.GetCellTemp(coordinates);
  },
  GetRandomEmptyCell: function GetRandomEmptyCell() {
    var index = parseInt(Math.random() * this.cells.length);
    var startingIndex = index;
    while (this.cells[index].occupied) {
      index++;
      if (index >= this.cells.length) {
        index = 0;
      }
      if (index == startingIndex) {
        return null;
      }
    }
    return this.cells[index];
  } // update (dt) {},
});

cc._RF.pop();