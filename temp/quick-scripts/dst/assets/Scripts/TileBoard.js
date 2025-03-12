
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TileBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGlsZUJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBK1BDO1FBNVBHLGlCQUFXLEdBQWMsSUFBSSxDQUFBO1FBRzdCLGtCQUFZLEdBQVksSUFBSSxDQUFBOztJQXlQaEMsQ0FBQztJQWhQRyx3QkFBd0I7SUFFeEIsMEJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3JFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFHcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFFSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFD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LElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUN0QztZQUVJLE9BQU8sS0FBSyxDQUFBO1NBQ2Y7UUFHRCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ3pDO1lBQ0ksSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQzdCO2dCQUNJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2xFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDckUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNyRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUVyRSxJQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3ZELE9BQU8sS0FBSyxDQUFBO2dCQUVoQixJQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQzNELE9BQU8sS0FBSyxDQUFBO2dCQUVoQixJQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQzNELE9BQU8sS0FBSyxDQUFBO2dCQUVoQixJQUFHLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQzdELE9BQU8sS0FBSyxDQUFBO2FBQ25CO1NBRUo7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUExUEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNVO0lBTlgsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQStQN0I7SUFBRCxnQkFBQztDQS9QRCxBQStQQyxDQS9Qc0MsRUFBRSxDQUFDLFNBQVMsR0ErUGxEO2tCQS9Qb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVGlsZSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgVGlsZUdyaWQgZnJvbSBcIi4vVGlsZUdyaWRcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlQm9hcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICB0aWxlX3ByZWZhYjogY2MuUHJlZmFiID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ2FtZV9jb250cm9sOiBjYy5Ob2RlID0gbnVsbFxuXG4gICAgZ3JpZDogVGlsZUdyaWRcbiAgICB0aWxlczogQXJyYXk8VGlsZT5cbiAgICB3YWl0aW5nOiBib29sZWFuXG5cbiAgICByYW5kb206IG51bWJlclxuICAgIGNvdW50OiBudW1iZXJcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIFxuICAgIHtcbiAgICAgICAgdGhpcy5ncmlkID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiR3JpZFwiKS5nZXRDb21wb25lbnQoXCJUaWxlR3JpZFwiKVxuICAgICAgICB0aGlzLnRpbGVzID0gbmV3IEFycmF5KDE2KVxuICAgICAgICB0aGlzLndhaXRpbmcgPSBmYWxzZVxuICAgICAgICBcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICB9XG5cbiAgICBDbGVhckJvYXJkKClcbiAgICB7XG4gICAgICAgIHRoaXMucmFuZG9tID0gMFxuICAgICAgICB0aGlzLmNvdW50ID0gMVxuICAgICAgICB0aGlzLnJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooMjAtOCkgKyA4KVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkLmNlbGxzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLmdyaWQuY2VsbHNbaV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuY2VsbHNbaV0uU2V0VGlsZShudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRpbGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLnRpbGVzW2ldICE9IG51bGwpXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlc1tpXS5ub2RlLmRlc3Ryb3koKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aWxlcy5zcGxpY2UoMCwgdGhpcy50aWxlcy5sZW5ndGgpO1xuICAgIH1cblxuICAgIENyZWF0ZVRpbGUobnVtYmVyKSBcbiAgICB7XG4gICAgICAgIGxldCB0aWxlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aWxlX3ByZWZhYikuZ2V0Q29tcG9uZW50KFwiVGlsZVwiKVxuICAgICAgICB0aGlzLmdyaWQubm9kZS5hZGRDaGlsZCh0aWxlLm5vZGUpXG4gICAgICAgIHRpbGUuU2V0U3RhdGUobnVtYmVyKVxuXG4gICAgICAgIHRpbGUuQW5pbWF0ZUNyZWF0ZSgxLCAwLjIpXG5cbiAgICAgICAgdGlsZS5TcGF3bih0aGlzLmdyaWQuR2V0UmFuZG9tRW1wdHlDZWxsKCksIHRoaXMuZ3JpZC5ub2RlKVxuXG4gICAgICAgIHRoaXMudGlsZXMucHVzaCh0aWxlKVxuICAgIH1cblxuICAgIG9uS2V5RG93biAoZXZlbnQpIFxuICAgIHtcbiAgICAgICAgaWYoIXRoaXMud2FpdGluZylcbiAgICAgICAge1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcbiAgICAgICAgICAgICAgICB0aGlzLk1vdmVUaWxlcyhjYy52MigwLCsxKSwgMCwgMSwgMSwgMSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XG4gICAgICAgICAgICAgICAgdGhpcy5Nb3ZlVGlsZXMoY2MudjIoMCwtMSksIDAsIDEsIHRoaXMuZ3JpZC5oZWlnaHQgLSAyLCAtMSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgdGhpcy5Nb3ZlVGlsZXMoY2MudjIoLTEsMCksIDEsIDEsIDAsIDEpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDogICBcbiAgICAgICAgICAgICAgICB0aGlzLk1vdmVUaWxlcyhjYy52MigxLDApLCB0aGlzLmdyaWQud2lkdGggLSAyLCAtMSwgMCwgMSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIE1vdmVUaWxlcyhkaXJlY3Rpb246IGNjLlZlYzIsIHN0YXJ0WDogbnVtYmVyLCBpbmNyZW1lbnRYOiBudW1iZXIsIHN0YXJ0WTogbnVtYmVyLCBpbmNyZW1lbnRZOiBudW1iZXIpXG4gICAge1xuICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgIGZvciAobGV0IHggPSBzdGFydFg7IHggPj0gMCAmJiB4IDwgdGhpcy5ncmlkLndpZHRoOyB4ICs9IGluY3JlbWVudFgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSBzdGFydFk7IHkgPj0gMCAmJiB5IDwgdGhpcy5ncmlkLmhlaWdodDsgeSArPSBpbmNyZW1lbnRZKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gdGhpcy5ncmlkLkdldENlbGwoeCwgeSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihjZWxsLnRpbGUgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgY291bnQgKz0gdGhpcy5Nb3ZlVGlsZShjZWxsLnRpbGUsIGRpcmVjdGlvbikgPT0gdHJ1ZT8gMSA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKGNvdW50ICE9IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuV2FpdEZvckNoYW5nZXMoKVxuICAgICAgICAgICAgLy9jaGFuZ2VkID0gZmFsc2VcbiAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIE1vdmVUaWxlKHRpbGU6VGlsZSwgZGlyZWN0aW9uOiBjYy5WZWMyKVxuICAgIHtcbiAgICAgICAgdmFyIG5ld0NlbGwgPSBudWxsXG4gICAgICAgIHZhciBhZGphY2VudCA9IHRoaXMuZ3JpZC5HZXRBZGphY2VudENlbGwodGlsZS5jZWxsLCBkaXJlY3Rpb24pXG4gICAgICAgIFxuICAgICAgICB3aGlsZShhZGphY2VudCAhPSBudWxsKVxuICAgICAgICB7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGFkamFjZW50Lm9jY3VwaWVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hlY2tDYW5NZXJnZSh0aWxlLCBhZGphY2VudC50aWxlKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vbWVyZ2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5NZXJnZSh0aWxlLCBhZGphY2VudC50aWxlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0NlbGwgPSBhZGphY2VudFxuICAgICAgICAgICAgYWRqYWNlbnQgPSB0aGlzLmdyaWQuR2V0QWRqYWNlbnRDZWxsKGFkamFjZW50LCBkaXJlY3Rpb24pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihuZXdDZWxsICE9IG51bGwgJiYgbmV3Q2VsbC5lbXB0eSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGlsZS5Nb3ZlVG8obmV3Q2VsbCwgdGhpcy5ncmlkLm5vZGUpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgY2hlY2tDYW5NZXJnZShhOiBUaWxlLCBiOlRpbGUpXG4gICAge1xuICAgICAgICByZXR1cm4gYS5udW1iZXIgPT0gYi5udW1iZXIgJiYgIWIubG9ja2VkXG4gICAgfVxuXG4gICAgTWVyZ2UoYTogVGlsZSwgYjogVGlsZSlcbiAgICB7XG4gICAgICAgIC8vdGhpcy50aWxlcy5zcGxpY2UoYSlcblxuICAgICAgICBsZXQgaW5kZXhUb0RlbGV0ZSA9IHRoaXMudGlsZXMuaW5kZXhPZihhKTtcbiAgICAgICAgaWYgKGluZGV4VG9EZWxldGUgIT09IC0xKVxuICAgICAgICAgICAgdGhpcy50aWxlcy5zcGxpY2UoaW5kZXhUb0RlbGV0ZSwgMSk7XG4gICAgXG5cbiAgICAgICAgYS5NZXJnZShiLmNlbGwsIHRoaXMuZ3JpZC5ub2RlKVxuXG4gICAgICAgIGxldCBudW1iZXIgPSBiLm51bWJlciAqIDI7XG4gICAgICAgIGIuU2V0U3RhdGUobnVtYmVyKVxuXG4gICAgICAgIHRoaXMuZ2FtZV9jb250cm9sLmdldENvbXBvbmVudChcImdhbWVfY29udHJvbFwiKS5JbmNyZWFzZVNjb3JlKG51bWJlcilcblxuICAgICAgICBiLkFuaW1hdGVNZXJnZSgxLjIsIDAuNClcblxuICAgICAgICB0aGlzLldhaXRGb3JTZWNvbmQoMjAwKVxuICAgIH1cblxuICAgIFxuXG5cbiAgICBXYWl0Rm9yQ2hhbmdlcygpXG4gICAge1xuICAgICAgICB0aGlzLldhaXRGb3JTZWNvbmQoMzAwKVxuXG5cbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCB0aGlzLnRpbGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYodGhpcy50aWxlc1tpXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHRoaXMudGlsZXNbaV0ubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnRpbGVzLmxlbmd0aCAhPSB0aGlzLmdyaWQuc2l6ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5jb3VudCAhPSB0aGlzLnJhbmRvbSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLkNyZWF0ZVRpbGUoMilcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLkNyZWF0ZVRpbGUoNClcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gMVxuICAgICAgICAgICAgICAgIHRoaXMucmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKigyMC04KSArIDgpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgIGlmKHRoaXMuQ2hlY2tGb3JHYW1lT3ZlcigpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVPdmVyXCIpXG4gICAgICAgICAgICB0aGlzLmdhbWVfY29udHJvbC5nZXRDb21wb25lbnQoXCJnYW1lX2NvbnRyb2xcIikuR2FtZU92ZXIoKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFzeW5jIFdhaXRGb3JTZWNvbmQobXM6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMud2FpdGluZyA9IHRydWVcblxuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKG1zKVxuXG4gICAgICAgIHRoaXMud2FpdGluZyA9IGZhbHNlXG4gICAgfVxuXG4gICAgc2xlZXAobXM6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxuICAgIH1cblxuICAgIENoZWNrRm9yR2FtZU92ZXIoKVxuICAgIHtcbiAgICAgICAgLy9T4butYSBs4bqhaSBsZW5ndGhcbiAgICAgICAgaWYodGhpcy50aWxlcy5sZW5ndGggIT0gdGhpcy5ncmlkLnNpemUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRpbGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLnRpbGVzW2ldLmNlbGwgIT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgdXAgPSB0aGlzLmdyaWQuR2V0QWRqYWNlbnRDZWxsKHRoaXMudGlsZXNbaV0uY2VsbCwgY2MudjIoMCwxKSlcbiAgICAgICAgICAgICAgICBsZXQgZG93biA9IHRoaXMuZ3JpZC5HZXRBZGphY2VudENlbGwodGhpcy50aWxlc1tpXS5jZWxsLCBjYy52MigwLC0xKSlcbiAgICAgICAgICAgICAgICBsZXQgbGVmdCA9IHRoaXMuZ3JpZC5HZXRBZGphY2VudENlbGwodGhpcy50aWxlc1tpXS5jZWxsLCBjYy52MigtMSwwKSlcbiAgICAgICAgICAgICAgICBsZXQgcmlnaHQgPSB0aGlzLmdyaWQuR2V0QWRqYWNlbnRDZWxsKHRoaXMudGlsZXNbaV0uY2VsbCwgY2MudjIoMSwwKSlcblxuICAgICAgICAgICAgICAgIGlmKHVwICE9IG51bGwgJiYgdGhpcy5jaGVja0Nhbk1lcmdlKHRoaXMudGlsZXNbaV0sIHVwLnRpbGUpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgICAgICAgICAgIGlmKGRvd24gIT0gbnVsbCAmJiB0aGlzLmNoZWNrQ2FuTWVyZ2UodGhpcy50aWxlc1tpXSwgZG93bi50aWxlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgICAgICAgICBpZihsZWZ0ICE9IG51bGwgJiYgdGhpcy5jaGVja0Nhbk1lcmdlKHRoaXMudGlsZXNbaV0sIGxlZnQudGlsZSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICAgICAgICAgICAgaWYocmlnaHQgIT0gbnVsbCAmJiB0aGlzLmNoZWNrQ2FuTWVyZ2UodGhpcy50aWxlc1tpXSwgcmlnaHQudGlsZSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbn1cbiJdfQ==