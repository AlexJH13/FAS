// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BaseBall from "../BaseBall";

const {ccclass, property} = cc._decorator;

@ccclass
export default class JoystickBg extends BaseBall {

    private _lineWidth: number = 5;
    
    protected onLoad(): void {
        this.color = cc.Color.WHITE;
        this.radius = 100;
    }

    graphicsRender(): void {
        if (this.graphics) {
            this.graphics.clear();
            this.graphics.strokeColor = this.color;
            this.graphics.circle(0, 0, this.radius);
            this.graphics.lineWidth = this._lineWidth;
            this.graphics.stroke();
        }
    }
    // update (dt) {}
}
