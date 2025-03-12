
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TileGrid.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35335q1+21FNoY1PZfEt45U', 'TileGrid');
// Scripts/TileGrid.ts

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
var TileGrid = /** @class */ (function (_super) {
    __extends(TileGrid, _super);
    function TileGrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    TileGrid.prototype.onLoad = function () {
        this.size = 16;
        this.height = 4;
        this.width = 4;
        this.rows = this.getComponentsInChildren("TileRow");
        this.cells = this.getComponentsInChildren("TileCell");
    };
    TileGrid.prototype.start = function () {
        for (var y = 0; y < this.rows.length; y++)
            for (var x = 0; x < this.rows[y].cells.length; x++)
                this.rows[y].cells[x].coordinates = cc.v2(x, y);
    };
    TileGrid.prototype.GetCell = function (x, y) {
        if (x >= 0 && x < this.width && y >= 0 && y < this.height)
            return this.rows[y].cells[x];
        else
            return null;
    };
    TileGrid.prototype.GetCellTemp = function (coordinates) {
        return this.GetCell(coordinates.x, coordinates.y);
    };
    TileGrid.prototype.GetAdjacentCell = function (cell, direction) {
        var coordinates = new cc.Vec2(cell.coordinates.x, cell.coordinates.y);
        coordinates.x += direction.x;
        coordinates.y -= direction.y;
        return this.GetCellTemp(coordinates);
    };
    TileGrid.prototype.GetRandomEmptyCell = function () {
        var index = Math.floor(Math.random() * this.cells.length);
        var startingIndex = index;
        while (this.cells[index].occupied) {
            index++;
            if (index >= this.cells.length)
                index = 0;
            if (index == startingIndex)
                return null;
        }
        return this.cells[index];
    };
    TileGrid = __decorate([
        ccclass
    ], TileGrid);
    return TileGrid;
}(cc.Component));
exports.default = TileGrid;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGlsZUdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBMEVBLENBQUM7SUFqRUcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7UUFHZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUVJLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDaEMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUczRCxDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLENBQVMsRUFBRSxDQUFRO1FBRXZCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTTtZQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBOztZQUc1QixPQUFPLElBQUksQ0FBQTtJQUNuQixDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLFdBQW9CO1FBRTVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBRUQsa0NBQWUsR0FBZixVQUFnQixJQUFjLEVBQUUsU0FBa0I7UUFFOUMsSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsV0FBVyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBQzVCLFdBQVcsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUU1QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUVELHFDQUFrQixHQUFsQjtRQUVJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkQsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFBO1FBRXpCLE9BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQ2hDO1lBRUksS0FBSyxFQUFFLENBQUE7WUFDUCxJQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Z0JBQ3pCLEtBQUssR0FBRyxDQUFDLENBQUE7WUFFYixJQUFHLEtBQUssSUFBSSxhQUFhO2dCQUNyQixPQUFPLElBQUksQ0FBQTtTQUVsQjtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBeEVnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEU1QjtJQUFELGVBQUM7Q0ExRUQsQUEwRUMsQ0ExRXFDLEVBQUUsQ0FBQyxTQUFTLEdBMEVqRDtrQkExRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFRpbGUgZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IFRpbGVDZWxsIGZyb20gXCIuL1RpbGVDZWxsXCI7XG5pbXBvcnQgVGlsZVJvdyBmcm9tIFwiLi9UaWxlUm93XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUdyaWQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgc2l6ZTogbnVtYmVyXG4gICAgaGVpZ2h0OiBudW1iZXJcbiAgICB3aWR0aDogbnVtYmVyXG5cbiAgICByb3dzOiBBcnJheTxUaWxlUm93PlxuICAgIGNlbGxzOiBBcnJheTxUaWxlQ2VsbD5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIFxuICAgIHtcbiAgICAgICAgdGhpcy5zaXplID0gMTZcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0XG4gICAgICAgIHRoaXMud2lkdGggPSA0XG5cblxuICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKFwiVGlsZVJvd1wiKVxuICAgICAgICB0aGlzLmNlbGxzID0gdGhpcy5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihcIlRpbGVDZWxsXCIpXG4gICAgfVxuXG4gICAgc3RhcnQgKCkgXG4gICAge1xuICAgICAgICBmb3IobGV0IHk9MDsgeTx0aGlzLnJvd3MubGVuZ3RoOyB5KyspXG4gICAgICAgICAgICBmb3IobGV0IHg9MDsgeDx0aGlzLnJvd3NbeV0uY2VsbHMubGVuZ3RoOyB4KyspICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucm93c1t5XS5jZWxsc1t4XS5jb29yZGluYXRlcyA9IGNjLnYyKHgsIHkpICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgR2V0Q2VsbCh4OiBudW1iZXIsIHk6bnVtYmVyKVxuICAgIHtcbiAgICAgICAgaWYoeCA+PSAwICYmIHggPCB0aGlzLndpZHRoICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5oZWlnaHQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb3dzW3ldLmNlbGxzW3hdXG4gICAgICAgIFxuICAgICAgICBlbHNlICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgR2V0Q2VsbFRlbXAoY29vcmRpbmF0ZXM6IGNjLlZlYzIpIFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuR2V0Q2VsbChjb29yZGluYXRlcy54LCBjb29yZGluYXRlcy55KVxuICAgIH1cblxuICAgIEdldEFkamFjZW50Q2VsbChjZWxsOiBUaWxlQ2VsbCwgZGlyZWN0aW9uOiBjYy5WZWMyKVxuICAgIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gbmV3IGNjLlZlYzIoY2VsbC5jb29yZGluYXRlcy54LCBjZWxsLmNvb3JkaW5hdGVzLnkpOyBcbiAgICAgICAgY29vcmRpbmF0ZXMueCArPSBkaXJlY3Rpb24ueFxuICAgICAgICBjb29yZGluYXRlcy55IC09IGRpcmVjdGlvbi55XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5HZXRDZWxsVGVtcChjb29yZGluYXRlcylcbiAgICB9XG5cbiAgICBHZXRSYW5kb21FbXB0eUNlbGwoKSBcbiAgICB7XG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLmNlbGxzLmxlbmd0aClcbiAgICAgICAgbGV0IHN0YXJ0aW5nSW5kZXggPSBpbmRleFxuXG4gICAgICAgIHdoaWxlKHRoaXMuY2VsbHNbaW5kZXhdLm9jY3VwaWVkKVxuICAgICAgICB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICAgIGlmKGluZGV4ID49IHRoaXMuY2VsbHMubGVuZ3RoKSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbmRleCA9IDBcblxuICAgICAgICAgICAgaWYoaW5kZXggPT0gc3RhcnRpbmdJbmRleCkgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW2luZGV4XVxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19