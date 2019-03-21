var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var NbpIconComponent = (function () {
    function NbpIconComponent() {
    }
    Object.defineProperty(NbpIconComponent.prototype, "buttonIcon", {
        get: function () { return this._buttonIcon; },
        set: function (value) { this._buttonIcon = value != null && "" + value !== 'false'; },
        enumerable: true,
        configurable: true
    });
    NbpIconComponent.prototype.ngOnInit = function () { };
    return NbpIconComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpIconComponent.prototype, "nbpName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpIconComponent.prototype, "buttonIcon", null);
NbpIconComponent = __decorate([
    Component({
        selector: 'nbp-icon',template: "<span class=\"icon\" [ngClass]=\"nbpName\" [class.button-icon]=\"buttonIcon\"></span>",
        styles: [" /*# sourceMappingURL=nbp-icon.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpIconComponent);
export { NbpIconComponent };
