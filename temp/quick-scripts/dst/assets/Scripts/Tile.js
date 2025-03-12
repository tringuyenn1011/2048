
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ebf11x/4FhKf6j6LD7YtKlH', 'Tile');
// Scripts/Tile.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var TileState_1 = require("./TileState");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.number = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Tile.prototype.start = function () {
    };
    Tile.prototype.SetState = function (number) {
        this.number = number;
        var text = this.node.getChildByName("Text");
        var data = new TileState_1.default().getTileValue(number);
        if (data) {
            if (data.bgColor) {
                this.node.color = data.bgColor;
            }
            if (data.textColor) {
                text.color = data.textColor;
            }
            text.getComponent(cc.Label).string = this.number.toString();
        }
    };
    Tile.prototype.Spawn = function (cell, grid) {
        if (this.cell != null) {
            this.cell.SetTile(null); // Đặt tile của cell cũ thành null
        }
        this.cell = cell;
        this.cell.SetTile(this);
        // Lấy vị trí của cell trong thế giới (world space)
        var cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v2(0, 0));
        // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
        var gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);
        this.node.setPosition(gridLocalPos);
    };
    Tile.prototype.MoveTo = function (cell, grid) {
        if (this.cell != null) {
            this.cell.SetTile(null); // Đặt tile của cell cũ thành null
        }
        this.cell = cell;
        this.cell.SetTile(this);
        // Lấy vị trí của cell trong thế giới (world space)
        var cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
        var gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);
        this.AnimateMove(gridLocalPos, false);
    };
    Tile.prototype.Merge = function (cell, grid) {
        if (this.cell != null) {
            this.cell.SetTile(null); // Đặt tile của cell cũ thành null
        }
        this.cell = null;
        cell.tile.locked = true;
        // Lấy vị trí của cell trong thế giới (world space)
        var cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
        var gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);
        this.AnimateMove(gridLocalPos, true);
    };
    Tile.prototype.AnimateMove = function (to, merging) {
        return __awaiter(this, void 0, void 0, function () {
            var elapsed, duration, from, t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        elapsed = 0;
                        duration = 0.3;
                        from = this.node.position.clone();
                        _a.label = 1;
                    case 1:
                        if (!(elapsed < duration)) return [3 /*break*/, 3];
                        t = elapsed / duration;
                        this.node.position = from.lerp(to, t);
                        elapsed += 1 / 60;
                        return [4 /*yield*/, this.sleep(0)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        this.node.position = to;
                        if (merging) {
                            this.node.destroy();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Tile.prototype.AnimateMerge = function (to, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var from;
            return __generator(this, function (_a) {
                this.node.scale = 1;
                from = this.node.scale;
                // Phần phóng to 
                this.AnimateScale(from, to, duration);
                // Phần thu nhỏ
                this.AnimateScale(to, from, duration);
                return [2 /*return*/];
            });
        });
    };
    Tile.prototype.AnimateCreate = function (to, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var from;
            return __generator(this, function (_a) {
                this.node.scale = 0.6;
                from = this.node.scale;
                this.AnimateScale(from, to, duration);
                return [2 /*return*/];
            });
        });
    };
    //AnimateBasic
    Tile.prototype.AnimateScale = function (from, to, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var elapsed, halfDuration, t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        elapsed = 0;
                        halfDuration = duration / 2;
                        _a.label = 1;
                    case 1:
                        if (!(elapsed < halfDuration)) return [3 /*break*/, 3];
                        t = elapsed / halfDuration;
                        this.node.scale = cc.misc.lerp(from, to, t);
                        elapsed += 1 / 60;
                        return [4 /*yield*/, this.sleep(1000 / 60)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        this.node.scale = to;
                        return [2 /*return*/];
                }
            });
        });
    };
    Tile.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    Tile = __decorate([
        ccclass
    ], Tile);
    return Tile;
}(cc.Component));
exports.default = Tile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd0Rix5Q0FBb0M7QUFFOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUE0SUM7UUF4SUcsWUFBTSxHQUFXLENBQUMsQ0FBQTs7SUF3SXRCLENBQUM7SUFySUcsd0JBQXdCO0lBRXhCLG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0QsdUJBQVEsR0FBUixVQUFTLE1BQWM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFFcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDM0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxtQkFBUyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQy9DLElBQUksSUFBSSxFQUFDO1lBRUwsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFDO2dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7YUFDakM7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUM7Z0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFF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TyxHQUFHLFlBQVksQ0FBQzt3QkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFFNUMsT0FBTyxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUM7d0JBQ2pCLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQyxFQUFBOzt3QkFBekIsU0FBeUIsQ0FBQzs7O3dCQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7Ozs7O0tBQ3ZCO0lBRUQsb0JBQUssR0FBTCxVQUFNLEVBQVU7UUFFWixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUExSWdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E0SXhCO0lBQUQsV0FBQztDQTVJRCxBQTRJQyxDQTVJaUMsRUFBRSxDQUFDLFNBQVMsR0E0STdDO2tCQTVJb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVGlsZUNlbGwgZnJvbSBcIi4vVGlsZUNlbGxcIjtcbmltcG9ydCBUaWxlU3RhdGUgZnJvbSBcIi4vVGlsZVN0YXRlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBjZWxsOiBUaWxlQ2VsbFxuXG4gICAgbnVtYmVyOiBudW1iZXIgPSAwXG4gICAgbG9ja2VkOiBib29sZWFuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuXG4gICAgU2V0U3RhdGUobnVtYmVyOiBudW1iZXIpe1xuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlclxuXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGV4dFwiKVxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBUaWxlU3RhdGUoKS5nZXRUaWxlVmFsdWUobnVtYmVyKVxuICAgICAgICBpZiAoZGF0YSl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChkYXRhLmJnQ29sb3Ipe1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGRhdGEuYmdDb2xvclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEudGV4dENvbG9yKXtcbiAgICAgICAgICAgICAgICB0ZXh0LmNvbG9yID0gZGF0YS50ZXh0Q29sb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm51bWJlci50b1N0cmluZygpIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgU3Bhd24oY2VsbDpUaWxlQ2VsbCwgZ3JpZDpjYy5Ob2RlKXtcbiAgICAgICAgaWYodGhpcy5jZWxsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2VsbC5TZXRUaWxlKG51bGwpOyAvLyDEkOG6t3QgdGlsZSBj4bunYSBjZWxsIGPFqSB0aMOgbmggbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jZWxsID0gY2VsbFxuXG4gICAgICAgIHRoaXMuY2VsbC5TZXRUaWxlKHRoaXMpXG4gICAgICAgIC8vIEzhuqV5IHbhu4sgdHLDrSBj4bunYSBjZWxsIHRyb25nIHRo4bq/IGdp4bubaSAod29ybGQgc3BhY2UpXG4gICAgICAgIGxldCBjZWxsV29ybGRQb3MgPSBjZWxsLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcblxuICAgICAgICAvLyBDaHV54buDbiDEkeG7lWkgduG7iyB0csOtIHRvw6BuIGPhu6VjIGPhu6dhIGNlbGwgc2FuZyB24buLIHRyw60gY+G7pWMgYuG7mSBj4bunYSBncmlkXG4gICAgICAgIGxldCBncmlkTG9jYWxQb3MgPSBncmlkLmNvbnZlcnRUb05vZGVTcGFjZUFSKGNlbGxXb3JsZFBvcyk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGdyaWRMb2NhbFBvcyk7XG4gICAgfVxuXG4gICAgTW92ZVRvKGNlbGw6IFRpbGVDZWxsLCBncmlkOiBjYy5Ob2RlKXtcbiAgICAgICAgaWYodGhpcy5jZWxsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2VsbC5TZXRUaWxlKG51bGwpOyAvLyDEkOG6t3QgdGlsZSBj4bunYSBjZWxsIGPFqSB0aMOgbmggbnVsbFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2VsbCA9IGNlbGxcbiAgICAgICAgdGhpcy5jZWxsLlNldFRpbGUodGhpcylcbiAgICAgICAgLy8gTOG6pXkgduG7iyB0csOtIGPhu6dhIGNlbGwgdHJvbmcgdGjhur8gZ2nhu5tpICh3b3JsZCBzcGFjZSlcbiAgICAgICAgbGV0IGNlbGxXb3JsZFBvcyA9IGNlbGwubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgMCkpO1xuICAgICAgICAvLyBDaHV54buDbiDEkeG7lWkgduG7iyB0csOtIHRvw6BuIGPhu6VjIGPhu6dhIGNlbGwgc2FuZyB24buLIHRyw60gY+G7pWMgYuG7mSBj4bunYSBncmlkXG4gICAgICAgIGxldCBncmlkTG9jYWxQb3MgPSBncmlkLmNvbnZlcnRUb05vZGVTcGFjZUFSKGNlbGxXb3JsZFBvcyk7XG5cbiAgICAgICAgdGhpcy5BbmltYXRlTW92ZShncmlkTG9jYWxQb3MsIGZhbHNlKVxuICAgIH1cblxuICAgIE1lcmdlKGNlbGw6IFRpbGVDZWxsLCBncmlkOiBjYy5Ob2RlKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5jZWxsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2VsbC5TZXRUaWxlKG51bGwpOyAvLyDEkOG6t3QgdGlsZSBj4bunYSBjZWxsIGPFqSB0aMOgbmggbnVsbFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2VsbCA9IG51bGxcbiAgICAgICAgY2VsbC50aWxlLmxvY2tlZCA9IHRydWU7XG4gICAgICAgIC8vIEzhuqV5IHbhu4sgdHLDrSBj4bunYSBjZWxsIHRyb25nIHRo4bq/IGdp4bubaSAod29ybGQgc3BhY2UpXG4gICAgICAgIGxldCBjZWxsV29ybGRQb3MgPSBjZWxsLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcbiAgICAgICAgLy8gQ2h1eeG7g24gxJHhu5VpIHbhu4sgdHLDrSB0b8OgbiBj4bulYyBj4bunYSBjZWxsIHNhbmcgduG7iyB0csOtIGPhu6VjIGLhu5kgY+G7p2EgZ3JpZFxuICAgICAgICBsZXQgZ3JpZExvY2FsUG9zID0gZ3JpZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjZWxsV29ybGRQb3MpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5BbmltYXRlTW92ZShncmlkTG9jYWxQb3MsIHRydWUpXG5cbiAgICB9XG5cbiAgICBhc3luYyBBbmltYXRlTW92ZSh0bzogY2MuVmVjMywgbWVyZ2luZzogYm9vbGVhbilcbiAgICB7XG4gICAgICAgIGxldCBlbGFwc2VkID0gMFxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDAuM1xuXG4gICAgICAgIGNvbnN0IGZyb20gPSB0aGlzLm5vZGUucG9zaXRpb24uY2xvbmUoKVxuXG4gICAgICAgIHdoaWxlKGVsYXBzZWQgPCBkdXJhdGlvbilcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgdCA9IGVsYXBzZWQvZHVyYXRpb25cbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGZyb20ubGVycCh0bywgdClcbiAgICAgICAgICAgIGVsYXBzZWQgKz0gMS82MFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgwKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdG9cblxuICAgICAgICBpZihtZXJnaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBBbmltYXRlTWVyZ2UodG86IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxXG4gICAgICAgIGNvbnN0IGZyb20gPSB0aGlzLm5vZGUuc2NhbGU7IFxuICAgICAgICAvLyBQaOG6p24gcGjDs25nIHRvIFxuICAgICAgICB0aGlzLkFuaW1hdGVTY2FsZShmcm9tLCB0bywgZHVyYXRpb24pXG4gICAgICAgIC8vIFBo4bqnbiB0aHUgbmjhu49cbiAgICAgICAgdGhpcy5BbmltYXRlU2NhbGUodG8sIGZyb20sIGR1cmF0aW9uKVxuICAgIH1cblxuXG4gICAgXG4gICAgYXN5bmMgQW5pbWF0ZUNyZWF0ZSh0bzogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuNlxuICAgICAgICBjb25zdCBmcm9tID0gdGhpcy5ub2RlLnNjYWxlOyAgXG5cbiAgICAgICAgdGhpcy5BbmltYXRlU2NhbGUoZnJvbSwgdG8sIGR1cmF0aW9uKVxuXG4gICAgfVxuXG4gICAgLy9BbmltYXRlQmFzaWNcbiAgICBhc3luYyBBbmltYXRlU2NhbGUoZnJvbTogbnVtYmVyLCB0bzpudW1iZXIsIGR1cmF0aW9uOm51bWJlcilcbiAgICB7XG4gICAgICAgIGxldCBlbGFwc2VkID0gMDtcbiAgICAgICAgY29uc3QgaGFsZkR1cmF0aW9uID0gZHVyYXRpb24gLyAyOyBcbiAgICAgICAgd2hpbGUgKGVsYXBzZWQgPCBoYWxmRHVyYXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBlbGFwc2VkIC8gaGFsZkR1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gY2MubWlzYy5sZXJwKGZyb20sIHRvLCB0KTsgIFxuICAgIFxuICAgICAgICAgICAgZWxhcHNlZCArPSAxIC82MDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMTAwMC82MCk7IFxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHRvXG4gICAgfVxuXG4gICAgc2xlZXAobXM6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxuICAgIH1cblxufVxuIl19