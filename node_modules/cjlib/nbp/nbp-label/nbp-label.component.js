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
var NbpLabelComponent = (function () {
    function NbpLabelComponent() {
    }
    NbpLabelComponent.prototype.ngOnInit = function () {
    };
    return NbpLabelComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpLabelComponent.prototype, "nbpText", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpLabelComponent.prototype, "nbpRequired", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpLabelComponent.prototype, "for", void 0);
NbpLabelComponent = __decorate([
    Component({selector: 'nbp-label',
        template: "<label [for]=\"for\">{{nbpText}}</label><span *ngIf=\"nbpRequired\">*</span>",
        styles: [".nbp-label{background-color:#ff0} /*# sourceMappingURL=nbp-label.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpLabelComponent);
export { NbpLabelComponent };
