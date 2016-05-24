"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var LrCommandsComponent = (function () {
    function LrCommandsComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        dragulaService.drag.subscribe(function (value) {
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe(function (value) {
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            _this.onOut(value.slice(1));
        });
    }
    LrCommandsComponent.prototype.getAll = function () {
        return [
            "Exposure",
            "Contrast"
        ];
    };
    LrCommandsComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
        //this.removeClass(e, 'ex-moved');
        console.log(e.name);
        console.log(el.name);
    };
    LrCommandsComponent.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        //this.addClass(e, 'ex-moved');
        alert(e);
        console.log(e.name);
        console.log(el.name);
    };
    LrCommandsComponent.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
        //this.addClass(el, 'ex-over');
        console.log(e.name);
        console.log(el.name);
        console.log(container.name);
    };
    LrCommandsComponent.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
        //this.removeClass(el, 'ex-over');
        console.log(e.name);
        console.log(el.name);
        console.log(container.name);
    };
    LrCommandsComponent = __decorate([
        core_1.Component({
            selector: 'lrCommands',
            templateUrl: 'app/components/lrCommands/lrCommands.component.html',
            styleUrls: ['app/components/lrCommands/lrCommands.component.css'],
            directives: [ng2_dragula_1.Dragula],
            viewProviders: [ng2_dragula_1.DragulaService],
        }), 
        __metadata('design:paramtypes', [ng2_dragula_1.DragulaService])
    ], LrCommandsComponent);
    return LrCommandsComponent;
}());
exports.LrCommandsComponent = LrCommandsComponent;
//# sourceMappingURL=lrCommands.component.js.map