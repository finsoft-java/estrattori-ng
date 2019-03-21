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
var NbpBreadcrumbComponent = (function () {
    function NbpBreadcrumbComponent() {
    }
    NbpBreadcrumbComponent.prototype.ngOnInit = function () {
    };
    return NbpBreadcrumbComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], NbpBreadcrumbComponent.prototype, "nbpBreadcrumbStructure", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpBreadcrumbComponent.prototype, "nbpCurrentPosition", void 0);
NbpBreadcrumbComponent = __decorate([
    Component({
        selector: 'nbp-breadcrumb',template: "<div class=\"breadcrumb-container\"><ul class=\"nbp-breadcrumb container\"><li *ngFor=\"let route of nbpBreadcrumbStructure; let last = last\"><a><span [ngClass]=\"{'nbp-breadcrumb-current': route === nbpCurrentPosition}\">{{route.name}} <span *ngIf=\"!last\" class=\"icon ico-comuni-freccia-dx\" [style.verticalAlign]=\"'middle'\"></span></span></a></li></ul></div>",
        styles: [".breadcrumb-container{background-color:#f2f2f2;border-bottom:1px solid #ccc}.breadcrumb-container .nbp-breadcrumb{padding:10px 16px;list-style:none;background-color:#f2f2f2;font-size:17px;margin-bottom:0!important}.breadcrumb-container .nbp-breadcrumb li{display:inline-block}.breadcrumb-container .nbp-breadcrumb li a{color:#5ca740;text-decoration:none}.breadcrumb-container .nbp-breadcrumb li a:hover{color:#258900;text-decoration:underline}.nbp-breadcrumb-current{font-weight:700} /*# sourceMappingURL=nbp-breadcrumb.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpBreadcrumbComponent);
export { NbpBreadcrumbComponent };
