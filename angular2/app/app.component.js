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
var bcf2000_component_1 = require('./components/bcf2000/bcf2000.component');
var lrCommands_component_1 = require('./components/lrCommands/lrCommands.component');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>MIDI2LR BCF2000 mapper</h1>\n   <bcf2000>Loading</bcf2000> \n   <lrCommands>Loading</lrCommands> \n  <div>\n    <div class=\"container\" [dragula]='\"abag\"'>\n      <div>1</div>\n      <div>2</div>\n    </div>\n  </div>\n    <div  class=\"container\" [dragula]='\"abag\"'>\n      <div>3</div>\n      <div>4</div>\n    </div>\n  ",
            directives: [bcf2000_component_1.Bcf2000Component, lrCommands_component_1.LrCommandsComponent, ng2_dragula_1.Dragula],
            viewProviders: [ng2_dragula_1.DragulaService],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map