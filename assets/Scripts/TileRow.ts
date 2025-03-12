// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import TileCell from "./TileCell";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TileRow extends cc.Component {

    cells: Array<TileCell>

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.cells = this.getComponentsInChildren("TileCell")
    }

    // start () {}

    // update (dt) {}
}
