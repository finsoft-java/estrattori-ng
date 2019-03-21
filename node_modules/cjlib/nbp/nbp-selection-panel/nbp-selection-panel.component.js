var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbpButtonType } from '../nbp-button/nbp-button.enums';
import { NbpStyle } from '../nbp-commons/nbp-commons.enums';
import { coerceBooleanProperty } from './../../utility/lib-utility';
var nextId = 0;
var NbpSelectionPanelComponent = (function () {
    function NbpSelectionPanelComponent() {
        this.buttonStyle = NbpStyle;
        this.buttonType = NbpButtonType;
        this.id = "pos-selection-panel-" + ++nextId;
        this._selected = false;
        this._disabled = false;
        /**
         * (Opzionale) Evento emesso al click sul pulsante.
         * @param {EventEmitter<any>}  nbpClick
         */
        this.nbpClick = new EventEmitter();
    }
    Object.defineProperty(NbpSelectionPanelComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NbpSelectionPanelComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    NbpSelectionPanelComponent.prototype._onClick = function () {
        if (this.nbpClick) {
            this.selected = !this.selected;
            this.nbpClick.emit();
        }
    };
    NbpSelectionPanelComponent.prototype.ngOnInit = function () {
    };
    return NbpSelectionPanelComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpSelectionPanelComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpSelectionPanelComponent.prototype, "nbpTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpSelectionPanelComponent.prototype, "imageUrl", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], NbpSelectionPanelComponent.prototype, "selected", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], NbpSelectionPanelComponent.prototype, "disabled", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpSelectionPanelComponent.prototype, "nbpButtonLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpSelectionPanelComponent.prototype, "nbpSelectedButtonLabel", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpSelectionPanelComponent.prototype, "nbpClick", void 0);
NbpSelectionPanelComponent = __decorate([
    Component({
        selector: 'nbp-selection-panel',template: "<div class=\"selection-panel-container\" [class.selected]=\"selected\"><img class=\"selection-panel-image\" [src]=\"imageUrl\" *ngIf=\"imageUrl != null\"> <span class=\"selection-panel-title\">{{nbpTitle}}</span><nbp-button [nbpLabel]=\"selected == true ? nbpSelectedButtonLabel : nbpButtonLabel\" [nbpChecked]=\"selected\" [nbpStyle]=\"buttonStyle.SECONDARY\" [nbpType]=\"buttonType.SELECT\" (nbpClick)=\"_onClick()\" [disabled]=\"disabled\"></nbp-button></div>",
        styles: [".selection-panel-container{position:relative;padding:10px;height:350px;margin-bottom:25px;background-color:#fff;text-align:center;border-radius:0 0 5px 5px;border-right:1px solid rgba(50,50,50,.2);border-left:1px solid rgba(50,50,50,.2);border-bottom:1px solid rgba(50,50,50,.2);border-top:0 transparent;-webkit-box-shadow:0 30px 70px -9px rgba(50,50,50,.2);-moz-box-shadow:0 30px 70px -9px rgba(50,50,50,.2);box-shadow:0 30px 70px -9px rgba(50,50,50,.2)}.selection-panel-container .selection-panel-image{width:140px;height:140px;margin:10px}.selection-panel-container .selection-panel-title{display:block;font-weight:700;text-transform:uppercase}.selection-panel-container ::ng-deep nbp-button{position:absolute;bottom:20px;left:0;right:0}.selection-panel-container ::ng-deep nbp-button .btn.button.secondary.select{color:#258900;border-color:#258900!important}.selection-panel-container ::ng-deep nbp-button .btn.button.secondary.select:disabled{opacity:1!important;background-color:#fff!important;color:#ccc;border-color:#6f6f6f!important}.selection-panel-container.selected{height:375px;margin-bottom:0;border-right:1px solid rgba(50,50,50,.1);border-left:1px solid rgba(50,50,50,.1);border-bottom:1px solid rgba(50,50,50,.1);border-top:0 transparent;-webkit-box-shadow:0 30px 60px -30px rgba(127,201,31,.7);-moz-box-shadow:0 30px 60px -30px rgba(127,201,31,.7);box-shadow:0 30px 60px -30px rgba(127,201,31,.7)}.selection-panel-container.selected /deep/ nbp-button{bottom:45px} /*# sourceMappingURL=nbp-selection-panel.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpSelectionPanelComponent);
export { NbpSelectionPanelComponent };
