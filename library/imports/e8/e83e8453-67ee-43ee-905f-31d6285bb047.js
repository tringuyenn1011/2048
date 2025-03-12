"use strict";
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