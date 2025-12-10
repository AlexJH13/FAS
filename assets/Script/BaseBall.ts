// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseBall extends cc.Component {

    @property(cc.Graphics)
    graphics: cc.Graphics = null;

    private _color: cc.Color = null;

    set color(color: cc.Color) {
        this._color = color;
        this.init();
    }

    get color() {
        return this._color;
    }

    private _radius: number = 0;

    set radius(radius: number) {
        this._radius = radius;
        this.node.width = radius * 2;
        this.node.height = radius * 2;
        this.init();
    }

    get radius() {
        return this._radius;
    }

    private init(): void {
        if (this._radius && this._color) {
            this.graphicsRender();
        }
    }

    protected graphicsRender(): void {
        if (this.graphics) {
            this.graphics.clear();
            this.graphics.fillColor = this._color;
            this.graphics.circle(0, 0, this.radius);
            this.graphics.fill();
        }
    }

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
