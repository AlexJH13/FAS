// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import JoystickBg from "./JoystickBg";
import JoystickCenter from "./JoystickCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Joystick extends cc.Component {

    @property(JoystickBg)
    bg: JoystickBg = null;

    @property(JoystickCenter)
    center: JoystickCenter = null;

    private _enabledRunning: boolean = false; 

    public set enabledRunning(enabledRunning: boolean) {
        this._enabledRunning = enabledRunning;
    }

    public get enabledRunning() {
        return this._enabledRunning;
    }

    start () {

    }

    protected onLoad(): void {
        this.registerEvent();
        this._enabledRunning = true;
    }

    private registerEvent(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    private onTouchStart(event: cc.Event.EventTouch): void {
        if (this.enabledRunning) {
            const pos = this.node.convertToNodeSpaceAR(event.getLocation());
            this.bg.node.setPosition(pos);
            this.center.node.setPosition(pos);
        }
    }

    private onTouchMove(event: cc.Event.EventTouch): void {
        if (this.enabledRunning) {
            const pos = this.center.node.position.add(cc.v3(event.getDelta()));
            this.center.node.setPosition(pos);
            const r = this.bg.radius - this.center.radius;
            if (cc.Vec2.distance(pos, this.bg.node.position) > r) {
                const p = this.node.convertToNodeSpaceAR(event.getLocation());
                const v = p.sub(this.bg.node.getPosition()).normalize().mul(r);
                this.center.node.setPosition(this.bg.node.position.add(cc.v3(v)));
            }
        }
    }

    private onTouchEnd(event: cc.Event.EventTouch): void {
        this.bg.node.setPosition(cc.v2(0, 0));
        this.center.node.setPosition(cc.v2(0, 0));
    }

    // update (dt) {}
}
