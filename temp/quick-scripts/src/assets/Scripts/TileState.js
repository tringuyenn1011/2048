"use strict";
cc._RF.push(module, '642c43fVKpJU7tsb55xLF4Z', 'TileState');
// Scripts/TileState.ts

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
var TileState = /** @class */ (function (_super) {
    __extends(TileState, _super);
    function TileState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileState.prototype.getTileValue = function (number) {
        var data = {};
        if (number == 2) {
            data.bgColor = cc.color().fromHEX('#EEE4DA');
            data.textColor = cc.color().fromHEX('#776E65');
        }
        else if (number == 4) {
            data.bgColor = cc.color().fromHEX('#EEE1C9');
            data.textColor = cc.color().fromHEX('#776E65');
        }
        else if (number == 8) {
            data.bgColor = cc.color().fromHEX('#F3B27A');
            data.textColor = cc.color().fromHEX('#F9F6F2');
        }
        else if (number == 16) {
            data.bgColor = cc.color().fromHEX('#F69664');
            data.textColor = cc.color().fromHEX('#F9F6F2');
        }
        else if (number == 32) {
            data.bgColor = cc.color().fromHEX('#F77C5F');
            data.textColor = cc.color().fromHEX('#F9F6F2');
        }
        else if (number == 64) {
            data.bgColor = cc.color().fromHEX('#F75F3B');
            data.textColor = cc.color().fromHEX('#F9F6F2');
        }
        else if (number == 128) {
            data.bgColor = cc.color().fromHEX('#EDD073');
            data.textColor = cc.color().fromHEX('#F9F6F2');
        }
        else if (number == 256) {
            data.bgColor = cc.color().fromHEX('#EDCC62');
            data.textColor = cc.color().fromHEX('#F9F6F2');
        }
        else if (number == 512) {
            data.bgColor = cc.color().fromHEX('#EDC950');
            data.textColor = cc.color().fromHEX('#F9F6F2');
        }
        else if (number == 1024) {
            data.bgColor = cc.color().fromHEX('#EDC53F');
            data.textColor = cc.color().fromHEX('#F9F6F2');
        }
        else if (number == 2048) {
            data.bgColor = cc.color().fromHEX('#EDC22E');
            data.textColor = cc.color().fromHEX('#F9F6F2');
        }
        return data;
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    TileState.prototype.start = function () {
    };
    TileState = __decorate([
        ccclass
    ], TileState);
    return TileState;
}(cc.Component));
exports.default = TileState;

cc._RF.pop();