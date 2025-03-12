"use strict";
cc._RF.push(module, 'd5e838fe95LfqpQSAaczS44', 'TileCell');
// Scripts/TileCell.ts

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
var TileCell = /** @class */ (function (_super) {
    __extends(TileCell, _super);
    function TileCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    TileCell.prototype.onLoad = function () {
        this.coordinates = new cc.Vec2(0, 0);
        this.updateState(); // Gọi hàm cập nhật trạng thái ban đầu
    };
    TileCell.prototype.updateState = function () {
        this.empty = this.tile === null;
        this.occupied = !this.empty;
    };
    // Hàm này được gọi khi thay đổi giá trị tile
    TileCell.prototype.SetTile = function (newTile) {
        this.tile = newTile;
        this.updateState(); // Cập nhật lại trạng thái
    };
    TileCell.prototype.start = function () {
    };
    TileCell = __decorate([
        ccclass
    ], TileCell);
    return TileCell;
}(cc.Component));
exports.default = TileCell;

cc._RF.pop();