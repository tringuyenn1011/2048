cc.Class({
    extends: cc.Component,

    properties: {

        tile_prefab: cc.Prefab,

        game_control: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.grid = this.node.getChildByName("Grid").getComponent("TileGrid")
        this.tiles = new Array(16)
        this.waiting = false
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    ClearBoard()
    {
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
    },

    CreateTile() {
        let tile = cc.instantiate(this.tile_prefab).getComponent("Tile")
        this.grid.node.addChild(tile.node)

        tile.SetState(2)


        tile.Spawn(this.grid.GetRandomEmptyCell(), this.grid.node)

        this.tiles.push(tile)
    },

    onKeyDown (event) {
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
        
    },

    MoveTiles(direction, startX, incrementX, startY, incrementY){
        let changed = false
        for (let x = startX; x >= 0 && x < this.grid.width; x += incrementX)
        {
            for (let y = startY; y >= 0 && y < this.grid.height; y += incrementY)
            {

                cell = this.grid.GetCell(x, y)
                
                if(cell.tile != null)
                {
                    changed |= this.MoveTile(cell.tile, direction)
                }
                    
            }
        }

        if(changed)
        {
            this.WaitForChanges()
        }
    },
    
    MoveTile(tile, direction)
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
            
    },

    checkCanMerge(a, b)
    {
        return a.number == b.number
    },

    Merge(a, b)
    {
        //this.tiles.splice(a)

        let indexToDelete = this.tiles.indexOf(a);
        if (indexToDelete !== -1)
            this.tiles.splice(indexToDelete, 1);
    

        a.Merge(b.cell, this.grid.node)

        let number = b.number * 2;
        b.SetState(number)

        this.game_control.getComponent("game_control").IncreaseScore(number)

        b.AnimateScale(1.2, 0.3)

        this.WaitForSecond(200)
    },

    


    WaitForChanges()
    {
        this.WaitForSecond(200)
            
        if(this.tiles.length != this.grid.size)
            this.CreateTile()

        if(this.CheckForGameOver())
        {
            console.log("gameOver")
            this.game_control.getComponent("game_control").GameOver()
        }
        
    },

    async WaitForSecond(ms)
    {
        this.waiting = true

        await this.sleep(ms)

        this.waiting = false
    },

    sleep(ms)
    {
        return new Promise(resolve => setTimeout(resolve, ms))
    },

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
    },

    update (dt) {

    },
});
