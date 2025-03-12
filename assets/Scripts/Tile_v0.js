cc.Class({
    extends: cc.Component,
    properties: {
        state:{
            default:null,
            type: cc.TileState
        },
        cell:{
            default:null,
            type: cc.TileCell
        },

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.number = 0
        this.locked = false
        
    },

    start () {

    },

    // update (dt) {},

    SetState(number){
        this.number = number

        let text = this.node.getChildByName("Text")
        let data = cc.vv.TileState.getTileValue(number)
        if (data){
            
            if (data.bgColor){
                this.node.color = data.bgColor
            }
            if (data.textColor){
                text.color = data.textColor
            }
            text.getComponent(cc.Label).string = this.number.toString() 
        }
    },

    Spawn(cell, grid){
        if(this.cell != null) {
            this.cell.SetTile(null); // Đặt tile của cell cũ thành null
        }

        this.cell = cell


        this.cell.SetTile(this)
        
        

        // this.node.position = cell.node.convertToWorldSpaceAR(cc.v2(0,0))

        // Lấy vị trí của cell trong thế giới (world space)
        let cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v2(0, 0));

        // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
        let gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);

        // Đặt vị trí của tile bằng với vị trí cục bộ của grid
        this.node.setPosition(gridLocalPos);

        // Thêm tile vào làm con của grid
        //grid.addChild(this.node);

    },

    MoveTo(cell, grid){
        if(this.cell != null) {
            this.cell.SetTile(null); // Đặt tile của cell cũ thành null
        }
            

        this.cell = cell
        this.cell.SetTile(this)
        

        // this.node.position = cell.node.convertToWorldSpaceAR(cc.v2(0,0))

        // Lấy vị trí của cell trong thế giới (world space)
        let cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v2(0, 0));

        // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
        let gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);

        // Đặt vị trí của tile bằng với vị trí cục bộ của grid
        // this.node.setPosition(gridLocalPos);

        this.AnimateMove(gridLocalPos, false)

        
    },

    Merge(cell, grid)
    {
        if(this.cell != null) {
            this.cell.SetTile(null); // Đặt tile của cell cũ thành null
        }

        this.cell = null

        

        // Lấy vị trí của cell trong thế giới (world space)
        let cellWorldPos = cell.node.convertToWorldSpaceAR(cc.v2(0, 0));

        // Chuyển đổi vị trí toàn cục của cell sang vị trí cục bộ của grid
        let gridLocalPos = grid.convertToNodeSpaceAR(cellWorldPos);

        // Đặt vị trí của tile bằng với vị trí cục bộ của grid
        this.AnimateMove(gridLocalPos, true)

        //this.AnimateScale(1.2, 1)

    },

    async AnimateMove(to, merging)
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
    },

    async AnimateScale(scaleTo, duration) {
        const from = this.node.scale;  
        const halfDuration = duration / 2; 
        
        // Phần phóng to
        let elapsed = 0;
        while (elapsed < halfDuration) {
            const t = elapsed / halfDuration;
            this.node.scale = cc.misc.lerp(from, scaleTo, t);  
    
            elapsed += 1 /60;
            await this.sleep(1000/60); 
        }
    
    
        // Phần thu nhỏ
        elapsed = 0;
        while (elapsed < halfDuration) {
            const t = elapsed / halfDuration;
            this.node.scale = cc.misc.lerp(scaleTo, from, t);
    
            elapsed += 1 / 60;
            await this.sleep(1000 / 60);  
        }
        this.node.scale = from;
    },

    sleep(ms)
    {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

});
