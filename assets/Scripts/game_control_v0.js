// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        Board_Container: cc.Node,
        Game_Over: cc.Node,

        Score_Number: cc.Label,
        Best_Number: cc.Label
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.vv = {}

        let TileState = require("TileState")
        cc.vv.TileState = new TileState()
    },

    start () {
        this.board = this.Board_Container.getComponent("TileBoard")
        //this.score = this.Score_Number.getComponent("")

        this.score = 0
        
        this.NewGame()
        
    },

    NewGame()
    {
        this.SetScore(0)
        console.log(this.LoadHighScore().toString())
        this.Best_Number.string = this.LoadHighScore().toString()

        this.Game_Over.opacity = 0
        this.Game_Over.enabled = false
        this.board.node.enabled = true
        this.board.ClearBoard()
        this.board.CreateTile()
        this.board.CreateTile()
        
    },

    GameOver()
    {
        this.board.node.enabled = false

        this.Game_Over.enabled = true

        this.AnimateFate(186, 1000)
    },

    async AnimateFate(to, delay)
    {
        await this.sleep(delay)
        let elapsed = 0
        const duration = 1

        const from = this.Game_Over.opacity

        while(elapsed < duration)
        {
            const t = elapsed/duration
            this.Game_Over.opacity = cc.misc.lerp(from, to, t)
            elapsed += 1/60
            await this.sleep(0)
        }

        this.Game_Over.opacity = to

    },

    sleep(ms)
    {
        return new Promise(resolve => setTimeout(resolve, ms))
    },

    SetScore(score)
    {
        this.score = score
        this.Score_Number.string = score.toString() 

        this.SaveHighScore()
    },

    IncreaseScore(point)
    {
        this.SetScore(this.score + point )
    },

    SaveHighScore()
    {
        let highscore = this.LoadHighScore()

        if(this.score > highscore)
            cc.sys.localStorage.setItem("highscore", this.score)     
    },

    LoadHighScore()
    {
        let highscore = cc.sys.localStorage.getItem("highscore")
        if(highscore === null)
            return 0
        return highscore
    }

});
