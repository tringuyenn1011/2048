
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Tile');
require('./assets/Scripts/TileBoard');
require('./assets/Scripts/TileBoard_v0');
require('./assets/Scripts/TileCell');
require('./assets/Scripts/TileCell_v0');
require('./assets/Scripts/TileGrid');
require('./assets/Scripts/TileGrid_v0');
require('./assets/Scripts/TileRow');
require('./assets/Scripts/TileRow_v0');
require('./assets/Scripts/TileState');
require('./assets/Scripts/TileState_v0');
require('./assets/Scripts/Tile_v0');
require('./assets/Scripts/game_control');
require('./assets/Scripts/game_control_v0');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TileBoard_v0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd894dyi09dMIbtdrr6ElfB+', 'TileBoard_v0');
// Scripts/TileBoard_v0.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
cc.Class({
  "extends": cc.Component,
  properties: {
    tile_prefab: cc.Prefab,
    game_control: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.grid = this.node.getChildByName("Grid").getComponent("TileGrid");
    this.tiles = new Array(16);
    this.waiting = false;
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },
  ClearBoard: function ClearBoard() {
    for (var i = 0; i < this.grid.cells.length; i++) {
      if (this.grid.cells[i] != null) this.grid.cells[i].SetTile(null);
    }
    for (var _i = 0; _i < this.tiles.length; _i++) {
      if (this.tiles[_i] != null) this.tiles[_i].node.destroy();
    }
    this.tiles.splice(0, this.tiles.length);
  },
  CreateTile: function CreateTile() {
    var tile = cc.instantiate(this.tile_prefab).getComponent("Tile");
    this.grid.node.addChild(tile.node);
    tile.SetState(2);
    tile.Spawn(this.grid.GetRandomEmptyCell(), this.grid.node);
    this.tiles.push(tile);
  },
  onKeyDown: function onKeyDown(event) {
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
  },
  MoveTiles: function MoveTiles(direction, startX, incrementX, startY, incrementY) {
    var changed = false;
    for (var x = startX; x >= 0 && x < this.grid.width; x += incrementX) {
      for (var y = startY; y >= 0 && y < this.grid.height; y += incrementY) {
        cell = this.grid.GetCell(x, y);
        if (cell.tile != null) {
          changed |= this.MoveTile(cell.tile, direction);
        }
      }
    }
    if (changed) {
      this.WaitForChanges();
    }
  },
  MoveTile: function MoveTile(tile, direction) {
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
  },
  checkCanMerge: function checkCanMerge(a, b) {
    return a.number == b.number;
  },
  Merge: function Merge(a, b) {
    //this.tiles.splice(a)

    var indexToDelete = this.tiles.indexOf(a);
    if (indexToDelete !== -1) this.tiles.splice(indexToDelete, 1);
    a.Merge(b.cell, this.grid.node);
    var number = b.number * 2;
    b.SetState(number);
    this.game_control.getComponent("game_control").IncreaseScore(number);
    b.AnimateScale(1.2, 0.3);
    this.WaitForSecond(200);
  },
  WaitForChanges: function WaitForChanges() {
    this.WaitForSecond(200);
    if (this.tiles.length != this.grid.size) this.CreateTile();
    if (this.CheckForGameOver()) {
      console.log("gameOver");
      this.game_control.getComponent("game_control").GameOver();
    }
  },
  WaitForSecond: function WaitForSecond(ms) {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.waiting = true;
            _context.next = 3;
            return _this.sleep(ms);
          case 3:
            _this.waiting = false;
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  sleep: function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  },
  CheckForGameOver: function CheckForGameOver() {
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
        if (up != null && this.checkCanMerge(this.tiles[i], up.tile)) return false;
        if (down != null && this.checkCanMerge(this.tiles[i], down.tile)) return false;
        if (left != null && this.checkCanMerge(this.tiles[i], left.tile)) return false;
        if (right != null && this.checkCanMerge(this.tiles[i], right.tile)) return false;
      }
    }
    return true;
  },
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGlsZUJvYXJkX3YwLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0aWxlX3ByZWZhYiIsIlByZWZhYiIsImdhbWVfY29udHJvbCIsIk5vZGUiLCJvbkxvYWQiLCJncmlkIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwidGlsZXMiLCJBcnJheSIsIndhaXRpbmciLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsIkNsZWFyQm9hcmQiLCJjZWxscyIsIlNldFRpbGUiLCJkZXN0cm95Iiwic3BsaWNlIiwiQ3JlYXRlVGlsZSIsInRpbGUiLCJpbnN0YW50aWF0ZSIsImFkZENoaWxkIiwiU2V0U3RhdGUiLCJTcGF3biIsIkdldFJhbmRvbUVtcHR5Q2VsbCIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwidXAiLCJ3IiwiTW92ZVRpbGVzIiwidjIiLCJkb3duIiwicyIsImhlaWdodCIsImxlZnQiLCJhIiwicmlnaHQiLCJkIiwid2lkdGgiLCJkaXJlY3Rpb24iLCJzdGFydFgiLCJpbmNyZW1lbnRYIiwic3RhcnRZIiwiaW5jcmVtZW50WSIsImNoYW5nZWQiLCJ4IiwieSIsImNlbGwiLCJHZXRDZWxsIiwiTW92ZVRpbGUiLCJXYWl0Rm9yQ2hhbmdlcyIsIm5ld0NlbGwiLCJhZGphY2VudCIsIkdldEFkamFjZW50Q2VsbCIsIm9jY3VwaWVkIiwiY2hlY2tDYW5NZXJnZSIsIk1lcmdlIiwiZW1wdHkiLCJNb3ZlVG8iLCJiIiwibnVtYmVyIiwiaW5kZXhUb0RlbGV0ZSIsImluZGV4T2YiLCJJbmNyZWFzZVNjb3JlIiwiQW5pbWF0ZVNjYWxlIiwiV2FpdEZvclNlY29uZCIsInNpemUiLCJDaGVja0ZvckdhbWVPdmVyIiwiY29uc29sZSIsImxvZyIsIkdhbWVPdmVyIiwibXMiLCJfdGhpcyIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0Iiwic2xlZXAiLCJzZXRUaW1lb3V0IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytD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QUM3RCxPQUFPLEtBQUs7TUFDcEI7SUFFSjtJQUNBLE9BQU8sSUFBSTtFQUNmLENBQUM7RUFFRDZELE1BQU0sV0FBQUEsT0FBRUMsRUFBRSxFQUFFLENBRVo7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAgICAgdGlsZV9wcmVmYWI6IGNjLlByZWZhYixcblxuICAgICAgICBnYW1lX2NvbnRyb2w6IGNjLk5vZGUsXG5cbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLmdyaWQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJHcmlkXCIpLmdldENvbXBvbmVudChcIlRpbGVHcmlkXCIpXG4gICAgICAgIHRoaXMudGlsZXMgPSBuZXcgQXJyYXkoMTYpXG4gICAgICAgIHRoaXMud2FpdGluZyA9IGZhbHNlXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBDbGVhckJvYXJkKClcbiAgICB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmdyaWQuY2VsbHMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZ3JpZC5jZWxsc1tpXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5jZWxsc1tpXS5TZXRUaWxlKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudGlsZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGlsZXNbaV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVzW2ldLm5vZGUuZGVzdHJveSgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbGVzLnNwbGljZSgwLCB0aGlzLnRpbGVzLmxlbmd0aCk7XG4gICAgfSxcblxuICAgIENyZWF0ZVRpbGUoKSB7XG4gICAgICAgIGxldCB0aWxlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aWxlX3ByZWZhYikuZ2V0Q29tcG9uZW50KFwiVGlsZVwiKVxuICAgICAgICB0aGlzLmdyaWQubm9kZS5hZGRDaGlsZCh0aWxlLm5vZGUpXG5cbiAgICAgICAgdGlsZS5TZXRTdGF0ZSgyKVxuXG5cbiAgICAgICAgdGlsZS5TcGF3bih0aGlzLmdyaWQuR2V0UmFuZG9tRW1wdHlDZWxsKCksIHRoaXMuZ3JpZC5ub2RlKVxuXG4gICAgICAgIHRoaXMudGlsZXMucHVzaCh0aWxlKVxuICAgIH0sXG5cbiAgICBvbktleURvd24gKGV2ZW50KSB7XG4gICAgICAgIGlmKCF0aGlzLndhaXRpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XG4gICAgICAgICAgICAgICAgdGhpcy5Nb3ZlVGlsZXMoY2MudjIoMCwrMSksIDAsIDEsIDEsIDEpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZVRpbGVzKGNjLnYyKDAsLTEpLCAwLCAxLCB0aGlzLmdyaWQuaGVpZ2h0IC0gMiwgLTEpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZVRpbGVzKGNjLnYyKC0xLDApLCAxLCAxLCAwLCAxKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6ICAgXG4gICAgICAgICAgICAgICAgdGhpcy5Nb3ZlVGlsZXMoY2MudjIoMSwwKSwgdGhpcy5ncmlkLndpZHRoIC0gMiwgLTEsIDAsIDEpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9LFxuXG4gICAgTW92ZVRpbGVzKGRpcmVjdGlvbiwgc3RhcnRYLCBpbmNyZW1lbnRYLCBzdGFydFksIGluY3JlbWVudFkpe1xuICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlXG4gICAgICAgIGZvciAobGV0IHggPSBzdGFydFg7IHggPj0gMCAmJiB4IDwgdGhpcy5ncmlkLndpZHRoOyB4ICs9IGluY3JlbWVudFgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSBzdGFydFk7IHkgPj0gMCAmJiB5IDwgdGhpcy5ncmlkLmhlaWdodDsgeSArPSBpbmNyZW1lbnRZKVxuICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgY2VsbCA9IHRoaXMuZ3JpZC5HZXRDZWxsKHgsIHkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoY2VsbC50aWxlICE9IG51bGwpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkIHw9IHRoaXMuTW92ZVRpbGUoY2VsbC50aWxlLCBkaXJlY3Rpb24pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGNoYW5nZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuV2FpdEZvckNoYW5nZXMoKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBNb3ZlVGlsZSh0aWxlLCBkaXJlY3Rpb24pXG4gICAge1xuICAgICAgICB2YXIgbmV3Q2VsbCA9IG51bGxcbiAgICAgICAgdmFyIGFkamFjZW50ID0gdGhpcy5ncmlkLkdldEFkamFjZW50Q2VsbCh0aWxlLmNlbGwsIGRpcmVjdGlvbilcbiAgICAgICAgXG4gICAgICAgIHdoaWxlKGFkamFjZW50ICE9IG51bGwpXG4gICAgICAgIHsgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoYWRqYWNlbnQub2NjdXBpZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja0Nhbk1lcmdlKHRpbGUsIGFkamFjZW50LnRpbGUpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tZXJnZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLk1lcmdlKHRpbGUsIGFkamFjZW50LnRpbGUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5ld0NlbGwgPSBhZGphY2VudFxuICAgICAgICAgICAgYWRqYWNlbnQgPSB0aGlzLmdyaWQuR2V0QWRqYWNlbnRDZWxsKGFkamFjZW50LCBkaXJlY3Rpb24pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihuZXdDZWxsICE9IG51bGwgJiYgbmV3Q2VsbC5lbXB0eSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGlsZS5Nb3ZlVG8obmV3Q2VsbCwgdGhpcy5ncmlkLm5vZGUpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgXG4gICAgfSxcblxuICAgIGNoZWNrQ2FuTWVyZ2UoYSwgYilcbiAgICB7XG4gICAgICAgIHJldHVybiBhLm51bWJlciA9PSBiLm51bWJlclxuICAgIH0sXG5cbiAgICBNZXJnZShhLCBiKVxuICAgIHtcbiAgICAgICAgLy90aGlzLnRpbGVzLnNwbGljZShhKVxuXG4gICAgICAgIGxldCBpbmRleFRvRGVsZXRlID0gdGhpcy50aWxlcy5pbmRleE9mKGEpO1xuICAgICAgICBpZiAoaW5kZXhUb0RlbGV0ZSAhPT0gLTEpXG4gICAgICAgICAgICB0aGlzLnRpbGVzLnNwbGljZShpbmRleFRvRGVsZXRlLCAxKTtcbiAgICBcblxuICAgICAgICBhLk1lcmdlKGIuY2VsbCwgdGhpcy5ncmlkLm5vZGUpXG5cbiAgICAgICAgbGV0IG51bWJlciA9IGIubnVtYmVyICogMjtcbiAgICAgICAgYi5TZXRTdGF0ZShudW1iZXIpXG5cbiAgICAgICAgdGhpcy5nYW1lX2NvbnRyb2wuZ2V0Q29tcG9uZW50KFwiZ2FtZV9jb250cm9sXCIpLkluY3JlYXNlU2NvcmUobnVtYmVyKVxuXG4gICAgICAgIGIuQW5pbWF0ZVNjYWxlKDEuMiwgMC4zKVxuXG4gICAgICAgIHRoaXMuV2FpdEZvclNlY29uZCgyMDApXG4gICAgfSxcblxuICAgIFxuXG5cbiAgICBXYWl0Rm9yQ2hhbmdlcygpXG4gICAge1xuICAgICAgICB0aGlzLldhaXRGb3JTZWNvbmQoMjAwKVxuICAgICAgICAgICAgXG4gICAgICAgIGlmKHRoaXMudGlsZXMubGVuZ3RoICE9IHRoaXMuZ3JpZC5zaXplKVxuICAgICAgICAgICAgdGhpcy5DcmVhdGVUaWxlKClcblxuICAgICAgICBpZih0aGlzLkNoZWNrRm9yR2FtZU92ZXIoKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnYW1lT3ZlclwiKVxuICAgICAgICAgICAgdGhpcy5nYW1lX2NvbnRyb2wuZ2V0Q29tcG9uZW50KFwiZ2FtZV9jb250cm9sXCIpLkdhbWVPdmVyKClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9LFxuXG4gICAgYXN5bmMgV2FpdEZvclNlY29uZChtcylcbiAgICB7XG4gICAgICAgIHRoaXMud2FpdGluZyA9IHRydWVcblxuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKG1zKVxuXG4gICAgICAgIHRoaXMud2FpdGluZyA9IGZhbHNlXG4gICAgfSxcblxuICAgIHNsZWVwKG1zKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG4gICAgfSxcblxuICAgIENoZWNrRm9yR2FtZU92ZXIoKVxuICAgIHtcbiAgICAgICAgLy9T4butYSBs4bqhaSBsZW5ndGhcbiAgICAgICAgaWYodGhpcy50aWxlcy5sZW5ndGggIT0gdGhpcy5ncmlkLnNpemUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRpbGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLnRpbGVzW2ldLmNlbGwgIT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgdXAgPSB0aGlzLmdyaWQuR2V0QWRqYWNlbnRDZWxsKHRoaXMudGlsZXNbaV0uY2VsbCwgY2MudjIoMCwxKSlcbiAgICAgICAgICAgICAgICBsZXQgZG93biA9IHRoaXMuZ3JpZC5HZXRBZGphY2VudENlbGwodGhpcy50aWxlc1tpXS5jZWxsLCBjYy52MigwLC0xKSlcbiAgICAgICAgICAgICAgICBsZXQgbGVmdCA9IHRoaXMuZ3JpZC5HZXRBZGphY2VudENlbGwodGhpcy50aWxlc1tpXS5jZWxsLCBjYy52MigtMSwwKSlcbiAgICAgICAgICAgICAgICBsZXQgcmlnaHQgPSB0aGlzLmdyaWQuR2V0QWRqYWNlbnRDZWxsKHRoaXMudGlsZXNbaV0uY2VsbCwgY2MudjIoMSwwKSlcblxuICAgICAgICAgICAgICAgIGlmKHVwICE9IG51bGwgJiYgdGhpcy5jaGVja0Nhbk1lcmdlKHRoaXMudGlsZXNbaV0sIHVwLnRpbGUpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgICAgICAgICAgIGlmKGRvd24gIT0gbnVsbCAmJiB0aGlzLmNoZWNrQ2FuTWVyZ2UodGhpcy50aWxlc1tpXSwgZG93bi50aWxlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgICAgICAgICBpZihsZWZ0ICE9IG51bGwgJiYgdGhpcy5jaGVja0Nhbk1lcmdlKHRoaXMudGlsZXNbaV0sIGxlZnQudGlsZSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICAgICAgICAgICAgaWYocmlnaHQgIT0gbnVsbCAmJiB0aGlzLmNoZWNrQ2FuTWVyZ2UodGhpcy50aWxlc1tpXSwgcmlnaHQudGlsZSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuXG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TileCell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5e838fe95LfqpQSAaczS44', 'TileCell');
// Scripts/TileCell.ts

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
var TileCell = /** @class */ (function (_super) {
    __extends(TileCell, _super);
    function TileCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    TileCell.prototype.onLoad = function () {
        this.coordinates = new cc.Vec2(0, 0);
        this.updateState(); // Gọi hàm cập nhật trạng thái ban đầu
    };
    TileCell.prototype.updateState = function () {
        this.empty = this.tile === null;
        this.occupied = !this.empty;
    };
    // Hàm này được gọi khi thay đổi giá trị tile
    TileCell.prototype.SetTile = function (newTile) {
        this.tile = newTile;
        this.updateState(); // Cập nhật lại trạng thái
    };
    TileCell.prototype.start = function () {
    };
    TileCell = __decorate([
        ccclass
    ], TileCell);
    return TileCell;
}(cc.Component));
exports.default = TileCell;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGlsZUNlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBK0JBLENBQUM7SUF2Qkcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsc0NBQXNDO0lBQzlELENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQsNkNBQTZDO0lBQzdDLDBCQUFPLEdBQVAsVUFBUSxPQUFhO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLDBCQUEwQjtJQUNsRCxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUE1QmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErQjVCO0lBQUQsZUFBQztDQS9CRCxBQStCQyxDQS9CcUMsRUFBRSxDQUFDLFNBQVMsR0ErQmpEO2tCQS9Cb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVGlsZSBmcm9tIFwiLi9UaWxlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUNlbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgdGlsZTogVGlsZSAgICAgXG4gICAgZW1wdHk6IGJvb2xlYW5cbiAgICBvY2N1cGllZDogYm9vbGVhblxuXG4gICAgY29vcmRpbmF0ZXM6IGNjLlZlYzJcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IG5ldyBjYy5WZWMyKDAsIDApO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7IC8vIEfhu41pIGjDoG0gY+G6rXAgbmjhuq10IHRy4bqhbmcgdGjDoWkgYmFuIMSR4bqndVxuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKCkge1xuICAgICAgICB0aGlzLmVtcHR5ID0gdGhpcy50aWxlID09PSBudWxsO1xuICAgICAgICB0aGlzLm9jY3VwaWVkID0gIXRoaXMuZW1wdHk7XG4gICAgfVxuXG4gICAgLy8gSMOgbSBuw6B5IMSRxrDhu6NjIGfhu41pIGtoaSB0aGF5IMSR4buVaSBnacOhIHRy4buLIHRpbGVcbiAgICBTZXRUaWxlKG5ld1RpbGU6IFRpbGUpIHtcbiAgICAgICAgdGhpcy50aWxlID0gbmV3VGlsZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpOyAvLyBD4bqtcCBuaOG6rXQgbOG6oWkgdHLhuqFuZyB0aMOhaVxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TileRow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8cf27P4vhEY6PLBRZz9TM4', 'TileRow');
// Scripts/TileRow.ts

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
var TileRow = /** @class */ (function (_super) {
    __extends(TileRow, _super);
    function TileRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    TileRow.prototype.onLoad = function () {
        this.cells = this.getComponentsInChildren("TileCell");
    };
    TileRow = __decorate([
        ccclass
    ], TileRow);
    return TileRow;
}(cc.Component));
exports.default = TileRow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGlsZVJvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUloRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDs7SUFhQSxDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBUmdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FhM0I7SUFBRCxjQUFDO0NBYkQsQUFhQyxDQWJvQyxFQUFFLENBQUMsU0FBUyxHQWFoRDtrQkFib0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVGlsZUNlbGwgZnJvbSBcIi4vVGlsZUNlbGxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlUm93IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGNlbGxzOiBBcnJheTxUaWxlQ2VsbD5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oXCJUaWxlQ2VsbFwiKVxuICAgIH1cblxuICAgIC8vIHN0YXJ0ICgpIHt9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TileRow_v0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c477602WClK/LkugcqMbb40', 'TileRow_v0');
// Scripts/TileRow_v0.js

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
    // cells:{
    //     default:[],
    //     type: [TileCell]
    // }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.cells = this.getComponentsInChildren("TileCell");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGlsZVJvd192MC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsImNlbGxzIiwiZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4iLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUjtJQUNBO0lBQ0E7SUFDQTtFQUFBLENBQ0g7RUFFRDtFQUVBQyxNQUFNLFdBQUFBLE9BQUEsRUFBSTtJQUNOLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQ0MsdUJBQXVCLENBQUMsVUFBVSxDQUFDO0VBRXpELENBQUM7RUFFREMsS0FBSyxXQUFBQSxNQUFBLEVBQUksQ0FFVCxDQUFDLENBRUQ7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGNlbGxzOntcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6W10sXG4gICAgICAgIC8vICAgICB0eXBlOiBbVGlsZUNlbGxdXG4gICAgICAgIC8vIH1cbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLmNlbGxzID0gdGhpcy5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihcIlRpbGVDZWxsXCIpXG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile_v0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be0efyCP1tBn6YvIy7agVdo', 'Tile_v0');
