// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Tile from "./Tile";
import TileGrid from "./TileGrid";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TileBoard extends cc.Component {

    @property(cc.Prefab)
    tile_prefab: cc.Prefab = null

    @property(cc.Node)
    game_control: cc.Node = null

    grid: TileGrid
    tiles: Array<Tile>
    waiting: boolean

    random: number
    count: number

    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
        this.grid = this.node.getChildByName("Grid").getComponent("TileGrid")
        this.tiles = new Array(16)
        this.waiting = false
        

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    ClearBoard()
    {
        this.random = 0
        this.count = 1
        this.random = Math.floor(Math.random()*(20-8) + 8)
        for(let i = 0; i < this.grid.cells.length; i++)
        {
            if(this.grid.cells[i] != null)
                this.grid.cells[i].SetTile(null);
        }

        for(let i = 0; i < this.tiles.length; i++)
        {
            if(this.tiles[i] != null)
                this.tiles[i].node.destroy()
        }

        this.tiles.splice(0, this.tiles.length);
    }

    CreateTile(number) 
    {
        let tile = cc.instantiate(this.tile_prefab).getComponent("Tile")
        this.grid.node.addChild(tile.node)
        tile.SetState(number)

        tile.AnimateCreate(1, 0.2)

        tile.Spawn(this.grid.GetRandomEmptyCell(), this.grid.node)

        this.tiles.push(tile)
    }

    onKeyDown (event) 
    {
        if(!this.waiting)
        {
            switch(event.keyCode) {
            case cc.macro.KEY.up:
            case cc.macro.KEY.w:
                this.MoveTiles(cc.v2(0,+1), 0, 1, 1, 1)
                break
            case cc.macro.KEY.down:
            case cc.macro.KEY.s:
                this.MoveTiles(cc.v2(0,-1), 0, 1, this.grid.height - 2, -1)
                break
            case cc.macro.KEY.left:
            case cc.macro.KEY.a:
                this.MoveTiles(cc.v2(-1,0), 1, 1, 0, 1)
                break
            case cc.macro.KEY.right:
            case cc.macro.KEY.d:   
                this.MoveTiles(cc.v2(1,0), this.grid.width - 2, -1, 0, 1)
                break
            }
        }
        
    }

    MoveTiles(direction: cc.Vec2, startX: number, incrementX: number, startY: number, incrementY: number)
    {
        let count = 0
        for (let x = startX; x >= 0 && x < this.grid.width; x += incrementX)
        {
            for (let y = startY; y >= 0 && y < this.grid.height; y += incrementY)
            {
                let cell = this.grid.GetCell(x, y)
                
                if(cell.tile != null)
                    count += this.MoveTile(cell.tile, direction) == true? 1 : 0
                       
            }
        }
        
        if(count != 0)
        {
            this.WaitForChanges()
            //changed = false
            count = 0
        }
    }
    
    MoveTile(tile:Tile, direction: cc.Vec2)
    {
        var newCell = null
        var adjacent = this.grid.GetAdjacentCell(tile.cell, direction)
        
        while(adjacent != null)
        {              
            if(adjacent.occupied)
            {
                if(this.checkCanMerge(tile, adjacent.tile))
                {
                    //merge
                    this.Merge(tile, adjacent.tile)
                    return true
                }
                break;
            }
            newCell = adjacent
            adjacent = this.grid.GetAdjacentCell(adjacent, direction)
            
            
        }
        
        if(newCell != null && newCell.empty)
        {
            tile.MoveTo(newCell, this.grid.node)
            return true;
        }

        return false
            
    }

    checkCanMerge(a: Tile, b:Tile)
    {
        return a.number == b.number && !b.locked
    }

    Merge(a: Tile, b: Tile)
    {
        //this.tiles.splice(a)

        let indexToDelete = this.tiles.indexOf(a);
        if (indexToDelete !== -1)
            this.tiles.splice(indexToDelete, 1);
    

        a.Merge(b.cell, this.grid.node)

        let number = b.number * 2;
        b.SetState(number)

        this.game_control.getComponent("game_control").IncreaseScore(number)

        b.AnimateMerge(1.2, 0.4)

        this.WaitForSecond(200)
    }

    


    WaitForChanges()
    {
        this.WaitForSecond(300)


        for(let i=0; i < this.tiles.length; i++)
            if(this.tiles[i] != null)
                this.tiles[i].locked = false;
        
        if(this.tiles.length != this.grid.size)
        {
            if(this.count != this.random)
            {
                this.CreateTile(2)
                this.count++
            }
            else
            {
                this.CreateTile(4)
                this.count = 1
                this.random = Math.floor(Math.random()*(20-8) + 8)
                
            }
        }
            

        if(this.CheckForGameOver())
        {
            console.log("gameOver")
            this.game_control.getComponent("game_control").GameOver()
        }
        
    }

    async WaitForSecond(ms: number)
    {
        this.waiting = true

        await this.sleep(ms)

        this.waiting = false
    }

    sleep(ms: number)
    {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    CheckForGameOver()
    {
        //Sửa lại length
        if(this.tiles.length != this.grid.size)
        {
            
            return false
        }
            

        for(let i = 0; i < this.tiles.length; i++)
        {
            if(this.tiles[i].cell != null)
            {
                let up = this.grid.GetAdjacentCell(this.tiles[i].cell, cc.v2(0,1))
                let down = this.grid.GetAdjacentCell(this.tiles[i].cell, cc.v2(0,-1))
                let left = this.grid.GetAdjacentCell(this.tiles[i].cell, cc.v2(-1,0))
                let right = this.grid.GetAdjacentCell(this.tiles[i].cell, cc.v2(1,0))

                if(up != null && this.checkCanMerge(this.tiles[i], up.tile))
                    return false

                if(down != null && this.checkCanMerge(this.tiles[i], down.tile))
                    return false

                if(left != null && this.checkCanMerge(this.tiles[i], left.tile))
                    return false

                if(right != null && this.checkCanMerge(this.tiles[i], right.tile))
                    return false
            }

        }
        return true
    }

}
