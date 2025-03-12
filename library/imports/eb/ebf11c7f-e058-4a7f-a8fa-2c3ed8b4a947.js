"use strict";
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