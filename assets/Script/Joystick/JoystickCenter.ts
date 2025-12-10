// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BaseBall from "../BaseBall";

const {ccclass, property} = cc._decorator;

@ccclass
export default class JoystickCenter extends BaseBall {

    protected onLoad(): void {
        this.color = cc.Color.WHITE;
        this.radius = 30;
    }
}
