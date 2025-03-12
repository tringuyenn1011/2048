// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Tile from "./Tile";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TileCell extends cc.Component {

    tile: Tile     
    empty: boolean
    occupied: boolean

    coordinates: cc.Vec2

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.coordinates = new cc.Vec2(0, 0);
        this.updateState(); // Gọi hàm cập nhật trạng thái ban đầu
    }

    updateState() {
        this.empty = this.tile === null;
        this.occupied = !this.empty;
    }

    // Hàm này được gọi khi thay đổi giá trị tile
    SetTile(newTile: Tile) {
        this.tile = newTile;
        this.updateState(); // Cập nhật lại trạng thái
    }

    start () {

    }

    // update (dt) {}
}
