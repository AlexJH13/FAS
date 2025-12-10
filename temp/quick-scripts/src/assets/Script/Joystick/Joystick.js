"use strict";
cc._RF.push(module, '1131cZKwbZHpoAQLF514xxC', 'Joystick');
// Script/Joystick/Joystick.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var JoystickBg_1 = require("./JoystickBg");
var JoystickCenter_1 = require("./JoystickCenter");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Joystick = /** @class */ (function (_super) {
    __extends(Joystick, _super);
    function Joystick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.center = null;
        _this._enabledRunning = false;
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(Joystick.prototype, "enabledRunning", {
        get: function () {
            return this._enabledRunning;
        },
        set: function (enabledRunning) {
            this._enabledRunning = enabledRunning;
        },
        enumerable: false,
        configurable: true
    });
    Joystick.prototype.start = function () {
    };
    Joystick.prototype.onLoad = function () {
        this.registerEvent();
        this._enabledRunning = true;
    };
    Joystick.prototype.registerEvent = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    Joystick.prototype.onTouchStart = function (event) {
        if (this.enabledRunning) {
            var pos = this.node.convertToNodeSpaceAR(event.getLocation());
            this.bg.node.setPosition(pos);
            this.center.node.setPosition(pos);
        }
    };
    Joystick.prototype.onTouchMove = function (event) {
        if (this.enabledRunning) {
            var pos = this.center.node.position.add(cc.v3(event.getDelta()));
            this.center.node.setPosition(pos);
            var r = this.bg.radius - this.center.radius;
            if (cc.Vec2.distance(pos, this.bg.node.position) > r) {
                var p = this.node.convertToNodeSpaceAR(event.getLocation());
                var v = p.sub(this.bg.node.getPosition()).normalize().mul(r);
                this.center.node.setPosition(this.bg.node.position.add(cc.v3(v)));
            }
        }
    };
    Joystick.prototype.onTouchEnd = function (event) {
        this.bg.node.setPosition(cc.v2(0, 0));
        this.center.node.setPosition(cc.v2(0, 0));
    };
    __decorate([
        property(JoystickBg_1.default)
    ], Joystick.prototype, "bg", void 0);
    __decorate([
        property(JoystickCenter_1.default)
    ], Joystick.prototype, "center", void 0);
    Joystick = __decorate([
        ccclass
    ], Joystick);
    return Joystick;
}(cc.Component));
exports.default = Joystick;

cc._RF.pop();