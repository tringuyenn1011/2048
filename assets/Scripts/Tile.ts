// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import TileCell from "./TileCell";
import TileState from "./TileState";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Tile extends cc.Component {

    cell: TileCell

    number: number = 0
    locked: boolean

    // LIFE-CYCLE CALLBACKS:

    start () {

    }


    SetState(number: number){
        this.number = number

        let text = this.node.getChildByName("Text")
        let data = new TileState().getTileValue(number)
        if (data){
            
            if (data.bgColor){
                this.node.color = data.bgColor
            }
            if (data.textColor){
                text.color = data.textColor
            }
            text.getComponent(cc.Label).string = this.number.toString() 
        }
    }

    Spawn(cell:TileCell, grid:cc.Node){
        if(this.cell != null) {
            this.cell.SetTile(null); // Đặt tile của cell cũ thành null
        }

        this.cell = cell

        this.cell.SetTile(this)
        // Lấy vị trí của cell trong thế giới (world space)
        let cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v2(0, 0));

        // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
        let gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);

        this.node.setPosition(gridLocalPos);
    }

    MoveTo(cell: TileCell, grid: cc.Node){
        if(this.cell != null) {
            this.cell.SetTile(null); // Đặt tile của cell cũ thành null
        }
        this.cell = cell
        this.cell.SetTile(this)
        // Lấy vị trí của cell trong thế giới (world space)
        let cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
        let gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);

        this.AnimateMove(gridLocalPos, false)
    }

    Merge(cell: TileCell, grid: cc.Node)
    {
        if(this.cell != null) {
            this.cell.SetTile(null); // Đặt tile của cell cũ thành null
        }
        this.cell = null
        cell.tile.locked = true;
        // Lấy vị trí của cell trong thế giới (world space)
        let cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
        let gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);
        
        this.AnimateMove(gridLocalPos, true)

    }

    async AnimateMove(to: cc.Vec3, merging: boolean)
    {
        let elapsed = 0
        const duration = 0.3

        const from = this.node.position.clone()

        while(elapsed < duration)
        {
            const t = elapsed/duration
            this.node.position = from.lerp(to, t)
            elapsed += 1/60
            await this.sleep(0)
        }

        this.node.position = to

        if(merging)
        {
            this.node.destroy()
        }
    }

    async AnimateMerge(to: number, duration: number) {
        this.node.scale = 1
        const from = this.node.scale; 
        // Phần phóng to 
        this.AnimateScale(from, to, duration)
        // Phần thu nhỏ
        this.AnimateScale(to, from, duration)
    }


    
    async AnimateCreate(to: number, duration: number) {
        this.node.scale = 0.6
        const from = this.node.scale;  

        this.AnimateScale(from, to, duration)

    }

    //AnimateBasic
    async AnimateScale(from: number, to:number, duration:number)
    {
        let elapsed = 0;
        const halfDuration = duration / 2; 
        while (elapsed < halfDuration) {
            const t = elapsed / halfDuration;
            this.node.scale = cc.misc.lerp(from, to, t);  
    
            elapsed += 1 /60;
            await this.sleep(1000/60); 
        }
        this.node.scale = to
    }

    sleep(ms: number)
    {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

}
