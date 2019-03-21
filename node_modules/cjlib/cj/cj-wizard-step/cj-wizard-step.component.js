var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CjWizardComponent } from './../cj-wizard/cj-wizard.component';
var nextId = 0;
var CjWizardStepComponent = (function () {
    function CjWizardStepComponent(cjWizard) {
        this.cjWizard = cjWizard;
        /**
         * Proprietà di tipo stringa che rappresentante l'Id dello step
         */
        this.id = "cj-step-wizard " + ++nextId;
        /**
         * Evento che viene lanciato quando si entra nello step
         */
        this.onStepEnter = new EventEmitter();
        /**
         * Evento che viene lanciato quando si abbandona lo step
         */
        this.onStepLeave = new EventEmitter();
        this._pages = new Array();
    }
    CjWizardStepComponent.prototype.ngAfterContentInit = function () {
        this._stepInfo = {
            id: this.id,
            label: this.cjLabel,
            pages: this._pages,
        };
        this.cjWizard.addStep(this._stepInfo);
    };
    /**
     * Registra una nuoava Page sullo Step
     * @param {ICjWizardPage} page
     */
    CjWizardStepComponent.prototype.addPage = function (page) {
        this._pages.push(page);
    };
    /**
     * [getStepId description]
     * @return {string} [description]
     */
    CjWizardStepComponent.prototype.getStepId = function () {
        return this._stepInfo.id;
    };
    /**
     * [getWizardCurrentState description]
     * @return {ICjWizardState} [description]
     */
    CjWizardStepComponent.prototype.getWizardCurrentState = function () {
        return this.cjWizard.cjCurrentState;
    };
    return CjWizardStepComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], CjWizardStepComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CjWizardStepComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CjWizardStepComponent.prototype, "cjLabel", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjWizardStepComponent.prototype, "onStepEnter", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjWizardStepComponent.prototype, "onStepLeave", void 0);
CjWizardStepComponent = __decorate([
    Component({selector: 'cj-wizard-step',
        template: "<ng-content></ng-content>",
        styles: [" /*# sourceMappingURL=cj-wizard-step.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [CjWizardComponent])
], CjWizardStepComponent);
export { CjWizardStepComponent };
