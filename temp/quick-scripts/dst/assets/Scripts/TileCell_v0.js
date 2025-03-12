
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TileCell_v0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '018d3E7Fh9AzYtHfefo5SN6', 'TileCell_v0');
// Scripts/TileCell_v0.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  properties: {
    tile: {
      "default": null,
      type: cc.Tile
    },
    empty: {
      "default": true,
      visible: false
    },
    occupied: {
      "default": false,
      visible: false
    }
  },
  onLoad: function onLoad() {
    this.coordinates = cc.v2(0, 0);
    this.updateState(); // Gọi hàm cập nhật trạng thái ban đầu
  },
  updateState: function updateState() {
    this.empty = this.tile === null;
    this.occupied = !this.empty;
  },
  // Hàm này được gọi khi thay đổi giá trị tile
  SetTile: function SetTile(newTile) {
    this.tile = newTile;
    this.updateState(); // Cập nhật lại trạng thái
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGlsZUNlbGxfdjAuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0aWxlIiwidHlwZSIsIlRpbGUiLCJlbXB0eSIsInZpc2libGUiLCJvY2N1cGllZCIsIm9uTG9hZCIsImNvb3JkaW5hdGVzIiwidjIiLCJ1cGRhdGVTdGF0ZSIsIlNldFRpbGUiLCJuZXdUaWxlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLElBQUksRUFBRTtNQUNGLFdBQVMsSUFBSTtNQUNiQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFDYixDQUFDO0lBQ0RDLEtBQUssRUFBRTtNQUNILFdBQVMsSUFBSTtNQUNiQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBQ0RDLFFBQVEsRUFBRTtNQUNOLFdBQVMsS0FBSztNQUNkRCxPQUFPLEVBQUU7SUFDYjtFQUNKLENBQUM7RUFFREUsTUFBTSxXQUFBQSxPQUFBLEVBQUc7SUFDTCxJQUFJLENBQUNDLFdBQVcsR0FBR1gsRUFBRSxDQUFDWSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUNDLFdBQVcsRUFBRSxDQUFDLENBQUM7RUFDeEIsQ0FBQztFQUVEQSxXQUFXLFdBQUFBLFlBQUEsRUFBRztJQUNWLElBQUksQ0FBQ04sS0FBSyxHQUFHLElBQUksQ0FBQ0gsSUFBSSxLQUFLLElBQUk7SUFDL0IsSUFBSSxDQUFDSyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUNGLEtBQUs7RUFDL0IsQ0FBQztFQUVEO0VBQ0FPLE9BQU8sV0FBQUEsUUFBQ0MsT0FBTyxFQUFFO0lBQ2IsSUFBSSxDQUFDWCxJQUFJLEdBQUdXLE9BQU87SUFDbkIsSUFBSSxDQUFDRixXQUFXLEVBQUUsQ0FBQyxDQUFDO0VBQ3hCLENBQUM7RUFFREcsS0FBSyxXQUFBQSxNQUFBLEVBQUksQ0FFVCxDQUFDLENBRUQ7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRpbGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5UaWxlICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgZW1wdHk6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBvY2N1cGllZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IGNjLnYyKDAsIDApO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7IC8vIEfhu41pIGjDoG0gY+G6rXAgbmjhuq10IHRy4bqhbmcgdGjDoWkgYmFuIMSR4bqndVxuICAgIH0sXG5cbiAgICB1cGRhdGVTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbXB0eSA9IHRoaXMudGlsZSA9PT0gbnVsbDtcbiAgICAgICAgdGhpcy5vY2N1cGllZCA9ICF0aGlzLmVtcHR5O1xuICAgIH0sXG5cbiAgICAvLyBIw6BtIG7DoHkgxJHGsOG7o2MgZ+G7jWkga2hpIHRoYXkgxJHhu5VpIGdpw6EgdHLhu4sgdGlsZVxuICAgIFNldFRpbGUobmV3VGlsZSkge1xuICAgICAgICB0aGlzLnRpbGUgPSBuZXdUaWxlO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7IC8vIEPhuq1wIG5o4bqtdCBs4bqhaSB0cuG6oW5nIHRow6FpXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19