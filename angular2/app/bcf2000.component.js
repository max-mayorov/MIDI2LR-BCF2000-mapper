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
var encoder_component_1 = require('./encoder.component');
var fader_component_1 = require('./fader.component');
var key_component_1 = require('./key.component');
var Bcf2000Component = (function () {
    function Bcf2000Component() {
    }
    Bcf2000Component.prototype.range = function (min, max) {
        var input = [];
        for (var i = min; i <= max; ++i)
            input.push(i);
        return input;
    };
    Bcf2000Component = __decorate([
        core_1.Component({
            selector: 'bcf2000',
            templateUrl: 'app/bcf2000.component.html',
            directives: [encoder_component_1.EncoderComponent, fader_component_1.FaderComponent, key_component_1.KeyComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Bcf2000Component);
    return Bcf2000Component;
}());
exports.Bcf2000Component = Bcf2000Component;
//# sourceMappingURL=bcf2000.component.js.map