// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Tile from "./Tile";
import TileCell from "./TileCell";
import TileRow from "./TileRow";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TileGrid extends cc.Component {

    size: number
    height: number
    width: number

    rows: Array<TileRow>
    cells: Array<TileCell>

    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
        this.size = 16
        this.height = 4
        this.width = 4


        this.rows = this.getComponentsInChildren("TileRow")
        this.cells = this.getComponentsInChildren("TileCell")
    }

    start () 
    {
        for(let y=0; y<this.rows.length; y++)
            for(let x=0; x<this.rows[y].cells.length; x++)                
                this.rows[y].cells[x].coordinates = cc.v2(x, y)    
                
            
    }

    GetCell(x: number, y:number)
    {
        if(x >= 0 && x < this.width && y >= 0 && y < this.height)
            return this.rows[y].cells[x]
        
        else        
            return null
    }

    GetCellTemp(coordinates: cc.Vec2) 
    {
        return this.GetCell(coordinates.x, coordinates.y)
    }

    GetAdjacentCell(cell: TileCell, direction: cc.Vec2)
    {
        let coordinates = new cc.Vec2(cell.coordinates.x, cell.coordinates.y); 
        coordinates.x += direction.x
        coordinates.y -= direction.y
        
        return this.GetCellTemp(coordinates)
    }

    GetRandomEmptyCell() 
    {
        let index = Math.floor(Math.random()*this.cells.length)
        let startingIndex = index

        while(this.cells[index].occupied)
        {
            
            index++
            if(index >= this.cells.length)                
                index = 0

            if(index == startingIndex)                
                return null
    
        }

        return this.cells[index]
    }
    // update (dt) {}
}
