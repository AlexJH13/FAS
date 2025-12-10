// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BaseBall from "./BaseBall";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // cc.resources.load('Prefabs/Ball', (err, prefab) => {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }
        //     const baseBall = cc.instantiate(prefab);
        //     baseBall.getComponent(BaseBall).color = cc.Color.RED;
        //     baseBall.getComponent(BaseBall).radius = 50;
        //     baseBall.parent = this.node;
        // });
    }

    // update (dt) {}
}
