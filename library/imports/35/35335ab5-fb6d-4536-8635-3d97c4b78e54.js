"use strict";
cc._RF.push(module, '35335q1+21FNoY1PZfEt45U', 'TileGrid');
// Scripts/TileGrid.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TileGrid = /** @class */ (function (_super) {
    __extends(TileGrid, _super);
    function TileGrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    TileGrid.prototype.onLoad = function () {
        this.size = 16;
        this.height = 4;
        this.width = 4;
        this.rows = this.getComponentsInChildren("TileRow");
        this.cells = this.getComponentsInChildren("TileCell");
    };
    TileGrid.prototype.start = function () {
        for (var y = 0; y < this.rows.length; y++)
            for (var x = 0; x < this.rows[y].cells.length; x++)
                this.rows[y].cells[x].coordinates = cc.v2(x, y);
    };
    TileGrid.prototype.GetCell = function (x, y) {
        if (x >= 0 && x < this.width && y >= 0 && y < this.height)
            return this.rows[y].cells[x];
        else
            return null;
    };
    TileGrid.prototype.GetCellTemp = function (coordinates) {
        return this.GetCell(coordinates.x, coordinates.y);
    };
    TileGrid.prototype.GetAdjacentCell = function (cell, direction) {
        var coordinates = new cc.Vec2(cell.coordinates.x, cell.coordinates.y);
        coordinates.x += direction.x;
        coordinates.y -= direction.y;
        return this.GetCellTemp(coordinates);
    };
    TileGrid.prototype.GetRandomEmptyCell = function () {
        var index = Math.floor(Math.random() * this.cells.length);
        var startingIndex = index;
        while (this.cells[index].occupied) {
            index++;
            if (index >= this.cells.length)
                index = 0;
            if (index == startingIndex)
                return null;
        }
        return this.cells[index];
    };
    TileGrid = __decorate([
        ccclass
    ], TileGrid);
    return TileGrid;
}(cc.Component));
exports.default = TileGrid;

cc._RF.pop();