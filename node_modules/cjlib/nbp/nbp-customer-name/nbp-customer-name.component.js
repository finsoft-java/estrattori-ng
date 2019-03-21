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
var NbpCustomerNameComponent = (function () {
    function NbpCustomerNameComponent() {
    }
    return NbpCustomerNameComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpCustomerNameComponent.prototype, "nbpCustomer", void 0);
NbpCustomerNameComponent = __decorate([
    Component({
        selector: 'nbp-customer-name',template: "<div class=\"info-client-container\" *ngIf=\"nbpCustomer\"><div class=\"icon-client-container\"><span class=\"icon-client ico-navbar-gestore-01\"></span></div><div class=\"data-client-container\"><span class=\"nome-cliente\">{{nbpCustomer}}</span></div></div>",
        styles: [".info-client-container{display:table-row;height:50px;color:#fff}.data-client-container,.icon-client-container{display:table-cell;vertical-align:middle;padding-left:5px;padding-right:5px}.icon-client{display:inline-block;width:32px;height:32px;font-size:32px} /*# sourceMappingURL=nbp-customer-name.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpCustomerNameComponent);
export { NbpCustomerNameComponent };
