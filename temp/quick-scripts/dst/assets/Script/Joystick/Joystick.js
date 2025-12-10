
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Joystick/Joystick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSm95c3RpY2svSm95c3RpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsMkNBQXNDO0FBQ3RDLG1EQUE4QztBQUV4QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZEQztRQTFERyxRQUFFLEdBQWUsSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRXRCLHFCQUFlLEdBQVksS0FBSyxDQUFDOztRQW9EekMsaUJBQWlCO0lBQ3JCLENBQUM7SUFuREcsc0JBQVcsb0NBQWM7YUFJekI7WUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzthQU5ELFVBQTBCLGNBQXVCO1lBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBTUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFUyx5QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRU8sZ0NBQWEsR0FBckI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxD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ZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgSm95c3RpY2tCZyBmcm9tIFwiLi9Kb3lzdGlja0JnXCI7XG5pbXBvcnQgSm95c3RpY2tDZW50ZXIgZnJvbSBcIi4vSm95c3RpY2tDZW50ZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb3lzdGljayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoSm95c3RpY2tCZylcbiAgICBiZzogSm95c3RpY2tCZyA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoSm95c3RpY2tDZW50ZXIpXG4gICAgY2VudGVyOiBKb3lzdGlja0NlbnRlciA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9lbmFibGVkUnVubmluZzogYm9vbGVhbiA9IGZhbHNlOyBcblxuICAgIHB1YmxpYyBzZXQgZW5hYmxlZFJ1bm5pbmcoZW5hYmxlZFJ1bm5pbmc6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZW5hYmxlZFJ1bm5pbmcgPSBlbmFibGVkUnVubmluZztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGVuYWJsZWRSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5hYmxlZFJ1bm5pbmc7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XG4gICAgICAgIHRoaXMuX2VuYWJsZWRSdW5uaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZFJ1bm5pbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgICAgIHRoaXMuYmcubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgdGhpcy5jZW50ZXIubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVkUnVubmluZykge1xuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5jZW50ZXIubm9kZS5wb3NpdGlvbi5hZGQoY2MudjMoZXZlbnQuZ2V0RGVsdGEoKSkpO1xuICAgICAgICAgICAgdGhpcy5jZW50ZXIubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuYmcucmFkaXVzIC0gdGhpcy5jZW50ZXIucmFkaXVzO1xuICAgICAgICAgICAgaWYgKGNjLlZlYzIuZGlzdGFuY2UocG9zLCB0aGlzLmJnLm5vZGUucG9zaXRpb24pID4gcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IHAuc3ViKHRoaXMuYmcubm9kZS5nZXRQb3NpdGlvbigpKS5ub3JtYWxpemUoKS5tdWwocik7XG4gICAgICAgICAgICAgICAgdGhpcy5jZW50ZXIubm9kZS5zZXRQb3NpdGlvbih0aGlzLmJnLm5vZGUucG9zaXRpb24uYWRkKGNjLnYzKHYpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iZy5ub2RlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcbiAgICAgICAgdGhpcy5jZW50ZXIubm9kZS5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==