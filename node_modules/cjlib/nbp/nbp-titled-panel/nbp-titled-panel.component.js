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
var nextId = 0;
var NbpTitledPanelComponent = (function () {
    function NbpTitledPanelComponent() {
        this.id = "nbp-titled-panel-" + ++nextId;
    }
    NbpTitledPanelComponent.prototype.ngOnInit = function () {
    };
    return NbpTitledPanelComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpTitledPanelComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpTitledPanelComponent.prototype, "nbpTitle", void 0);
NbpTitledPanelComponent = __decorate([
    Component({
        selector: 'nbp-titled-panel',template: "<div class=\"titled-panel-container\"><div class=\"titled-panel-title\">{{nbpTitle}}</div><ng-content></ng-content></div>",
        styles: [".titled-panel-container{margin:15px;padding:15px 10px;border:1px solid #258900}.titled-panel-title{padding:0 10px;margin-top:-32px;margin-bottom:4px;background-color:#fff;margin-left:auto;margin-right:auto;width:fit-content;font-size:22px} /*# sourceMappingURL=nbp-titled-panel.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpTitledPanelComponent);
export { NbpTitledPanelComponent };
