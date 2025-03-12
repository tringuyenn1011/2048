
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TileCell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGlsZUNlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBK0JBLENBQUM7SUF2Qkcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsc0NBQXNDO0lBQzlELENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQsNkNBQTZDO0lBQzdDLDBCQUFPLEdBQVAsVUFBUSxPQUFhO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLDBCQUEwQjtJQUNsRCxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUE1QmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErQjVCO0lBQUQsZUFBQztDQS9CRCxBQStCQyxDQS9CcUMsRUFBRSxDQUFDLFNBQVMsR0ErQmpEO2tCQS9Cb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVGlsZSBmcm9tIFwiLi9UaWxlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUNlbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgdGlsZTogVGlsZSAgICAgXG4gICAgZW1wdHk6IGJvb2xlYW5cbiAgICBvY2N1cGllZDogYm9vbGVhblxuXG4gICAgY29vcmRpbmF0ZXM6IGNjLlZlYzJcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IG5ldyBjYy5WZWMyKDAsIDApO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7IC8vIEfhu41pIGjDoG0gY+G6rXAgbmjhuq10IHRy4bqhbmcgdGjDoWkgYmFuIMSR4bqndVxuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKCkge1xuICAgICAgICB0aGlzLmVtcHR5ID0gdGhpcy50aWxlID09PSBudWxsO1xuICAgICAgICB0aGlzLm9jY3VwaWVkID0gIXRoaXMuZW1wdHk7XG4gICAgfVxuXG4gICAgLy8gSMOgbSBuw6B5IMSRxrDhu6NjIGfhu41pIGtoaSB0aGF5IMSR4buVaSBnacOhIHRy4buLIHRpbGVcbiAgICBTZXRUaWxlKG5ld1RpbGU6IFRpbGUpIHtcbiAgICAgICAgdGhpcy50aWxlID0gbmV3VGlsZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpOyAvLyBD4bqtcCBuaOG6rXQgbOG6oWkgdHLhuqFuZyB0aMOhaVxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=