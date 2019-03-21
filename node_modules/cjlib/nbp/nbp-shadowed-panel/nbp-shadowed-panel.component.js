var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var NbpShadowedPanelComponent = (function () {
    function NbpShadowedPanelComponent() {
    }
    NbpShadowedPanelComponent.prototype.ngOnInit = function () {
    };
    return NbpShadowedPanelComponent;
}());
NbpShadowedPanelComponent = __decorate([
    Component({
        selector: 'nbp-shadowed-panel',template: "<div class=\"shadowed-panel-outer-container\"><div class=\"shadowed-panel-container\"><ng-content></ng-content></div></div>",
        styles: [".shadowed-panel-outer-container{width:100%}.shadowed-panel-outer-container .shadowed-panel-container{margin:10px;padding:10px;background-color:#fff;text-align:center;border-radius:5px;-webkit-box-shadow:0 30px 70px -9px rgba(50,50,50,.2);-moz-box-shadow:0 30px 70px -9px rgba(50,50,50,.2);box-shadow:0 30px 70px -9px rgba(50,50,50,.2)} /*# sourceMappingURL=nbp-shadowed-panel.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpShadowedPanelComponent);
export { NbpShadowedPanelComponent };
