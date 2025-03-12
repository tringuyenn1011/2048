
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game_control.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e83e8RTZ+5D7pBfMdYoW7BH', 'game_control');
// Scripts/game_control.ts

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
var game_control = /** @class */ (function (_super) {
    __extends(game_control, _super);
    function game_control() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Board_Container = null;
        _this.Game_Over = null;
        _this.Score_Number = null;
        _this.Best_Number = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    game_control.prototype.onLoad = function () {
    };
    game_control.prototype.start = function () {
        this.board = this.Board_Container.getComponent("TileBoard");
        this.score = 0;
        this.NewGame();
    };
    game_control.prototype.NewGame = function () {
        this.SetScore(0);
        console.log(this.LoadHighScore().toString());
        this.Best_Number.string = this.LoadHighScore().toString();
        this.Game_Over.opacity = 0;
        this.Game_Over.active = false;
        this.board.ClearBoard();
        this.board.CreateTile(2);
        this.board.CreateTile(2);
    };
    game_control.prototype.GameOver = function () {
        this.Game_Over.active = true;
        this.AnimateFate(186, 1000);
    };
    game_control.prototype.AnimateFate = function (to, delay) {
        return __awaiter(this, void 0, void 0, function () {
            var elapsed, duration, from, t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sleep(delay)];
                    case 1:
                        _a.sent();
                        elapsed = 0;
                        duration = 1;
                        from = this.Game_Over.opacity;
                        _a.label = 2;
                    case 2:
                        if (!(elapsed < duration)) return [3 /*break*/, 4];
                        t = elapsed / duration;
                        this.Game_Over.opacity = cc.misc.lerp(from, to, t);
                        elapsed += 1 / 60;
                        return [4 /*yield*/, this.sleep(0)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 2];
                    case 4:
                        this.Game_Over.opacity = to;
                        return [2 /*return*/];
                }
            });
        });
    };
    game_control.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    game_control.prototype.SetScore = function (score) {
        this.score = score;
        this.Score_Number.string = score.toString();
        this.SaveHighScore();
    };
    game_control.prototype.IncreaseScore = function (point) {
        this.SetScore(this.score + point);
    };
    game_control.prototype.SaveHighScore = function () {
        var highscore = this.LoadHighScore();
        if (this.score > highscore)
            cc.sys.localStorage.setItem("highscore", this.score);
    };
    game_control.prototype.LoadHighScore = function () {
        var highscore = cc.sys.localStorage.getItem("highscore");
        if (highscore === null)
            return 0;
        return highscore;
    };
    __decorate([
        property(cc.Node)
    ], game_control.prototype, "Board_Container", void 0);
    __decorate([
        property(cc.Node)
    ], game_control.prototype, "Game_Over", void 0);
    __decorate([
        property(cc.Label)
    ], game_control.prototype, "Score_Number", void 0);
    __decorate([
        property(cc.Label)
    ], game_control.prototype, "Best_Number", void 0);
    game_control = __decorate([
        ccclass
    ], game_control);
    return game_control;
}(cc.Component));
exports.default = game_control;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZV9jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2hGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBd0dDO1FBdEdzQixxQkFBZSxHQUFZLElBQUksQ0FBQTtRQUMvQixlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXhCLGtCQUFZLEdBQWEsSUFBSSxDQUFBO1FBRTdCLGlCQUFXLEdBQWEsSUFBSSxDQUFBOztJQWlHcEQsQ0FBQztJQTNGRyx3QkFBd0I7SUFFeEIsNkJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUUzRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUVkLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUVsQixDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUVJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7UUFFekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcs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RUFBRSxDQUFDLEtBQUssQ0FBQztxREFBNkI7SUFQL0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXdHaEM7SUFBRCxtQkFBQztDQXhHRCxBQXdHQyxDQXhHeUMsRUFBRSxDQUFDLFNBQVMsR0F3R3JEO2tCQXhHb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5cbmltcG9ydCBUaWxlQm9hcmQgZnJvbSBcIi4vVGlsZUJvYXJkXCI7XG5pbXBvcnQgVGlsZVN0YXRlIGZyb20gXCIuL1RpbGVTdGF0ZVwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZV9jb250cm9sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBCb2FyZF9Db250YWluZXI6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEdhbWVfT3ZlcjogY2MuTm9kZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgU2NvcmVfTnVtYmVyOiBjYy5MYWJlbCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgQmVzdF9OdW1iZXI6IGNjLkxhYmVsID0gbnVsbFxuXG4gICAgYm9hcmQ6IFRpbGVCb2FyZDtcbiAgICBzY29yZTogbnVtYmVyXG5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5Cb2FyZF9Db250YWluZXIuZ2V0Q29tcG9uZW50KFwiVGlsZUJvYXJkXCIpXG5cbiAgICAgICAgdGhpcy5zY29yZSA9IDBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuTmV3R2FtZSgpXG4gICAgICAgIFxuICAgIH1cblxuICAgIE5ld0dhbWUoKVxuICAgIHtcbiAgICAgICAgdGhpcy5TZXRTY29yZSgwKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkxvYWRIaWdoU2NvcmUoKS50b1N0cmluZygpKVxuICAgICAgICB0aGlzLkJlc3RfTnVtYmVyLnN0cmluZyA9IHRoaXMuTG9hZEhpZ2hTY29yZSgpLnRvU3RyaW5nKClcblxuICAgICAgICB0aGlzLkdhbWVfT3Zlci5vcGFjaXR5ID0gMFxuICAgICAgICB0aGlzLkdhbWVfT3Zlci5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLmJvYXJkLkNsZWFyQm9hcmQoKVxuICAgICAgICB0aGlzLmJvYXJkLkNyZWF0ZVRpbGUoMilcbiAgICAgICAgdGhpcy5ib2FyZC5DcmVhdGVUaWxlKDIpXG4gICAgICAgIFxuICAgIH1cblxuICAgIEdhbWVPdmVyKClcbiAgICB7XG5cbiAgICAgICAgdGhpcy5HYW1lX092ZXIuYWN0aXZlID0gdHJ1ZVxuXG4gICAgICAgIHRoaXMuQW5pbWF0ZUZhdGUoMTg2LCAxMDAwKVxuICAgIH1cblxuICAgIGFzeW5jIEFuaW1hdGVGYXRlKHRvOiBudW1iZXIsIGRlbGF5OiBudW1iZXIpXG4gICAge1xuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKGRlbGF5KVxuICAgICAgICBsZXQgZWxhcHNlZCA9IDBcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSAxXG5cbiAgICAgICAgY29uc3QgZnJvbSA9IHRoaXMuR2FtZV9PdmVyLm9wYWNpdHlcblxuICAgICAgICB3aGlsZShlbGFwc2VkIDwgZHVyYXRpb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBlbGFwc2VkL2R1cmF0aW9uXG4gICAgICAgICAgICB0aGlzLkdhbWVfT3Zlci5vcGFjaXR5ID0gY2MubWlzYy5sZXJwKGZyb20sIHRvLCB0KVxuICAgICAgICAgICAgZWxhcHNlZCArPSAxLzYwXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDApXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkdhbWVfT3Zlci5vcGFjaXR5ID0gdG9cblxuICAgIH1cblxuICAgIHNsZWVwKG1zOiBudW1iZXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcbiAgICB9XG5cbiAgICBTZXRTY29yZShzY29yZTogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlXG4gICAgICAgIHRoaXMuU2NvcmVfTnVtYmVyLnN0cmluZyA9IHNjb3JlLnRvU3RyaW5nKCkgXG5cbiAgICAgICAgdGhpcy5TYXZlSGlnaFNjb3JlKClcbiAgICB9XG5cbiAgICBJbmNyZWFzZVNjb3JlKHBvaW50OiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLlNldFNjb3JlKHRoaXMuc2NvcmUgKyBwb2ludCApXG4gICAgfVxuXG4gICAgU2F2ZUhpZ2hTY29yZSgpXG4gICAge1xuICAgICAgICBsZXQgaGlnaHNjb3JlID0gdGhpcy5Mb2FkSGlnaFNjb3JlKClcblxuICAgICAgICBpZih0aGlzLnNjb3JlID4gaGlnaHNjb3JlKVxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlnaHNjb3JlXCIsIHRoaXMuc2NvcmUpICAgICBcbiAgICB9XG5cbiAgICBMb2FkSGlnaFNjb3JlKClcbiAgICB7XG4gICAgICAgIGxldCBoaWdoc2NvcmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaWdoc2NvcmVcIilcbiAgICAgICAgaWYoaGlnaHNjb3JlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgcmV0dXJuIGhpZ2hzY29yZVxuICAgIH1cblxufVxuIl19