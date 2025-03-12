
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TileGrid_v0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da2a82QiblNFpnDJgH4Wd/w', 'TileGrid_v0');
// Scripts/TileGrid_v0.js

"use strict";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.size = 16;
    this.height = 4;
    this.width = 4;
    this.rows = this.getComponentsInChildren("TileRow");
    this.cells = this.getComponentsInChildren("TileCell");
  },
  start: function start() {
    for (var y = 0; y < this.rows.length; y++) {
      for (var x = 0; x < this.rows[y].cells.length; x++) {
        this.rows[y].cells[x].coordinates = cc.v2(x, y);
      }
    }
  },
  GetCell: function GetCell(x, y) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      return this.rows[y].cells[x];
    } else {
      return null;
    }
  },
  GetCellTemp: function GetCellTemp(coordinates) {
    return this.GetCell(coordinates.x, coordinates.y);
  },
  GetAdjacentCell: function GetAdjacentCell(cell, direction) {
    var coordinates = _extends({}, cell.coordinates);
    coordinates.x += direction.x;
    coordinates.y -= direction.y;
    return this.GetCellTemp(coordinates);
  },
  GetRandomEmptyCell: function GetRandomEmptyCell() {
    var index = parseInt(Math.random() * this.cells.length);
    var startingIndex = index;
    while (this.cells[index].occupied) {
      index++;
      if (index >= this.cells.length) {
        index = 0;
      }
      if (index == startingIndex) {
        return null;
      }
    }
    return this.cells[index];
  } // update (dt) {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGlsZUdyaWRfdjAuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJzaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJyb3dzIiwiZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4iLCJjZWxscyIsInN0YXJ0IiwieSIsImxlbmd0aCIsIngiLCJjb29yZGluYXRlcyIsInYyIiwiR2V0Q2VsbCIsIkdldENlbGxUZW1wIiwiR2V0QWRqYWNlbnRDZWxsIiwiY2VsbCIsImRpcmVjdGlvbiIsIl9leHRlbmRzIiwiR2V0UmFuZG9tRW1wdHlDZWxsIiwiaW5kZXgiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJzdGFydGluZ0luZGV4Iiwib2NjdXBpZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRSxDQUlaLENBQUM7RUFFRDtFQUVBQyxNQUFNLFdBQUFBLE9BQUEsRUFBSTtJQUNOLElBQUksQ0FBQ0MsSUFBSSxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUdkLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQ0MsdUJBQXVCLENBQUMsU0FBUyxDQUFDO0lBQ25ELElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQ0QsdUJBQXVCLENBQUMsVUFBVSxDQUFDO0VBRXpELENBQUM7RUFFREUsS0FBSyxXQUFBQSxNQUFBLEVBQUk7SUFFTCxLQUFJLElBQUlDLENBQUMsR0FBQyxDQUFDLEVBQUVBLENBQUMsR0FBQyxJQUFJLENBQUNKLElBQUksQ0FBQ0ssTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFDcEM7TUFDSSxLQUFJLElBQUlFLENBQUMsR0FBQyxDQUFDLEVBQUVBLENBQUMsR0FBQyxJQUFJLENBQUNOLElBQUksQ0FBQ0ksQ0FBQyxDQUFDLENBQUNGLEtBQUssQ0FBQ0csTUFBTSxFQUFFQyxDQUFDLEVBQUUsRUFDN0M7UUFDSSxJQUFJLENBQUNOLElBQUksQ0FBQ0ksQ0FBQyxDQUFDLENBQUNGLEtBQUssQ0FBQ0ksQ0FBQyxDQUFDLENBQUNDLFdBQVcsR0FBR2YsRUFBRSxDQUFDZ0IsRUFBRSxDQUFDRixDQUFDLEVBQUVGLENBQUMsQ0FBQztNQUVuRDtJQUNKO0VBRUosQ0FBQztFQUVESyxPQUFPLFdBQUFBLFFBQUNILENBQUMsRUFBRUYsQ0FBQyxFQUFDO0lBRVQsSUFBR0UsQ0FBQyxJQUFJLENBQUMsSUFBSUEsQ0FBQyxHQUFHLElBQUksQ0FBQ1AsS0FBSyxJQUFJSyxDQUFDLElBQUksQ0FBQyxJQUFJQSxDQUFDLEdBQUcsSUFBSSxDQUFDTixNQUFNLEVBQ3hEO01BQ0ksT0FBTyxJQUFJLENBQUNFLElBQUksQ0FBQ0ksQ0FBQyxDQUFDLENBQUNGLEtBQUssQ0FBQ0ksQ0FBQyxDQUFDO0lBQ2hDLENBQUMsTUFFRDtNQUNJLE9BQU8sSUFBSTtJQUNmO0VBRUosQ0FBQztFQUVESSxXQUFXLFdBQUFBLFlBQUNILFdBQVcsRUFBRTtJQUNyQixPQUFPLElBQUksQ0FBQ0UsT0FBTyxDQUFDRixXQUFXLENBQUNELENBQUMsRUFBRUMsV0FBVyxDQUFDSCxDQUFDLENBQUM7RUFDckQsQ0FBQztFQUVETyxlQUFlLFdBQUFBLGdCQUFDQyxJQUFJLEVBQUVDLFNBQVMsRUFBQztJQUM1QixJQUFJTixXQUFXLEdBQUFPLFFBQUEsS0FBUUYsSUFBSSxDQUFDTCxXQUFXLENBQUU7SUFDekNBLFdBQVcsQ0FBQ0QsQ0FBQyxJQUFJTyxTQUFTLENBQUNQLENBQUM7SUFDNUJDLFdBQVcsQ0FBQ0gsQ0FBQyxJQUFJUyxTQUFTLENBQUNULENBQUM7SUFFNUIsT0FBTyxJQUFJLENBQUNNLFdBQVcsQ0FBQ0gsV0FBVyxDQUFDO0VBQ3hDLENBQUM7RUFFRFEsa0JBQWtCLFdBQUFBLG1CQUFBLEVBQUc7SUFDakIsSUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEdBQUMsSUFBSSxDQUFDakIsS0FBSyxDQUFDRyxNQUFNLENBQUM7SUFDckQsSUFBSWUsYUFBYSxHQUFHSixLQUFLO0lBRXpCLE9BQU0sSUFBSSxDQUFDZCxLQUFLLENBQUNjLEtBQUssQ0FBQyxDQUFDSyxRQUFRLEVBQ2hDO01BRUlMLEtBQUssRUFBRTtNQUNQLElBQUdBLEtBQUssSUFBSSxJQUFJLENBQUNkLEtBQUssQ0FBQ0csTUFBTSxFQUM3QjtRQUVJVyxLQUFLLEdBQUcsQ0FBQztNQUNiO01BR0EsSUFBR0EsS0FBSyxJQUFJSSxhQUFhLEVBQ3pCO1FBRUksT0FBTyxJQUFJO01BQ2Y7SUFFSjtJQUVBLE9BQU8sSUFBSSxDQUFDbEIsS0FBSyxDQUFDYyxLQUFLLENBQUM7RUFDNUIsQ0FBQyxDQUVEO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBcblxuICAgICAgICBcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnNpemUgPSAxNlxuICAgICAgICB0aGlzLmhlaWdodCA9IDRcbiAgICAgICAgdGhpcy53aWR0aCA9IDRcblxuXG4gICAgICAgIHRoaXMucm93cyA9IHRoaXMuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oXCJUaWxlUm93XCIpXG4gICAgICAgIHRoaXMuY2VsbHMgPSB0aGlzLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKFwiVGlsZUNlbGxcIilcblxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IHk9MDsgeTx0aGlzLnJvd3MubGVuZ3RoOyB5KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgeD0wOyB4PHRoaXMucm93c1t5XS5jZWxscy5sZW5ndGg7IHgrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3NbeV0uY2VsbHNbeF0uY29vcmRpbmF0ZXMgPSBjYy52Mih4LCB5KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgR2V0Q2VsbCh4LCB5KXtcbiAgICAgICAgXG4gICAgICAgIGlmKHggPj0gMCAmJiB4IDwgdGhpcy53aWR0aCAmJiB5ID49IDAgJiYgeSA8IHRoaXMuaGVpZ2h0KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb3dzW3ldLmNlbGxzW3hdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7ICAgXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICB9LFxuXG4gICAgR2V0Q2VsbFRlbXAoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuR2V0Q2VsbChjb29yZGluYXRlcy54LCBjb29yZGluYXRlcy55KVxuICAgIH0sXG5cbiAgICBHZXRBZGphY2VudENlbGwoY2VsbCwgZGlyZWN0aW9uKXtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0geyAuLi5jZWxsLmNvb3JkaW5hdGVzIH0gICBcbiAgICAgICAgY29vcmRpbmF0ZXMueCArPSBkaXJlY3Rpb24ueFxuICAgICAgICBjb29yZGluYXRlcy55IC09IGRpcmVjdGlvbi55XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5HZXRDZWxsVGVtcChjb29yZGluYXRlcylcbiAgICB9LFxuXG4gICAgR2V0UmFuZG9tRW1wdHlDZWxsKCkge1xuICAgICAgICBsZXQgaW5kZXggPSBwYXJzZUludChNYXRoLnJhbmRvbSgpKnRoaXMuY2VsbHMubGVuZ3RoKVxuICAgICAgICBsZXQgc3RhcnRpbmdJbmRleCA9IGluZGV4XG5cbiAgICAgICAgd2hpbGUodGhpcy5jZWxsc1tpbmRleF0ub2NjdXBpZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5kZXgrK1xuICAgICAgICAgICAgaWYoaW5kZXggPj0gdGhpcy5jZWxscy5sZW5ndGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKGluZGV4ID09IHN0YXJ0aW5nSW5kZXgpICBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbaW5kZXhdXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==