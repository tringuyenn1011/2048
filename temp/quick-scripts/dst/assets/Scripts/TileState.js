
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TileState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGlsZVN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2hGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBUTFDO0lBQXVDLDZCQUFZO0lBQW5EOztJQThEQSxDQUFDO0lBNURHLGdDQUFZLEdBQVosVUFBYSxNQUFjO1FBRXZCLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQTtRQUN2QixJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUM7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1NBQ2pEO2FBQ0ksSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDakQ7YUFDSSxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtTQUNqRDthQUNJLElBQUksTUFBTSxJQUFJLEVBQUUsRUFBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1NBQ2pEO2FBQ0ksSUFBSSxNQUFNLElBQUksRUFBRSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDakQ7YUFDSSxJQUFJLE1BQU0sSUFBSSxFQUFFLEVBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtTQUNqRDthQUNJLElBQUksTUFBTSxJQUFJLEdBQUcsRUFBQztZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1NBQ2pEO2FBQ0ksSUFBSSxNQUFNLElBQUksR0FBRyxFQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDakQ7YUFDSSxJQUFJLE1BQU0sSUFBSSxHQUFHLEVBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtTQUNqRDthQUNJLElBQUksTUFBTSxJQUFJLElBQUksRUFBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1NBQ2pEO2FBQ0ksSUFBSSxNQUFNLElBQUksSUFBSSxFQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDakQ7UUFFRCxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFRCx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBM0RnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBOEQ3QjtJQUFELGdCQUFDO0NBOURELEFBOERDLENBOURzQyxFQUFFLENBQUMsU0FBUyxHQThEbEQ7a0JBOURvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbnR5cGUgVGlsZURhdGEgPSB7XG4gICAgICAgIGJnQ29sb3I/OiBjYy5Db2xvcjtcbiAgICAgICAgdGV4dENvbG9yPzogY2MuQ29sb3I7XG4gICAgfVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZVN0YXRlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGdldFRpbGVWYWx1ZShudW1iZXI6IG51bWJlcilcbiAgICB7XG4gICAgICAgIGxldCBkYXRhOiBUaWxlRGF0YSA9IHt9XG4gICAgICAgIGlmIChudW1iZXIgPT0gMil7XG4gICAgICAgICAgICBkYXRhLmJnQ29sb3IgPSBjYy5jb2xvcigpLmZyb21IRVgoJyNFRUU0REEnKTtcbiAgICAgICAgICAgIGRhdGEudGV4dENvbG9yID0gY2MuY29sb3IoKS5mcm9tSEVYKCcjNzc2RTY1JylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChudW1iZXIgPT0gNCl7XG4gICAgICAgICAgICBkYXRhLmJnQ29sb3IgPSBjYy5jb2xvcigpLmZyb21IRVgoJyNFRUUxQzknKVxuICAgICAgICAgICAgZGF0YS50ZXh0Q29sb3IgPSBjYy5jb2xvcigpLmZyb21IRVgoJyM3NzZFNjUnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG51bWJlciA9PSA4KXtcbiAgICAgICAgICAgIGRhdGEuYmdDb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWCgnI0YzQjI3QScpXG4gICAgICAgICAgICBkYXRhLnRleHRDb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWCgnI0Y5RjZGMicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobnVtYmVyID09IDE2KXtcbiAgICAgICAgICAgIGRhdGEuYmdDb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWCgnI0Y2OTY2NCcpXG4gICAgICAgICAgICBkYXRhLnRleHRDb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWCgnI0Y5RjZGMicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobnVtYmVyID09IDMyKXtcbiAgICAgICAgICAgIGRhdGEuYmdDb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWCgnI0Y3N0M1RicpXG4gICAgICAgICAgICBkYXRhLnRleHRDb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWCgnI0Y5RjZGMicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobnVtYmVyID09IDY0KXtcbiAgICAgICAgICAgIGRhdGEuYmdDb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWCgnI0Y3NUYzQicpXG4gICAgICAgICAgICBkYXRhLnRleHRDb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWCgnI0Y5RjZGMicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobnVtYmVyID09IDEyOCl7XG4gICAgICAgICAgICBkYXRhLmJnQ29sb3IgPSBjYy5jb2xvcigpLmZyb21IRVgoJyNFREQwNzMnKVxuICAgICAgICAgICAgZGF0YS50ZXh0Q29sb3IgPSBjYy5jb2xvcigpLmZyb21IRVgoJyNGOUY2RjInKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG51bWJlciA9PSAyNTYpe1xuICAgICAgICAgICAgZGF0YS5iZ0NvbG9yID0gY2MuY29sb3IoKS5mcm9tSEVYKCcjRURDQzYyJylcbiAgICAgICAgICAgIGRhdGEudGV4dENvbG9yID0gY2MuY29sb3IoKS5mcm9tSEVYKCcjRjlGNkYyJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChudW1iZXIgPT0gNTEyKXtcbiAgICAgICAgICAgIGRhdGEuYmdDb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWCgnI0VEQzk1MCcpXG4gICAgICAgICAgICBkYXRhLnRleHRDb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWCgnI0Y5RjZGMicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobnVtYmVyID09IDEwMjQpe1xuICAgICAgICAgICAgZGF0YS5iZ0NvbG9yID0gY2MuY29sb3IoKS5mcm9tSEVYKCcjRURDNTNGJylcbiAgICAgICAgICAgIGRhdGEudGV4dENvbG9yID0gY2MuY29sb3IoKS5mcm9tSEVYKCcjRjlGNkYyJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChudW1iZXIgPT0gMjA0OCl7XG4gICAgICAgICAgICBkYXRhLmJnQ29sb3IgPSBjYy5jb2xvcigpLmZyb21IRVgoJyNFREMyMkUnKVxuICAgICAgICAgICAgZGF0YS50ZXh0Q29sb3IgPSBjYy5jb2xvcigpLmZyb21IRVgoJyNGOUY2RjInKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cblxuIl19