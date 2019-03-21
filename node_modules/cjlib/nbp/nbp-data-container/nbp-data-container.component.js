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
import { NbpPipe } from './../nbp-commons/nbp-commons.enums';
import { NbpFormatterService } from './../../utility/nbp-formatter.service';
var NbpDataContainerComponent = (function () {
    function NbpDataContainerComponent(formatterService) {
        this.formatterService = formatterService;
    }
    NbpDataContainerComponent.prototype.ngOnInit = function () {
        this._nbpViewValue = this._getViewValue(this.nbpData);
    };
    NbpDataContainerComponent.prototype._getViewValue = function (item) {
        if (!item) {
            return null;
        }
        return this.formatterService.displayValueTransformation(item, this.nbpFilter, this.nbpFilterArg);
    };
    return NbpDataContainerComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpDataContainerComponent.prototype, "nbpLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpDataContainerComponent.prototype, "nbpData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NbpDataContainerComponent.prototype, "nbpFilter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpDataContainerComponent.prototype, "nbpFilterArg", void 0);
NbpDataContainerComponent = __decorate([
    Component({
        selector: 'nbp-data-container',template: "<div class=\"data-title\"><label>{{nbpLabel}}</label></div><div><p class=\"data-content\">{{_nbpViewValue}}</p><div></div></div>",
        styles: [".data-title{display:block!important;font-size:15px;font-weight:700;padding:10px 0 0 0}.data-title>label{margin:0!important}.data-content{display:block!important;font-size:15px;padding:20px 0 20px 0} /*# sourceMappingURL=nbp-data-container.component.css.map */ "],
        viewProviders: [NbpFormatterService]
    }),
    __metadata("design:paramtypes", [NbpFormatterService])
], NbpDataContainerComponent);
export { NbpDataContainerComponent };
