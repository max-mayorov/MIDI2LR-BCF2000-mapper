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
var ControlComponent = (function () {
    function ControlComponent(dragulaService) {
        this.dragulaService = dragulaService;
        dragulaService.drag.subscribe(function (value) {
            console.log("drag" + value);
        });
        dragulaService.drop.subscribe(function (value) {
            console.log("drop" + value);
        });
        dragulaService.over.subscribe(function (value) {
            console.log("over" + value);
        });
        dragulaService.out.subscribe(function (value) {
            console.log("out" + value);
        });
    }
    ControlComponent = __decorate([
        core_1.Component({
            selector: 'control',
            templateUrl: 'app/components/bcf2000/control.component.html',
            properties: ['id', 'name'],
            directives: [ng2_dragula_1.Dragula],
            viewProviders: [ng2_dragula_1.DragulaService],
            styleUrls: ['app/components/bcf2000/bcf2000.component.css']
        }), 
        __metadata('design:paramtypes', [ng2_dragula_1.DragulaService])
    ], ControlComponent);
    return ControlComponent;
}());
exports.ControlComponent = ControlComponent;
//# sourceMappingURL=control.component.js.map