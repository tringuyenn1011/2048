// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        

        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.size = 16
        this.height = 4
        this.width = 4


        this.rows = this.getComponentsInChildren("TileRow")
        this.cells = this.getComponentsInChildren("TileCell")

    },

    start () {
        
        for(let y=0; y<this.rows.length; y++)
        {
            for(let x=0; x<this.rows[y].cells.length; x++)
            {
                this.rows[y].cells[x].coordinates = cc.v2(x, y)
                
            }
        }

    },

    GetCell(x, y){
        
        if(x >= 0 && x < this.width && y >= 0 && y < this.height)
        {
            return this.rows[y].cells[x]
        }
        else
        {   
            return null
        }
            
    },

    GetCellTemp(coordinates) {
        return this.GetCell(coordinates.x, coordinates.y)
    },

    GetAdjacentCell(cell, direction){
        let coordinates = { ...cell.coordinates }   
        coordinates.x += direction.x
        coordinates.y -= direction.y
        
        return this.GetCellTemp(coordinates)
    },

    GetRandomEmptyCell() {
        let index = parseInt(Math.random()*this.cells.length)
        let startingIndex = index

        while(this.cells[index].occupied)
        {
            
            index++
            if(index >= this.cells.length)
            {
                
                index = 0
            }
                

            if(index == startingIndex)  
            {
                
                return null
            }
                
        }

        return this.cells[index]
    }

    // update (dt) {},
});
