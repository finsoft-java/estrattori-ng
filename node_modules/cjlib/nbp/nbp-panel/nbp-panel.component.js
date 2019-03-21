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
var NbpPanelComponent = (function () {
    function NbpPanelComponent() {
        /**
        * Label visualizzata come titolo del panel. Se non è presente
        * non viene visualizzato l'header del panel.
        */
        this.nbpTitle = '';
    }
    NbpPanelComponent.prototype.ngOnInit = function () { };
    return NbpPanelComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpPanelComponent.prototype, "nbpTitle", void 0);
NbpPanelComponent = __decorate([
    Component({selector: 'nbp-panel',
        template: "<div class=\"panel panel-default\"><div class=\"panel-heading\" *ngIf=\"nbpTitle\">{{nbpTitle}}</div><div [ngClass]=\"{'panel-body-border': nbpTitle, 'panel-body': !nbpTitle}\"><ng-content></ng-content></div></div>",
        styles: [".panel-default{border:none!important}.panel-default>.panel-heading{color:#5ca740;text-decoration:none;background-color:transparent;border:none!important}.panel-default>.panel-body-border{padding:15px;border-top:2px solid #ccc;background-color:#f2f2f2}.panel-default>.panel-body{padding:15px;background-color:#f2f2f2} /*# sourceMappingURL=nbp-panel.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpPanelComponent);
export { NbpPanelComponent };
