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
var NbpCustomerInfoComponent = (function () {
    function NbpCustomerInfoComponent() {
        /**
         * Booleano che pilota la visualizzazione iniziale dell’accordion collassato o espanso.
         */
        this._isCollapsed = true;
    }
    NbpCustomerInfoComponent.prototype._toggleCollapse = function () {
        this._isCollapsed = !this._isCollapsed;
    };
    return NbpCustomerInfoComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpCustomerInfoComponent.prototype, "nbpCustomer", void 0);
NbpCustomerInfoComponent = __decorate([
    Component({
        selector: 'nbp-customer-info',template: "<div class=\"container-ident-cliente\" nowrap=\"nowrap\"><span class=\"voce-ident-cliente\">CLIENTE</span> <span class=\"testo-ident-cliente\">{{nbpCustomer?.intestazione}}</span><br><span class=\"voce-ident-cliente\">NSG</span> <span class=\"testo-ident-cliente\" [innerHTML]=\"nbpCustomer?.nsg\"></span><br><span class=\"voce-ident-cliente\">GESTORE PORTAFOGLIAZIONE</span> <span class=\"testo-ident-cliente\" [innerHTML]=\"nbpCustomer?.gestore\"></span></div><div class=\"container-arrow\"><span class=\"accordion-arrow\" [ngClass]=\"{'icon ico-comuni-freccia-accordion-apri':_isCollapsed , 'icon ico-comuni-freccia-accordion-chiudi':!_isCollapsed}\" (click)=\"_toggleCollapse()\"></span></div><div class=\"container-row\"><div [ngClass]=\"{'triangolo':!_isCollapsed,'triangolo-hide':_isCollapsed}\"></div><div class=\"info-cliente-open\" [hidden]=\"_isCollapsed\"><div class=\"container-row\"><div class=\"collapse\" [ngClass]=\"{'in':!_isCollapsed}\"><div class=\"panel-body\"><span>CLIENTE</span> <span>{{nbpCustomer?.intestazione}}</span><br><span>NSG</span> <span [innerHTML]=\"nbpCustomer?.nsg\"></span><br><span>GESTORE PORTAFOGLIAZIONE</span> <span [innerHTML]=\"nbpCustomer?.gestore\"></span></div></div></div></div></div>",
        styles: [".accordion-arrow{cursor:pointer;font-size:1.6em}.container-row{display:table-row}.container-ident-cliente{margin-top:0;margin-bottom:0;font-size:.875em;color:inherit;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:78%;padding-left:.625em;font-weight:400;float:left}.voce-ident-cliente{margin-top:0;margin-bottom:0;font-size:.875em;color:inherit;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:400}.testo-ident-cliente{margin-top:0;margin-bottom:0;font-size:.875em;color:inherit;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:700}.panel-body{vertical-align:middle;display:table-cell;cursor:pointer;text-align:left}.info-cliente-open{position:relative;background-color:#323232;z-index:90;border:0;border-radius:0;text-align:center;margin-top:.5625em;display:table}.container-arrow{float:right;padding-top:1.25em;padding-right:1.5625em}.triangolo{width:0;height:0;z-index:90;border-left:.563em solid transparent;border-right:.563em solid transparent;border-bottom:.563em solid #323232;float:right;margin-right:1.75em}.triangolo-hide{width:0;height:0;z-index:90;border-left:.563em solid transparent;border-right:.563em solid transparent;border-bottom:.563em solid transparent;float:right;margin-right:1.75em} /*# sourceMappingURL=nbp-customer-info.component.css.map */ "],
    }),
    __metadata("design:paramtypes", [])
], NbpCustomerInfoComponent);
export { NbpCustomerInfoComponent };
