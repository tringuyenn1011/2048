
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