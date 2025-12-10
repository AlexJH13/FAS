"use strict";
cc._RF.push(module, '77a94Ob/mtK3IuP/hKdfApG', 'BaseBall');
// Script/BaseBall.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseBall = /** @class */ (function (_super) {
    __extends(BaseBall, _super);
    function BaseBall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.graphics = null;
        _this._color = null;
        _this._radius = 0;
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(BaseBall.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
            this.init();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseBall.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (radius) {
            this._radius = radius;
            this.node.width = radius * 2;
            this.node.height = radius * 2;
            this.init();
        },
        enumerable: false,
        configurable: true
    });
    BaseBall.prototype.init = function () {
        if (this._radius && this._color) {
            this.graphicsRender();
        }
    };
    BaseBall.prototype.graphicsRender = function () {
        if (this.graphics) {
            this.graphics.clear();
            this.graphics.fillColor = this._color;
            this.graphics.circle(0, 0, this.radius);
            this.graphics.fill();
        }
    };
    // onLoad () {}
    BaseBall.prototype.start = function () {
    };
    __decorate([
        property(cc.Graphics)
    ], BaseBall.prototype, "graphics", void 0);
    BaseBall = __decorate([
        ccclass
    ], BaseBall);
    return BaseBall;
}(cc.Component));
exports.default = BaseBall;

cc._RF.pop();