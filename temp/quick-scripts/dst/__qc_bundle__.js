
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/BaseBall');
require('./assets/Script/Game');
require('./assets/Script/Joystick/Joystick');
require('./assets/Script/Joystick/JoystickBg');
require('./assets/Script/Joystick/JoystickCenter');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseBall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQmFzZUJhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtREM7UUFoREcsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFFckIsWUFBTSxHQUFhLElBQUksQ0FBQztRQVd4QixhQUFPLEdBQVcsQ0FBQyxDQUFDOztRQWtDNUIsaUJBQWlCO0lBQ3JCLENBQUM7SUE1Q0csc0JBQUksMkJBQUs7YUFLVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBUEQsVUFBVSxLQUFlO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQVFELHNCQUFJLDRCQUFNO2FBT1Y7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQVRELFVBQVcsTUFBYztZQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBTU8sdUJBQUksR0FBWjtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzdCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFUyxpQ0FBYyxHQUF4QjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQTdDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzhDQUNPO0lBSFosUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1ENUI7SUFBRCxlQUFDO0NBbkRELEFBbURDLENBbkRxQyxFQUFFLENBQUMsU0FBUyxHQW1EakQ7a0JBbkRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUJhbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxuICAgIGdyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9jb2xvcjogY2MuQ29sb3IgPSBudWxsO1xuXG4gICAgc2V0IGNvbG9yKGNvbG9yOiBjYy5Db2xvcikge1xuICAgICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBnZXQgY29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yYWRpdXM6IG51bWJlciA9IDA7XG5cbiAgICBzZXQgcmFkaXVzKHJhZGl1czogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gcmFkaXVzICogMjtcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHJhZGl1cyAqIDI7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGdldCByYWRpdXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yYWRpdXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fcmFkaXVzICYmIHRoaXMuX2NvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ3JhcGhpY3NSZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBoaWNzKSB7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmZpbGxDb2xvciA9IHRoaXMuX2NvbG9yO1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5jaXJjbGUoMCwgMCwgdGhpcy5yYWRpdXMpO1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d359lDAVZEdoh76AVjO49U', 'Game');
// Script/Game.ts

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
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Game.prototype.start = function () {
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
    };
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUloRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5Qzs7SUFvQkEsQ0FBQztJQWxCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG9CQUFLLEdBQUw7UUFDSSx1REFBdUQ7UUFDdkQsaUJBQWlCO1FBQ2pCLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLCtDQUErQztRQUMvQyw0REFBNEQ7UUFDNUQsbURBQW1EO1FBQ25ELG1DQUFtQztRQUNuQyxNQUFNO0lBQ1YsQ0FBQztJQWpCZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW9CeEI7SUFBRCxXQUFDO0NBcEJELEFBb0JDLENBcEJpQyxFQUFFLENBQUMsU0FBUyxHQW9CN0M7a0JBcEJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCYXNlQmFsbCBmcm9tIFwiLi9CYXNlQmFsbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gY2MucmVzb3VyY2VzLmxvYWQoJ1ByZWZhYnMvQmFsbCcsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKGVycikge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBjb25zdCBiYXNlQmFsbCA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgIC8vICAgICBiYXNlQmFsbC5nZXRDb21wb25lbnQoQmFzZUJhbGwpLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xuICAgICAgICAvLyAgICAgYmFzZUJhbGwuZ2V0Q29tcG9uZW50KEJhc2VCYWxsKS5yYWRpdXMgPSA1MDtcbiAgICAgICAgLy8gICAgIGJhc2VCYWxsLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Joystick/JoystickBg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96b88k9NzdGF6FvBoBmJIdx', 'JoystickBg');
// Script/Joystick/JoystickBg.ts

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
var BaseBall_1 = require("../BaseBall");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JoystickBg = /** @class */ (function (_super) {
    __extends(JoystickBg, _super);
    function JoystickBg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lineWidth = 5;
        return _this;
        // update (dt) {}
    }
    JoystickBg.prototype.onLoad = function () {
        this.color = cc.Color.WHITE;
        this.radius = 100;
    };
    JoystickBg.prototype.graphicsRender = function () {
        if (this.graphics) {
            this.graphics.clear();
            this.graphics.strokeColor = this.color;
            this.graphics.circle(0, 0, this.radius);
            this.graphics.lineWidth = this._lineWidth;
            this.graphics.stroke();
        }
    };
    JoystickBg = __decorate([
        ccclass
    ], JoystickBg);
    return JoystickBg;
}(BaseBall_1.default));
exports.default = JoystickBg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSm95c3RpY2svSm95c3RpY2tCZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Rix3Q0FBbUM7QUFFN0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVE7SUFBaEQ7UUFBQSxxRUFtQkM7UUFqQlcsZ0JBQVUsR0FBVyxDQUFDLENBQUM7O1FBZ0IvQixpQkFBaUI7SUFDckIsQ0FBQztJQWZhLDJCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBRUQsbUNBQWMsR0FBZDtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBakJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBbUI5QjtJQUFELGlCQUFDO0NBbkJELEFBbUJDLENBbkJ1QyxrQkFBUSxHQW1CL0M7a0JBbkJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCYXNlQmFsbCBmcm9tIFwiLi4vQmFzZUJhbGxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb3lzdGlja0JnIGV4dGVuZHMgQmFzZUJhbGwge1xuXG4gICAgcHJpdmF0ZSBfbGluZVdpZHRoOiBudW1iZXIgPSA1O1xuICAgIFxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAxMDA7XG4gICAgfVxuXG4gICAgZ3JhcGhpY3NSZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBoaWNzKSB7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuY2lyY2xlKDAsIDAsIHRoaXMucmFkaXVzKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVdpZHRoID0gdGhpcy5fbGluZVdpZHRoO1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Joystick/JoystickCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a6b83D1+NtPK42Po2u+SR7P', 'JoystickCenter');
// Script/Joystick/JoystickCenter.ts

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
var BaseBall_1 = require("../BaseBall");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JoystickCenter = /** @class */ (function (_super) {
    __extends(JoystickCenter, _super);
    function JoystickCenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JoystickCenter.prototype.onLoad = function () {
        this.color = cc.Color.WHITE;
        this.radius = 30;
    };
    JoystickCenter = __decorate([
        ccclass
    ], JoystickCenter);
    return JoystickCenter;
}(BaseBall_1.default));
exports.default = JoystickCenter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSm95c3RpY2svSm95c3RpY2tDZW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsd0NBQW1DO0FBRTdCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFRO0lBQXBEOztJQU1BLENBQUM7SUFKYSwrQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUxnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBTWxDO0lBQUQscUJBQUM7Q0FORCxBQU1DLENBTjJDLGtCQUFRLEdBTW5EO2tCQU5vQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCYXNlQmFsbCBmcm9tIFwiLi4vQmFzZUJhbGxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb3lzdGlja0NlbnRlciBleHRlbmRzIEJhc2VCYWxsIHtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAzMDtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
