
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TileState_v0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd10099JlhBa6P08ufwx9NX', 'TileState_v0');
// Scripts/TileState_v0.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  getTileValue: function getTileValue(number) {
    var data = {};
    if (number == 2) {
      data.bgColor = cc.color('#EEE4DA');
      data.textColor = cc.color('#776E65');
    } else if (number == 4) {
      data.bgColor = cc.color('#EEE1C9');
      data.textColor = cc.color('#776E65');
    } else if (number == 8) {
      data.bgColor = cc.color('#F3B27A');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 16) {
      data.bgColor = cc.color('#F69664');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 32) {
      data.bgColor = cc.color('#F77C5F');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 64) {
      data.bgColor = cc.color('#F75F3B');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 128) {
      data.bgColor = cc.color('#EDD073');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 256) {
      data.bgColor = cc.color('#EDCC62');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 512) {
      data.bgColor = cc.color('#EDC950');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 1024) {
      data.bgColor = cc.color('#EDC53F');
      data.textColor = cc.color('#F9F6F2');
    } else if (number == 2048) {
      data.bgColor = cc.color('#EDC22E');
      data.textColor = cc.color('#F9F6F2');
    }
    return data;
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGlsZVN0YXRlX3YwLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJnZXRUaWxlVmFsdWUiLCJudW1iZXIiLCJkYXRhIiwiYmdDb2xvciIsImNvbG9yIiwidGV4dENvbG9yIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsWUFBWSxXQUFBQSxhQUFDQyxNQUFNLEVBQUM7SUFDaEIsSUFBSUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUlELE1BQU0sSUFBSSxDQUFDLEVBQUM7TUFDWkMsSUFBSSxDQUFDQyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztNQUNsQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUdSLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDLE1BQ0ksSUFBSUgsTUFBTSxJQUFJLENBQUMsRUFBQztNQUNqQkMsSUFBSSxDQUFDQyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztNQUNsQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUdSLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDLE1BQ0ksSUFBSUgsTUFBTSxJQUFJLENBQUMsRUFBQztNQUNqQkMsSUFBSSxDQUFDQyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztNQUNsQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUdSLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDLE1BQ0ksSUFBSUgsTUFBTSxJQUFJLEVBQUUsRUFBQztNQUNsQkMsSUFBSSxDQUFDQyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztNQUNsQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUdSLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDLE1BQ0ksSUFBSUgsTUFBTSxJQUFJLEVBQUUsRUFBQztNQUNsQkMsSUFBSSxDQUFDQyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztNQUNsQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUdSLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDLE1BQ0ksSUFBSUgsTUFBTSxJQUFJLEVBQUUsRUFBQztNQUNsQkMsSUFBSSxDQUFDQyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztNQUNsQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUdSLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDLE1BQ0ksSUFBSUgsTUFBTSxJQUFJLEdBQUcsRUFBQztNQUNuQkMsSUFBSSxDQUFDQyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztNQUNsQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUdSLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDLE1BQ0ksSUFBSUgsTUFBTSxJQUFJLEdBQUcsRUFBQztNQUNuQkMsSUFBSSxDQUFDQyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztNQUNsQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUdSLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDLE1BQ0ksSUFBSUgsTUFBTSxJQUFJLEdBQUcsRUFBQztNQUNuQkMsSUFBSSxDQUFDQyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztNQUNsQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUdSLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDLE1BQ0ksSUFBSUgsTUFBTSxJQUFJLElBQUksRUFBQztNQUNwQkMsSUFBSSxDQUFDQyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztNQUNsQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUdSLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDLE1BQ0ksSUFBSUgsTUFBTSxJQUFJLElBQUksRUFBQztNQUNwQkMsSUFBSSxDQUFDQyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztNQUNsQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUdSLEVBQUUsQ0FBQ08sS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUN4QztJQUVBLE9BQU9GLElBQUk7RUFDZixDQUFDO0VBRUQ7RUFFQTtFQUVBSSxLQUFLLFdBQUFBLE1BQUEsRUFBSSxDQUVULENBQUMsQ0FFRDtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIGdldFRpbGVWYWx1ZShudW1iZXIpe1xuICAgICAgICBsZXQgZGF0YSA9IHt9XG4gICAgICAgIGlmIChudW1iZXIgPT0gMil7XG4gICAgICAgICAgICBkYXRhLmJnQ29sb3IgPSBjYy5jb2xvcignI0VFRTREQScpXG4gICAgICAgICAgICBkYXRhLnRleHRDb2xvciA9IGNjLmNvbG9yKCcjNzc2RTY1JylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChudW1iZXIgPT0gNCl7XG4gICAgICAgICAgICBkYXRhLmJnQ29sb3IgPSBjYy5jb2xvcignI0VFRTFDOScpXG4gICAgICAgICAgICBkYXRhLnRleHRDb2xvciA9IGNjLmNvbG9yKCcjNzc2RTY1JylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChudW1iZXIgPT0gOCl7XG4gICAgICAgICAgICBkYXRhLmJnQ29sb3IgPSBjYy5jb2xvcignI0YzQjI3QScpXG4gICAgICAgICAgICBkYXRhLnRleHRDb2xvciA9IGNjLmNvbG9yKCcjRjlGNkYyJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChudW1iZXIgPT0gMTYpe1xuICAgICAgICAgICAgZGF0YS5iZ0NvbG9yID0gY2MuY29sb3IoJyNGNjk2NjQnKVxuICAgICAgICAgICAgZGF0YS50ZXh0Q29sb3IgPSBjYy5jb2xvcignI0Y5RjZGMicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobnVtYmVyID09IDMyKXtcbiAgICAgICAgICAgIGRhdGEuYmdDb2xvciA9IGNjLmNvbG9yKCcjRjc3QzVGJylcbiAgICAgICAgICAgIGRhdGEudGV4dENvbG9yID0gY2MuY29sb3IoJyNGOUY2RjInKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG51bWJlciA9PSA2NCl7XG4gICAgICAgICAgICBkYXRhLmJnQ29sb3IgPSBjYy5jb2xvcignI0Y3NUYzQicpXG4gICAgICAgICAgICBkYXRhLnRleHRDb2xvciA9IGNjLmNvbG9yKCcjRjlGNkYyJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChudW1iZXIgPT0gMTI4KXtcbiAgICAgICAgICAgIGRhdGEuYmdDb2xvciA9IGNjLmNvbG9yKCcjRUREMDczJylcbiAgICAgICAgICAgIGRhdGEudGV4dENvbG9yID0gY2MuY29sb3IoJyNGOUY2RjInKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG51bWJlciA9PSAyNTYpe1xuICAgICAgICAgICAgZGF0YS5iZ0NvbG9yID0gY2MuY29sb3IoJyNFRENDNjInKVxuICAgICAgICAgICAgZGF0YS50ZXh0Q29sb3IgPSBjYy5jb2xvcignI0Y5RjZGMicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobnVtYmVyID09IDUxMil7XG4gICAgICAgICAgICBkYXRhLmJnQ29sb3IgPSBjYy5jb2xvcignI0VEQzk1MCcpXG4gICAgICAgICAgICBkYXRhLnRleHRDb2xvciA9IGNjLmNvbG9yKCcjRjlGNkYyJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChudW1iZXIgPT0gMTAyNCl7XG4gICAgICAgICAgICBkYXRhLmJnQ29sb3IgPSBjYy5jb2xvcignI0VEQzUzRicpXG4gICAgICAgICAgICBkYXRhLnRleHRDb2xvciA9IGNjLmNvbG9yKCcjRjlGNkYyJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChudW1iZXIgPT0gMjA0OCl7XG4gICAgICAgICAgICBkYXRhLmJnQ29sb3IgPSBjYy5jb2xvcignI0VEQzIyRScpXG4gICAgICAgICAgICBkYXRhLnRleHRDb2xvciA9IGNjLmNvbG9yKCcjRjlGNkYyJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=