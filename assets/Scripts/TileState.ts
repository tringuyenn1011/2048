// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html


const {ccclass, property} = cc._decorator;

type TileData = {
        bgColor?: cc.Color;
        textColor?: cc.Color;
    }

@ccclass
export default class TileState extends cc.Component {

    getTileValue(number: number)
    {
        let data: TileData = {}
        if (number == 2){
            data.bgColor = cc.color().fromHEX('#EEE4DA');
            data.textColor = cc.color().fromHEX('#776E65')
        }
        else if (number == 4){
            data.bgColor = cc.color().fromHEX('#EEE1C9')
            data.textColor = cc.color().fromHEX('#776E65')
        }
        else if (number == 8){
            data.bgColor = cc.color().fromHEX('#F3B27A')
            data.textColor = cc.color().fromHEX('#F9F6F2')
        }
        else if (number == 16){
            data.bgColor = cc.color().fromHEX('#F69664')
            data.textColor = cc.color().fromHEX('#F9F6F2')
        }
        else if (number == 32){
            data.bgColor = cc.color().fromHEX('#F77C5F')
            data.textColor = cc.color().fromHEX('#F9F6F2')
        }
        else if (number == 64){
            data.bgColor = cc.color().fromHEX('#F75F3B')
            data.textColor = cc.color().fromHEX('#F9F6F2')
        }
        else if (number == 128){
            data.bgColor = cc.color().fromHEX('#EDD073')
            data.textColor = cc.color().fromHEX('#F9F6F2')
        }
        else if (number == 256){
            data.bgColor = cc.color().fromHEX('#EDCC62')
            data.textColor = cc.color().fromHEX('#F9F6F2')
        }
        else if (number == 512){
            data.bgColor = cc.color().fromHEX('#EDC950')
            data.textColor = cc.color().fromHEX('#F9F6F2')
        }
        else if (number == 1024){
            data.bgColor = cc.color().fromHEX('#EDC53F')
            data.textColor = cc.color().fromHEX('#F9F6F2')
        }
        else if (number == 2048){
            data.bgColor = cc.color().fromHEX('#EDC22E')
            data.textColor = cc.color().fromHEX('#F9F6F2')
        }

        return data
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}

