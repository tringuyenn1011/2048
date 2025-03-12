"use strict";
cc._RF.push(module, '1fb27t4MM1KLo98SNOftLFk', 'TileBoard');
// Scripts/TileBoard.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TileBoard = /** @class */ (function (_super) {
    __extends(TileBoard, _super);
    function TileBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tile_prefab = null;
        _this.game_control = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    TileBoard.prototype.onLoad = function () {
        this.grid = this.node.getChildByName("Grid").getComponent("TileGrid");
        this.tiles = new Array(16);
        this.waiting = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    TileBoard.prototype.ClearBoard = function () {
        this.random = 0;
        this.count = 1;
        this.random = Math.floor(Math.random() * (20 - 8) + 8);
        for (var i = 0; i < this.grid.cells.length; i++) {
            if (this.grid.cells[i] != null)
                this.grid.cells[i].SetTile(null);
        }
        for (var i = 0; i < this.tiles.length; i++) {
            if (this.tiles[i] != null)
                this.tiles[i].node.destroy();
        }
        this.tiles.splice(0, this.tiles.length);
    };
    TileBoard.prototype.CreateTile = function (number) {
        var tile = cc.instantiate(this.tile_prefab).getComponent("Tile");
        this.grid.node.addChild(tile.node);
        tile.SetState(number);
        tile.AnimateCreate(1, 0.2);
        tile.Spawn(this.grid.GetRandomEmptyCell(), this.grid.node);
        this.tiles.push(tile);
    };
    TileBoard.prototype.onKeyDown = function (event) {
        if (!this.waiting) {
            switch (event.keyCode) {
                case cc.macro.KEY.up:
                case cc.macro.KEY.w:
                    this.MoveTiles(cc.v2(0, +1), 0, 1, 1, 1);
                    break;
                case cc.macro.KEY.down:
                case cc.macro.KEY.s:
                    this.MoveTiles(cc.v2(0, -1), 0, 1, this.grid.height - 2, -1);
                    break;
                case cc.macro.KEY.left:
                case cc.macro.KEY.a:
                    this.MoveTiles(cc.v2(-1, 0), 1, 1, 0, 1);
                    break;
                case cc.macro.KEY.right:
                case cc.macro.KEY.d:
                    this.MoveTiles(cc.v2(1, 0), this.grid.width - 2, -1, 0, 1);
                    break;
            }
        }
    };
    TileBoard.prototype.MoveTiles = function (direction, startX, incrementX, startY, incrementY) {
        var count = 0;
        for (var x = startX; x >= 0 && x < this.grid.width; x += incrementX) {
            for (var y = startY; y >= 0 && y < this.grid.height; y += incrementY) {
                var cell = this.grid.GetCell(x, y);
                if (cell.tile != null)
                    count += this.MoveTile(cell.tile, direction) == true ? 1 : 0;
            }
        }
        if (count != 0) {
            this.WaitForChanges();
            //changed = false
            count = 0;
        }
    };
    TileBoard.prototype.MoveTile = function (tile, direction) {
        var newCell = null;
        var adjacent = this.grid.GetAdjacentCell(tile.cell, direction);
        while (adjacent != null) {
            if (adjacent.occupied) {
                if (this.checkCanMerge(tile, adjacent.tile)) {
                    //merge
                    this.Merge(tile, adjacent.tile);
                    return true;
                }
                break;
            }
            newCell = adjacent;
            adjacent = this.grid.GetAdjacentCell(adjacent, direction);
        }
        if (newCell != null && newCell.empty) {
            tile.MoveTo(newCell, this.grid.node);
            return true;
        }
        return false;
    };
    TileBoard.prototype.checkCanMerge = function (a, b) {
        return a.number == b.number && !b.locked;
    };
    TileBoard.prototype.Merge = function (a, b) {
        //this.tiles.splice(a)
        var indexToDelete = this.tiles.indexOf(a);
        if (indexToDelete !== -1)
            this.tiles.splice(indexToDelete, 1);
        a.Merge(b.cell, this.grid.node);
        var number = b.number * 2;
        b.SetState(number);
        this.game_control.getComponent("game_control").IncreaseScore(number);
        b.AnimateMerge(1.2, 0.4);
        this.WaitForSecond(200);
    };
    TileBoard.prototype.WaitForChanges = function () {
        this.WaitForSecond(300);
        for (var i = 0; i < this.tiles.length; i++)
            if (this.tiles[i] != null)
                this.tiles[i].locked = false;
        if (this.tiles.length != this.grid.size) {
            if (this.count != this.random) {
                this.CreateTile(2);
                this.count++;
            }
            else {
                this.CreateTile(4);
                this.count = 1;
                this.random = Math.floor(Math.random() * (20 - 8) + 8);
            }
        }
        if (this.CheckForGameOver()) {
            console.log("gameOver");
            this.game_control.getComponent("game_control").GameOver();
        }
    };
    TileBoard.prototype.WaitForSecond = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.waiting = true;
                        return [4 /*yield*/, this.sleep(ms)];
                    case 1:
                        _a.sent();
                        this.waiting = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    TileBoard.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    TileBoard.prototype.CheckForGameOver = function () {
        //Sửa lại length
        if (this.tiles.length != this.grid.size) {
            return false;
        }
        for (var i = 0; i < this.tiles.length; i++) {
            if (this.tiles[i].cell != null) {
                var up = this.grid.GetAdjacentCell(this.tiles[i].cell, cc.v2(0, 1));
                var down = this.grid.GetAdjacentCell(this.tiles[i].cell, cc.v2(0, -1));
                var left = this.grid.GetAdjacentCell(this.tiles[i].cell, cc.v2(-1, 0));
                var right = this.grid.GetAdjacentCell(this.tiles[i].cell, cc.v2(1, 0));
                if (up != null && this.checkCanMerge(this.tiles[i], up.tile))
                    return false;
                if (down != null && this.checkCanMerge(this.tiles[i], down.tile))
                    return false;
                if (left != null && this.checkCanMerge(this.tiles[i], left.tile))
                    return false;
                if (right != null && this.checkCanMerge(this.tiles[i], right.tile))
                    return false;
            }
        }
        return true;
    };
    __decorate([
        property(cc.Prefab)
    ], TileBoard.prototype, "tile_prefab", void 0);
    __decorate([
        property(cc.Node)
    ], TileBoard.prototype, "game_control", void 0);
    TileBoard = __decorate([
        ccclass
    ], TileBoard);
    return TileBoard;
}(cc.Component));
exports.default = TileBoard;

cc._RF.pop();