// Scripts/Tile_v0.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
cc.Class({
  "extends": cc.Component,
  properties: {
    state: {
      "default": null,
      type: cc.TileState
    },
    cell: {
      "default": null,
      type: cc.TileCell
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.number = 0;
    this.locked = false;
  },
  start: function start() {},
  // update (dt) {},
  SetState: function SetState(number) {
    this.number = number;
    var text = this.node.getChildByName("Text");
    var data = cc.vv.TileState.getTileValue(number);
    if (data) {
      if (data.bgColor) {
        this.node.color = data.bgColor;
      }
      if (data.textColor) {
        text.color = data.textColor;
      }
      text.getComponent(cc.Label).string = this.number.toString();
    }
  },
  Spawn: function Spawn(cell, grid) {
    if (this.cell != null) {
      this.cell.SetTile(null); // Đặt tile của cell cũ thành null
    }

    this.cell = cell;
    this.cell.SetTile(this);

    // this.node.position = cell.node.convertToWorldSpaceAR(cc.v2(0,0))

    // Lấy vị trí của cell trong thế giới (world space)
    var cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v2(0, 0));

    // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
    var gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);

    // Đặt vị trí của tile bằng với vị trí cục bộ của grid
    this.node.setPosition(gridLocalPos);

    // Thêm tile vào làm con của grid
    //grid.addChild(this.node);
  },
  MoveTo: function MoveTo(cell, grid) {
    if (this.cell != null) {
      this.cell.SetTile(null); // Đặt tile của cell cũ thành null
    }

    this.cell = cell;
    this.cell.SetTile(this);

    // this.node.position = cell.node.convertToWorldSpaceAR(cc.v2(0,0))

    // Lấy vị trí của cell trong thế giới (world space)
    var cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v2(0, 0));

    // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
    var gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);

    // Đặt vị trí của tile bằng với vị trí cục bộ của grid
    // this.node.setPosition(gridLocalPos);

    this.AnimateMove(gridLocalPos, false);
  },
  Merge: function Merge(cell, grid) {
    if (this.cell != null) {
      this.cell.SetTile(null); // Đặt tile của cell cũ thành null
    }

    this.cell = null;

    // Lấy vị trí của cell trong thế giới (world space)
    var cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v2(0, 0));

    // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
    var gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);

    // Đặt vị trí của tile bằng với vị trí cục bộ của grid
    this.AnimateMove(gridLocalPos, true);

    //this.AnimateScale(1.2, 1)
  },
  AnimateMove: function AnimateMove(to, merging) {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var elapsed, duration, from, t;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            elapsed = 0;
            duration = 0.3;
            from = _this.node.position.clone();
          case 3:
            if (!(elapsed < duration)) {
              _context.next = 11;
              break;
            }
            t = elapsed / duration;
            _this.node.position = from.lerp(to, t);
            elapsed += 1 / 60;
            _context.next = 9;
            return _this.sleep(0);
          case 9:
            _context.next = 3;
            break;
          case 11:
            _this.node.position = to;
            if (merging) {
              _this.node.destroy();
            }
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  AnimateScale: function AnimateScale(scaleTo, duration) {
    var _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var from, halfDuration, elapsed, t, _t;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            from = _this2.node.scale;
            halfDuration = duration / 2; // Phần phóng to
            elapsed = 0;
          case 3:
            if (!(elapsed < halfDuration)) {
              _context2.next = 11;
              break;
            }
            t = elapsed / halfDuration;
            _this2.node.scale = cc.misc.lerp(from, scaleTo, t);
            elapsed += 1 / 60;
            _context2.next = 9;
            return _this2.sleep(1000 / 60);
          case 9:
            _context2.next = 3;
            break;
          case 11:
            // Phần thu nhỏ
            elapsed = 0;
          case 12:
            if (!(elapsed < halfDuration)) {
              _context2.next = 20;
              break;
            }
            _t = elapsed / halfDuration;
            _this2.node.scale = cc.misc.lerp(scaleTo, from, _t);
            elapsed += 1 / 60;
            _context2.next = 18;
            return _this2.sleep(1000 / 60);
          case 18:
            _context2.next = 12;
            break;
          case 20:
            _this2.node.scale = from;
          case 21:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  sleep: function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGlsZV92MC5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiVGlsZVN0YXRlIiwiY2VsbCIsIlRpbGVDZWxsIiwib25Mb2FkIiwibnVtYmVyIiwibG9ja2VkIiwic3RhcnQiLCJTZXRTdGF0ZSIsInRleHQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJkYXRhIiwidnYiLCJnZXRUaWxlVmFsdWUiLCJiZ0NvbG9yIiwiY29sb3IiLCJ0ZXh0Q29sb3IiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsInRvU3RyaW5nIiwiU3Bhd24iLCJncmlkIiwiU2V0VGlsZSIsImNlbGxXb3JsZFBvcyIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInYyIiwiZ3JpZExvY2FsUG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJzZXRQb3NpdGlvbiIsIk1vdmVUbyIsIkFuaW1hdGVNb3ZlIiwiTWVyZ2UiLCJ0byIsIm1lcmdpbmciLCJfdGhpcyIsIl9jYWxsZWUiLCJlbGFwc2VkIiwiZHVyYXRpb24iLCJmcm9tIiwidCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwb3NpdGlvbiIsImNsb25lIiwibGVycCIsInNsZWVwIiwiZGVzdHJveSIsIkFuaW1hdGVTY2FsZSIsInNjYWxlVG8iLCJfdGhpczIiLCJfY2FsbGVlMiIsImhhbGZEdXJhdGlvbiIsIl90IiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwic2NhbGUiLCJtaXNjIiwibXMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxJQUFBLElBQUFGLEdBQUEsQ0FBQUMsR0FBQSxJQUFBQyxJQUFBLENBQUFDLEtBQUEsS0FBQUMsT0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFB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QUNSO0lBQ0ksT0FBTyxJQUFJaEcsT0FBTyxDQUFDLFVBQUF4RCxPQUFPO01BQUEsT0FBSXlKLFVBQVUsQ0FBQ3pKLE9BQU8sRUFBRXdKLEVBQUUsQ0FBQztJQUFBLEVBQUM7RUFDMUQ7QUFFSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzdGF0ZTp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5UaWxlU3RhdGVcbiAgICAgICAgfSxcbiAgICAgICAgY2VsbDp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5UaWxlQ2VsbFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5udW1iZXIgPSAwXG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2VcbiAgICAgICAgXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcblxuICAgIFNldFN0YXRlKG51bWJlcil7XG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyXG5cbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUZXh0XCIpXG4gICAgICAgIGxldCBkYXRhID0gY2MudnYuVGlsZVN0YXRlLmdldFRpbGVWYWx1ZShudW1iZXIpXG4gICAgICAgIGlmIChkYXRhKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGRhdGEuYmdDb2xvcil7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gZGF0YS5iZ0NvbG9yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS50ZXh0Q29sb3Ipe1xuICAgICAgICAgICAgICAgIHRleHQuY29sb3IgPSBkYXRhLnRleHRDb2xvclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubnVtYmVyLnRvU3RyaW5nKCkgXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgU3Bhd24oY2VsbCwgZ3JpZCl7XG4gICAgICAgIGlmKHRoaXMuY2VsbCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNlbGwuU2V0VGlsZShudWxsKTsgLy8gxJDhurd0IHRpbGUgY+G7p2EgY2VsbCBjxakgdGjDoG5oIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2VsbCA9IGNlbGxcblxuXG4gICAgICAgIHRoaXMuY2VsbC5TZXRUaWxlKHRoaXMpXG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSBjZWxsLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsMCkpXG5cbiAgICAgICAgLy8gTOG6pXkgduG7iyB0csOtIGPhu6dhIGNlbGwgdHJvbmcgdGjhur8gZ2nhu5tpICh3b3JsZCBzcGFjZSlcbiAgICAgICAgbGV0IGNlbGxXb3JsZFBvcyA9IGNlbGwubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuXG4gICAgICAgIC8vIENodXnhu4NuIMSR4buVaSB24buLIHRyw60gdG/DoG4gY+G7pWMgY+G7p2EgY2VsbCBzYW5nIHbhu4sgdHLDrSBj4bulYyBi4buZIGPhu6dhIGdyaWRcbiAgICAgICAgbGV0IGdyaWRMb2NhbFBvcyA9IGdyaWQuY29udmVydFRvTm9kZVNwYWNlQVIoY2VsbFdvcmxkUG9zKTtcblxuICAgICAgICAvLyDEkOG6t3QgduG7iyB0csOtIGPhu6dhIHRpbGUgYuG6sW5nIHbhu5tpIHbhu4sgdHLDrSBj4bulYyBi4buZIGPhu6dhIGdyaWRcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGdyaWRMb2NhbFBvcyk7XG5cbiAgICAgICAgLy8gVGjDqm0gdGlsZSB2w6BvIGzDoG0gY29uIGPhu6dhIGdyaWRcbiAgICAgICAgLy9ncmlkLmFkZENoaWxkKHRoaXMubm9kZSk7XG5cbiAgICB9LFxuXG4gICAgTW92ZVRvKGNlbGwsIGdyaWQpe1xuICAgICAgICBpZih0aGlzLmNlbGwgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jZWxsLlNldFRpbGUobnVsbCk7IC8vIMSQ4bq3dCB0aWxlIGPhu6dhIGNlbGwgY8WpIHRow6BuaCBudWxsXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgIHRoaXMuY2VsbCA9IGNlbGxcbiAgICAgICAgdGhpcy5jZWxsLlNldFRpbGUodGhpcylcbiAgICAgICAgXG5cbiAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gY2VsbC5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLDApKVxuXG4gICAgICAgIC8vIEzhuqV5IHbhu4sgdHLDrSBj4bunYSBjZWxsIHRyb25nIHRo4bq/IGdp4bubaSAod29ybGQgc3BhY2UpXG4gICAgICAgIGxldCBjZWxsV29ybGRQb3MgPSBjZWxsLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcblxuICAgICAgICAvLyBDaHV54buDbiDEkeG7lWkgduG7iyB0csOtIHRvw6BuIGPhu6VjIGPhu6dhIGNlbGwgc2FuZyB24buLIHRyw60gY+G7pWMgYuG7mSBj4bunYSBncmlkXG4gICAgICAgIGxldCBncmlkTG9jYWxQb3MgPSBncmlkLmNvbnZlcnRUb05vZGVTcGFjZUFSKGNlbGxXb3JsZFBvcyk7XG5cbiAgICAgICAgLy8gxJDhurd0IHbhu4sgdHLDrSBj4bunYSB0aWxlIGLhurFuZyB24bubaSB24buLIHRyw60gY+G7pWMgYuG7mSBj4bunYSBncmlkXG4gICAgICAgIC8vIHRoaXMubm9kZS5zZXRQb3NpdGlvbihncmlkTG9jYWxQb3MpO1xuXG4gICAgICAgIHRoaXMuQW5pbWF0ZU1vdmUoZ3JpZExvY2FsUG9zLCBmYWxzZSlcblxuICAgICAgICBcbiAgICB9LFxuXG4gICAgTWVyZ2UoY2VsbCwgZ3JpZClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuY2VsbCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNlbGwuU2V0VGlsZShudWxsKTsgLy8gxJDhurd0IHRpbGUgY+G7p2EgY2VsbCBjxakgdGjDoG5oIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2VsbCA9IG51bGxcblxuICAgICAgICBcblxuICAgICAgICAvLyBM4bqleSB24buLIHRyw60gY+G7p2EgY2VsbCB0cm9uZyB0aOG6vyBnaeG7m2kgKHdvcmxkIHNwYWNlKVxuICAgICAgICBsZXQgY2VsbFdvcmxkUG9zID0gY2VsbC5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG5cbiAgICAgICAgLy8gQ2h1eeG7g24gxJHhu5VpIHbhu4sgdHLDrSB0b8OgbiBj4bulYyBj4bunYSBjZWxsIHNhbmcgduG7iyB0csOtIGPhu6VjIGLhu5kgY+G7p2EgZ3JpZFxuICAgICAgICBsZXQgZ3JpZExvY2FsUG9zID0gZ3JpZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjZWxsV29ybGRQb3MpO1xuXG4gICAgICAgIC8vIMSQ4bq3dCB24buLIHRyw60gY+G7p2EgdGlsZSBi4bqxbmcgduG7m2kgduG7iyB0csOtIGPhu6VjIGLhu5kgY+G7p2EgZ3JpZFxuICAgICAgICB0aGlzLkFuaW1hdGVNb3ZlKGdyaWRMb2NhbFBvcywgdHJ1ZSlcblxuICAgICAgICAvL3RoaXMuQW5pbWF0ZVNjYWxlKDEuMiwgMSlcblxuICAgIH0sXG5cbiAgICBhc3luYyBBbmltYXRlTW92ZSh0bywgbWVyZ2luZylcbiAgICB7XG4gICAgICAgIGxldCBlbGFwc2VkID0gMFxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDAuM1xuXG4gICAgICAgIGNvbnN0IGZyb20gPSB0aGlzLm5vZGUucG9zaXRpb24uY2xvbmUoKVxuXG4gICAgICAgIHdoaWxlKGVsYXBzZWQgPCBkdXJhdGlvbilcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgdCA9IGVsYXBzZWQvZHVyYXRpb25cbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGZyb20ubGVycCh0bywgdClcbiAgICAgICAgICAgIGVsYXBzZWQgKz0gMS82MFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgwKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdG9cblxuICAgICAgICBpZihtZXJnaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgQW5pbWF0ZVNjYWxlKHNjYWxlVG8sIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZyb20gPSB0aGlzLm5vZGUuc2NhbGU7ICBcbiAgICAgICAgY29uc3QgaGFsZkR1cmF0aW9uID0gZHVyYXRpb24gLyAyOyBcbiAgICAgICAgXG4gICAgICAgIC8vIFBo4bqnbiBwaMOzbmcgdG9cbiAgICAgICAgbGV0IGVsYXBzZWQgPSAwO1xuICAgICAgICB3aGlsZSAoZWxhcHNlZCA8IGhhbGZEdXJhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgdCA9IGVsYXBzZWQgLyBoYWxmRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSBjYy5taXNjLmxlcnAoZnJvbSwgc2NhbGVUbywgdCk7ICBcbiAgICBcbiAgICAgICAgICAgIGVsYXBzZWQgKz0gMSAvNjA7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDEwMDAvNjApOyBcbiAgICAgICAgfVxuICAgIFxuICAgIFxuICAgICAgICAvLyBQaOG6p24gdGh1IG5o4buPXG4gICAgICAgIGVsYXBzZWQgPSAwO1xuICAgICAgICB3aGlsZSAoZWxhcHNlZCA8IGhhbGZEdXJhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgdCA9IGVsYXBzZWQgLyBoYWxmRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSBjYy5taXNjLmxlcnAoc2NhbGVUbywgZnJvbSwgdCk7XG4gICAgXG4gICAgICAgICAgICBlbGFwc2VkICs9IDEgLyA2MDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMTAwMCAvIDYwKTsgIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IGZyb207XG4gICAgfSxcblxuICAgIHNsZWVwKG1zKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZV9jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2hGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBd0dDO1FBdEdzQixxQkFBZSxHQUFZLElBQUksQ0FBQTtRQUMvQixlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXhCLGtCQUFZLEdBQWEsSUFBSSxDQUFBO1FBRTdCLGlCQUFXLEdBQWEsSUFBSSxDQUFBOztJQWlHcEQsQ0FBQztJQTNGRyx3QkFBd0I7SUFFeEIsNkJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUUzRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUVkLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUVsQixDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUVJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7UUFFekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRTVCLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBR0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBRTVCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFSyxrQ0FBVyxHQUFqQixVQUFrQixFQUFVLEVBQUUsS0FBYTs7Ozs7NEJBRXZDLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUF2QixTQUF1QixDQUFBO3dCQUNuQixPQUFPLEdBQUcsQ0FBQyxDQUFBO3dCQUNULFFBQVEsR0FBRyxDQUFDLENBQUE7d0JBRVosSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFBOzs7NkJBRTdCLENBQUEsT0FBTyxHQUFHLFFBQVEsQ0FBQTt3QkFFZCxDQUFDLEdBQUcsT0FBTyxHQUFDLFFBQVEsQ0FBQTt3QkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTt3QkFDbEQsT0FBTyxJQUFJLENBQUMsR0FBQyxFQUFFLENBQUE7d0JBQ2YscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQW5CLFNBQW1CLENBQUE7Ozt3QkFHdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFBOzs7OztLQUU5QjtJQUVELDRCQUFLLEdBQUwsVUFBTSxFQUFVO1FBRVosT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLEtBQWE7UUFFbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBRTNDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLEtBQWE7UUFFdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBRSxDQUFBO0lBQ3RDLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBRUksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBRXBDLElBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTO1lBQ3JCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBRUksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3hELElBQUcsU0FBUyxLQUFLLElBQUk7WUFDakIsT0FBTyxDQUFDLENBQUE7UUFDWixPQUFPLFNBQVMsQ0FBQTtJQUNwQixDQUFDO0lBcEdrQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFBZ0M7SUFDL0I7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQTBCO0lBRXhCO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUE4QjtJQUU3QjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFBNkI7SUFQL0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXdHaEM7SUFBRCxtQkFBQztDQXhHRCxBQXdHQyxDQXhHeUMsRUFBRSxDQUFDLFNBQVMsR0F3R3JEO2tCQXhHb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5cbmltcG9ydCBUaWxlQm9hcmQgZnJvbSBcIi4vVGlsZUJvYXJkXCI7XG5pbXBvcnQgVGlsZVN0YXRlIGZyb20gXCIuL1RpbGVTdGF0ZVwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZV9jb250cm9sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBCb2FyZF9Db250YWluZXI6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIEdhbWVfT3ZlcjogY2MuTm9kZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgU2NvcmVfTnVtYmVyOiBjYy5MYWJlbCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgQmVzdF9OdW1iZXI6IGNjLkxhYmVsID0gbnVsbFxuXG4gICAgYm9hcmQ6IFRpbGVCb2FyZDtcbiAgICBzY29yZTogbnVtYmVyXG5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5Cb2FyZF9Db250YWluZXIuZ2V0Q29tcG9uZW50KFwiVGlsZUJvYXJkXCIpXG5cbiAgICAgICAgdGhpcy5zY29yZSA9IDBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuTmV3R2FtZSgpXG4gICAgICAgIFxuICAgIH1cblxuICAgIE5ld0dhbWUoKVxuICAgIHtcbiAgICAgICAgdGhpcy5TZXRTY29yZSgwKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkxvYWRIaWdoU2NvcmUoKS50b1N0cmluZygpKVxuICAgICAgICB0aGlzLkJlc3RfTnVtYmVyLnN0cmluZyA9IHRoaXMuTG9hZEhpZ2hTY29yZSgpLnRvU3RyaW5nKClcblxuICAgICAgICB0aGlzLkdhbWVfT3Zlci5vcGFjaXR5ID0gMFxuICAgICAgICB0aGlzLkdhbWVfT3Zlci5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLmJvYXJkLkNsZWFyQm9hcmQoKVxuICAgICAgICB0aGlzLmJvYXJkLkNyZWF0ZVRpbGUoMilcbiAgICAgICAgdGhpcy5ib2FyZC5DcmVhdGVUaWxlKDIpXG4gICAgICAgIFxuICAgIH1cblxuICAgIEdhbWVPdmVyKClcbiAgICB7XG5cbiAgICAgICAgdGhpcy5HYW1lX092ZXIuYWN0aXZlID0gdHJ1ZVxuXG4gICAgICAgIHRoaXMuQW5pbWF0ZUZhdGUoMTg2LCAxMDAwKVxuICAgIH1cblxuICAgIGFzeW5jIEFuaW1hdGVGYXRlKHRvOiBudW1iZXIsIGRlbGF5OiBudW1iZXIpXG4gICAge1xuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKGRlbGF5KVxuICAgICAgICBsZXQgZWxhcHNlZCA9IDBcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSAxXG5cbiAgICAgICAgY29uc3QgZnJvbSA9IHRoaXMuR2FtZV9PdmVyLm9wYWNpdHlcblxuICAgICAgICB3aGlsZShlbGFwc2VkIDwgZHVyYXRpb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBlbGFwc2VkL2R1cmF0aW9uXG4gICAgICAgICAgICB0aGlzLkdhbWVfT3Zlci5vcGFjaXR5ID0gY2MubWlzYy5sZXJwKGZyb20sIHRvLCB0KVxuICAgICAgICAgICAgZWxhcHNlZCArPSAxLzYwXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDApXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkdhbWVfT3Zlci5vcGFjaXR5ID0gdG9cblxuICAgIH1cblxuICAgIHNsZWVwKG1zOiBudW1iZXIpXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcbiAgICB9XG5cbiAgICBTZXRTY29yZShzY29yZTogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlXG4gICAgICAgIHRoaXMuU2NvcmVfTnVtYmVyLnN0cmluZyA9IHNjb3JlLnRvU3RyaW5nKCkgXG5cbiAgICAgICAgdGhpcy5TYXZlSGlnaFNjb3JlKClcbiAgICB9XG5cbiAgICBJbmNyZWFzZVNjb3JlKHBvaW50OiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLlNldFNjb3JlKHRoaXMuc2NvcmUgKyBwb2ludCApXG4gICAgfVxuXG4gICAgU2F2ZUhpZ2hTY29yZSgpXG4gICAge1xuICAgICAgICBsZXQgaGlnaHNjb3JlID0gdGhpcy5Mb2FkSGlnaFNjb3JlKClcblxuICAgICAgICBpZih0aGlzLnNjb3JlID4gaGlnaHNjb3JlKVxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlnaHNjb3JlXCIsIHRoaXMuc2NvcmUpICAgICBcbiAgICB9XG5cbiAgICBMb2FkSGlnaFNjb3JlKClcbiAgICB7XG4gICAgICAgIGxldCBoaWdoc2NvcmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaWdoc2NvcmVcIilcbiAgICAgICAgaWYoaGlnaHNjb3JlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgcmV0dXJuIGhpZ2hzY29yZVxuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ebf11x/4FhKf6j6LD7YtKlH', 'Tile');
// Scripts/Tile.ts

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
var TileState_1 = require("./TileState");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.number = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Tile.prototype.start = function () {
    };
    Tile.prototype.SetState = function (number) {
        this.number = number;
        var text = this.node.getChildByName("Text");
        var data = new TileState_1.default().getTileValue(number);
        if (data) {
            if (data.bgColor) {
                this.node.color = data.bgColor;
            }
            if (data.textColor) {
                text.color = data.textColor;
            }
            text.getComponent(cc.Label).string = this.number.toString();
        }
    };
    Tile.prototype.Spawn = function (cell, grid) {
        if (this.cell != null) {
            this.cell.SetTile(null); // Đặt tile của cell cũ thành null
        }
        this.cell = cell;
        this.cell.SetTile(this);
        // Lấy vị trí của cell trong thế giới (world space)
        var cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v2(0, 0));
        // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
        var gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);
        this.node.setPosition(gridLocalPos);
    };
    Tile.prototype.MoveTo = function (cell, grid) {
        if (this.cell != null) {
            this.cell.SetTile(null); // Đặt tile của cell cũ thành null
        }
        this.cell = cell;
        this.cell.SetTile(this);
        // Lấy vị trí của cell trong thế giới (world space)
        var cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
        var gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);
        this.AnimateMove(gridLocalPos, false);
    };
    Tile.prototype.Merge = function (cell, grid) {
        if (this.cell != null) {
            this.cell.SetTile(null); // Đặt tile của cell cũ thành null
        }
        this.cell = null;
        cell.tile.locked = true;
        // Lấy vị trí của cell trong thế giới (world space)
        var cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
        var gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);
        this.AnimateMove(gridLocalPos, true);
    };
    Tile.prototype.AnimateMove = function (to, merging) {
        return __awaiter(this, void 0, void 0, function () {
            var elapsed, duration, from, t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        elapsed = 0;
                        duration = 0.3;
                        from = this.node.position.clone();
                        _a.label = 1;
                    case 1:
                        if (!(elapsed < duration)) return [3 /*break*/, 3];
                        t = elapsed / duration;
                        this.node.position = from.lerp(to, t);
                        elapsed += 1 / 60;
                        return [4 /*yield*/, this.sleep(0)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        this.node.position = to;
                        if (merging) {
                            this.node.destroy();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Tile.prototype.AnimateMerge = function (to, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var from;
            return __generator(this, function (_a) {
                this.node.scale = 1;
                from = this.node.scale;
                // Phần phóng to 
                this.AnimateScale(from, to, duration);
                // Phần thu nhỏ
                this.AnimateScale(to, from, duration);
                return [2 /*return*/];
            });
        });
    };
    Tile.prototype.AnimateCreate = function (to, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var from;
            return __generator(this, function (_a) {
                this.node.scale = 0.6;
                from = this.node.scale;
                this.AnimateScale(from, to, duration);
                return [2 /*return*/];
            });
        });
    };
    //AnimateBasic
    Tile.prototype.AnimateScale = function (from, to, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var elapsed, halfDuration, t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        elapsed = 0;
                        halfDuration = duration / 2;
                        _a.label = 1;
                    case 1:
                        if (!(elapsed < halfDuration)) return [3 /*break*/, 3];
                        t = elapsed / halfDuration;
                        this.node.scale = cc.misc.lerp(from, to, t);
                        elapsed += 1 / 60;
                        return [4 /*yield*/, this.sleep(1000 / 60)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        this.node.scale = to;
                        return [2 /*return*/];
                }
            });
        });
    };
    Tile.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    Tile = __decorate([
        ccclass
    ], Tile);
    return Tile;
}(cc.Component));
exports.default = Tile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd0Rix5Q0FBb0M7QUFFOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUE0SUM7UUF4SUcsWUFBTSxHQUFXLENBQUMsQ0FBQTs7SUF3SXRCLENBQUM7SUFySUcsd0JBQXdCO0lBRXhCLG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0QsdUJBQVEsR0FBUixVQUFTLE1BQWM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFFcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDM0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxtQkFBUyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQy9DLElBQUksSUFBSSxFQUFDO1lBRUwsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFDO2dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7YUFDakM7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUM7Z0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFF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TyxHQUFHLFlBQVksQ0FBQzt3QkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFFNUMsT0FBTyxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUM7d0JBQ2pCLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQyxFQUFBOzt3QkFBekIsU0FBeUIsQ0FBQzs7O3dCQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7Ozs7O0tBQ3ZCO0lBRUQsb0JBQUssR0FBTCxVQUFNLEVBQVU7UUFFWixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUExSWdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E0SXhCO0lBQUQsV0FBQztDQTVJRCxBQTRJQyxDQTVJaUMsRUFBRSxDQUFDLFNBQVMsR0E0STdDO2tCQTVJb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVGlsZUNlbGwgZnJvbSBcIi4vVGlsZUNlbGxcIjtcbmltcG9ydCBUaWxlU3RhdGUgZnJvbSBcIi4vVGlsZVN0YXRlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBjZWxsOiBUaWxlQ2VsbFxuXG4gICAgbnVtYmVyOiBudW1iZXIgPSAwXG4gICAgbG9ja2VkOiBib29sZWFuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuXG4gICAgU2V0U3RhdGUobnVtYmVyOiBudW1iZXIpe1xuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlclxuXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGV4dFwiKVxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBUaWxlU3RhdGUoKS5nZXRUaWxlVmFsdWUobnVtYmVyKVxuICAgICAgICBpZiAoZGF0YSl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChkYXRhLmJnQ29sb3Ipe1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGRhdGEuYmdDb2xvclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEudGV4dENvbG9yKXtcbiAgICAgICAgICAgICAgICB0ZXh0LmNvbG9yID0gZGF0YS50ZXh0Q29sb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm51bWJlci50b1N0cmluZygpIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgU3Bhd24oY2VsbDpUaWxlQ2VsbCwgZ3JpZDpjYy5Ob2RlKXtcbiAgICAgICAgaWYodGhpcy5jZWxsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2VsbC5TZXRUaWxlKG51bGwpOyAvLyDEkOG6t3QgdGlsZSBj4bunYSBjZWxsIGPFqSB0aMOgbmggbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jZWxsID0gY2VsbFxuXG4gICAgICAgIHRoaXMuY2VsbC5TZXRUaWxlKHRoaXMpXG4gICAgICAgIC8vIEzhuqV5IHbhu4sgdHLDrSBj4bunYSBjZWxsIHRyb25nIHRo4bq/IGdp4bubaSAod29ybGQgc3BhY2UpXG4gICAgICAgIGxldCBjZWxsV29ybGRQb3MgPSBjZWxsLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcblxuICAgICAgICAvLyBDaHV54buDbiDEkeG7lWkgduG7iyB0csOtIHRvw6BuIGPhu6VjIGPhu6dhIGNlbGwgc2FuZyB24buLIHRyw60gY+G7pWMgYuG7mSBj4bunYSBncmlkXG4gICAgICAgIGxldCBncmlkTG9jYWxQb3MgPSBncmlkLmNvbnZlcnRUb05vZGVTcGFjZUFSKGNlbGxXb3JsZFBvcyk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGdyaWRMb2NhbFBvcyk7XG4gICAgfVxuXG4gICAgTW92ZVRvKGNlbGw6IFRpbGVDZWxsLCBncmlkOiBjYy5Ob2RlKXtcbiAgICAgICAgaWYodGhpcy5jZWxsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2VsbC5TZXRUaWxlKG51bGwpOyAvLyDEkOG6t3QgdGlsZSBj4bunYSBjZWxsIGPFqSB0aMOgbmggbnVsbFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2VsbCA9IGNlbGxcbiAgICAgICAgdGhpcy5jZWxsLlNldFRpbGUodGhpcylcbiAgICAgICAgLy8gTOG6pXkgduG7iyB0csOtIGPhu6dhIGNlbGwgdHJvbmcgdGjhur8gZ2nhu5tpICh3b3JsZCBzcGFjZSlcbiAgICAgICAgbGV0IGNlbGxXb3JsZFBvcyA9IGNlbGwubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjMoMCwgMCwgMCkpO1xuICAgICAgICAvLyBDaHV54buDbiDEkeG7lWkgduG7iyB0csOtIHRvw6BuIGPhu6VjIGPhu6dhIGNlbGwgc2FuZyB24buLIHRyw60gY+G7pWMgYuG7mSBj4bunYSBncmlkXG4gICAgICAgIGxldCBncmlkTG9jYWxQb3MgPSBncmlkLmNvbnZlcnRUb05vZGVTcGFjZUFSKGNlbGxXb3JsZFBvcyk7XG5cbiAgICAgICAgdGhpcy5BbmltYXRlTW92ZShncmlkTG9jYWxQb3MsIGZhbHNlKVxuICAgIH1cblxuICAgIE1lcmdlKGNlbGw6IFRpbGVDZWxsLCBncmlkOiBjYy5Ob2RlKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5jZWxsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2VsbC5TZXRUaWxlKG51bGwpOyAvLyDEkOG6t3QgdGlsZSBj4bunYSBjZWxsIGPFqSB0aMOgbmggbnVsbFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2VsbCA9IG51bGxcbiAgICAgICAgY2VsbC50aWxlLmxvY2tlZCA9IHRydWU7XG4gICAgICAgIC8vIEzhuqV5IHbhu4sgdHLDrSBj4bunYSBjZWxsIHRyb25nIHRo4bq/IGdp4bubaSAod29ybGQgc3BhY2UpXG4gICAgICAgIGxldCBjZWxsV29ybGRQb3MgPSBjZWxsLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcbiAgICAgICAgLy8gQ2h1eeG7g24gxJHhu5VpIHbhu4sgdHLDrSB0b8OgbiBj4bulYyBj4bunYSBjZWxsIHNhbmcgduG7iyB0csOtIGPhu6VjIGLhu5kgY+G7p2EgZ3JpZFxuICAgICAgICBsZXQgZ3JpZExvY2FsUG9zID0gZ3JpZC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjZWxsV29ybGRQb3MpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5BbmltYXRlTW92ZShncmlkTG9jYWxQb3MsIHRydWUpXG5cbiAgICB9XG5cbiAgICBhc3luYyBBbmltYXRlTW92ZSh0bzogY2MuVmVjMywgbWVyZ2luZzogYm9vbGVhbilcbiAgICB7XG4gICAgICAgIGxldCBlbGFwc2VkID0gMFxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDAuM1xuXG4gICAgICAgIGNvbnN0IGZyb20gPSB0aGlzLm5vZGUucG9zaXRpb24uY2xvbmUoKVxuXG4gICAgICAgIHdoaWxlKGVsYXBzZWQgPCBkdXJhdGlvbilcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgdCA9IGVsYXBzZWQvZHVyYXRpb25cbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGZyb20ubGVycCh0bywgdClcbiAgICAgICAgICAgIGVsYXBzZWQgKz0gMS82MFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgwKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdG9cblxuICAgICAgICBpZihtZXJnaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBBbmltYXRlTWVyZ2UodG86IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxXG4gICAgICAgIGNvbnN0IGZyb20gPSB0aGlzLm5vZGUuc2NhbGU7IFxuICAgICAgICAvLyBQaOG6p24gcGjDs25nIHRvIFxuICAgICAgICB0aGlzLkFuaW1hdGVTY2FsZShmcm9tLCB0bywgZHVyYXRpb24pXG4gICAgICAgIC8vIFBo4bqnbiB0aHUgbmjhu49cbiAgICAgICAgdGhpcy5BbmltYXRlU2NhbGUodG8sIGZyb20sIGR1cmF0aW9uKVxuICAgIH1cblxuXG4gICAgXG4gICAgYXN5bmMgQW5pbWF0ZUNyZWF0ZSh0bzogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuNlxuICAgICAgICBjb25zdCBmcm9tID0gdGhpcy5ub2RlLnNjYWxlOyAgXG5cbiAgICAgICAgdGhpcy5BbmltYXRlU2NhbGUoZnJvbSwgdG8sIGR1cmF0aW9uKVxuXG4gICAgfVxuXG4gICAgLy9BbmltYXRlQmFzaWNcbiAgICBhc3luYyBBbmltYXRlU2NhbGUoZnJvbTogbnVtYmVyLCB0bzpudW1iZXIsIGR1cmF0aW9uOm51bWJlcilcbiAgICB7XG4gICAgICAgIGxldCBlbGFwc2VkID0gMDtcbiAgICAgICAgY29uc3QgaGFsZkR1cmF0aW9uID0gZHVyYXRpb24gLyAyOyBcbiAgICAgICAgd2hpbGUgKGVsYXBzZWQgPCBoYWxmRHVyYXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBlbGFwc2VkIC8gaGFsZkR1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gY2MubWlzYy5sZXJwKGZyb20sIHRvLCB0KTsgIFxuICAgIFxuICAgICAgICAgICAgZWxhcHNlZCArPSAxIC82MDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMTAwMC82MCk7IFxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHRvXG4gICAgfVxuXG4gICAgc2xlZXAobXM6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game_control_v0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0eb905MohMl7YTftlu/fJP', 'game_control_v0');
// Scripts/game_control_v0.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  properties: {
    Board_Container: cc.Node,
    Game_Over: cc.Node,
    Score_Number: cc.Label,
    Best_Number: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.vv = {};
    var TileState = require("TileState");
    cc.vv.TileState = new TileState();
  },
  start: function start() {
    this.board = this.Board_Container.getComponent("TileBoard");
    //this.score = this.Score_Number.getComponent("")

    this.score = 0;
    this.NewGame();
  },
  NewGame: function NewGame() {
    this.SetScore(0);
    console.log(this.LoadHighScore().toString());
    this.Best_Number.string = this.LoadHighScore().toString();
    this.Game_Over.opacity = 0;
    this.Game_Over.enabled = false;
    this.board.node.enabled = true;
    this.board.ClearBoard();
    this.board.CreateTile();
    this.board.CreateTile();
  },
  GameOver: function GameOver() {
    this.board.node.enabled = false;
    this.Game_Over.enabled = true;
    this.AnimateFate(186, 1000);
  },
  AnimateFate: function AnimateFate(to, delay) {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var elapsed, duration, from, t;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.sleep(delay);
          case 2:
            elapsed = 0;
            duration = 1;
            from = _this.Game_Over.opacity;
          case 5:
            if (!(elapsed < duration)) {
              _context.next = 13;
              break;
            }
            t = elapsed / duration;
            _this.Game_Over.opacity = cc.misc.lerp(from, to, t);
            elapsed += 1 / 60;
            _context.next = 11;
            return _this.sleep(0);
          case 11:
            _context.next = 5;
            break;
          case 13:
            _this.Game_Over.opacity = to;
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  sleep: function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  },
  SetScore: function SetScore(score) {
    this.score = score;
    this.Score_Number.string = score.toString();
    this.SaveHighScore();
  },
  IncreaseScore: function IncreaseScore(point) {
    this.SetScore(this.score + point);
  },
  SaveHighScore: function SaveHighScore() {
    var highscore = this.LoadHighScore();
    if (this.score > highscore) cc.sys.localStorage.setItem("highscore", this.score);
  },
  LoadHighScore: function LoadHighScore() {
    var highscore = cc.sys.localStorage.getItem("highscore");
    if (highscore === null) return 0;
    return highscore;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZV9jb250cm9sX3YwLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJCb2FyZF9Db250YWluZXIiLCJOb2RlIiwiR2FtZV9PdmVyIiwiU2NvcmVfTnVtYmVyIiwiTGFiZWwiLCJCZXN0X051bWJlciIsIm9uTG9hZCIsInZ2IiwiVGlsZVN0YXRlIiwicmVxdWlyZSIsInN0YXJ0IiwiYm9hcmQiLCJnZXRDb21wb25lbnQiLCJzY29yZSIsIk5ld0dhbWUiLCJTZXRTY29yZSIsImNvbnNvbGUiLCJsb2ciLCJMb2FkSGlnaFNjb3JlIiwidG9TdHJpbmciLCJzdHJpbmciLCJvcGFjaXR5IiwiZW5hYmxlZCIsIm5vZGUiLCJDbGVhckJvYXJkIiwiQ3JlYXRlVGlsZSIsIkdhbWVPdmVyIiwiQW5pbWF0ZUZhdGUiLCJ0byIsImRlbGF5IiwiX3RoaXMiLCJfY2FsbGVlIiwiZWxhcHNlZCIsImR1cmF0aW9uIiwiZnJvbSIsInQiLCJfY2FsbGVlJCIsIl9jb250ZXh0Iiwic2xlZXAiLCJtaXNjIiwibGVycCIsIm1zIiwic2V0VGltZW91dCIsIlNhdmVIaWdoU2NvcmUiLCJJbmNyZWFzZVNjb3JlIiwicG9pbnQiLCJoaWdoc2NvcmUiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxJQUFBRixHQUFBLENBQUFDLEdBQUEsSUFBQUMsSUFBQSxDQUFBQyxLQUFBLEtBQUFDLE9BQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxjQUFBLEdBQUFGLE9BQUEsQ0FBQUcsUUFBQSxrQkFBQUMsbUJBQUEsR0FBQUosT0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxpQkFBQSxHQUFB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RUFFREssYUFBYSxXQUFBQSxjQUFBLEVBQ2I7SUFDSSxJQUFJNEIsU0FBUyxHQUFHbEQsRUFBRSxDQUFDbUQsR0FBRyxDQUFDQyxZQUFZLENBQUNFLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDeEQsSUFBR0osU0FBUyxLQUFLLElBQUksRUFDakIsT0FBTyxDQUFDO0lBQ1osT0FBT0EsU0FBUztFQUNwQjtBQUVKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIEJvYXJkX0NvbnRhaW5lcjogY2MuTm9kZSxcclxuICAgICAgICBHYW1lX092ZXI6IGNjLk5vZGUsXHJcblxyXG4gICAgICAgIFNjb3JlX051bWJlcjogY2MuTGFiZWwsXHJcbiAgICAgICAgQmVzdF9OdW1iZXI6IGNjLkxhYmVsXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MudnYgPSB7fVxyXG5cclxuICAgICAgICBsZXQgVGlsZVN0YXRlID0gcmVxdWlyZShcIlRpbGVTdGF0ZVwiKVxyXG4gICAgICAgIGNjLnZ2LlRpbGVTdGF0ZSA9IG5ldyBUaWxlU3RhdGUoKVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuQm9hcmRfQ29udGFpbmVyLmdldENvbXBvbmVudChcIlRpbGVCb2FyZFwiKVxyXG4gICAgICAgIC8vdGhpcy5zY29yZSA9IHRoaXMuU2NvcmVfTnVtYmVyLmdldENvbXBvbmVudChcIlwiKVxyXG5cclxuICAgICAgICB0aGlzLnNjb3JlID0gMFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuTmV3R2FtZSgpXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIE5ld0dhbWUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuU2V0U2NvcmUoMClcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkxvYWRIaWdoU2NvcmUoKS50b1N0cmluZygpKVxyXG4gICAgICAgIHRoaXMuQmVzdF9OdW1iZXIuc3RyaW5nID0gdGhpcy5Mb2FkSGlnaFNjb3JlKCkudG9TdHJpbmcoKVxyXG5cclxuICAgICAgICB0aGlzLkdhbWVfT3Zlci5vcGFjaXR5ID0gMFxyXG4gICAgICAgIHRoaXMuR2FtZV9PdmVyLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYm9hcmQubm9kZS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYm9hcmQuQ2xlYXJCb2FyZCgpXHJcbiAgICAgICAgdGhpcy5ib2FyZC5DcmVhdGVUaWxlKClcclxuICAgICAgICB0aGlzLmJvYXJkLkNyZWF0ZVRpbGUoKVxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBHYW1lT3ZlcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5ub2RlLmVuYWJsZWQgPSBmYWxzZVxyXG5cclxuICAgICAgICB0aGlzLkdhbWVfT3Zlci5lbmFibGVkID0gdHJ1ZVxyXG5cclxuICAgICAgICB0aGlzLkFuaW1hdGVGYXRlKDE4NiwgMTAwMClcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgQW5pbWF0ZUZhdGUodG8sIGRlbGF5KVxyXG4gICAge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoZGVsYXkpXHJcbiAgICAgICAgbGV0IGVsYXBzZWQgPSAwXHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSAxXHJcblxyXG4gICAgICAgIGNvbnN0IGZyb20gPSB0aGlzLkdhbWVfT3Zlci5vcGFjaXR5XHJcblxyXG4gICAgICAgIHdoaWxlKGVsYXBzZWQgPCBkdXJhdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBlbGFwc2VkL2R1cmF0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuR2FtZV9PdmVyLm9wYWNpdHkgPSBjYy5taXNjLmxlcnAoZnJvbSwgdG8sIHQpXHJcbiAgICAgICAgICAgIGVsYXBzZWQgKz0gMS82MFxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLkdhbWVfT3Zlci5vcGFjaXR5ID0gdG9cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHNsZWVwKG1zKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxyXG4gICAgfSxcclxuXHJcbiAgICBTZXRTY29yZShzY29yZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmVcclxuICAgICAgICB0aGlzLlNjb3JlX051bWJlci5zdHJpbmcgPSBzY29yZS50b1N0cmluZygpIFxyXG5cclxuICAgICAgICB0aGlzLlNhdmVIaWdoU2NvcmUoKVxyXG4gICAgfSxcclxuXHJcbiAgICBJbmNyZWFzZVNjb3JlKHBvaW50KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuU2V0U2NvcmUodGhpcy5zY29yZSArIHBvaW50IClcclxuICAgIH0sXHJcblxyXG4gICAgU2F2ZUhpZ2hTY29yZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGhpZ2hzY29yZSA9IHRoaXMuTG9hZEhpZ2hTY29yZSgpXHJcblxyXG4gICAgICAgIGlmKHRoaXMuc2NvcmUgPiBoaWdoc2NvcmUpXHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpZ2hzY29yZVwiLCB0aGlzLnNjb3JlKSAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIExvYWRIaWdoU2NvcmUoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBoaWdoc2NvcmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaWdoc2NvcmVcIilcclxuICAgICAgICBpZihoaWdoc2NvcmUgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgcmV0dXJuIGhpZ2hzY29yZVxyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
