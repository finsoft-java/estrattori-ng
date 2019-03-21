var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var CjWizardHelper = (function () {
    function CjWizardHelper() {
    }
    /**
     * funzione di utility return true se l'array contiene duplicati
     * @param {Array<any>} items set in oggetti in input
     * @return {boolean}         input contains duplicate
     */
    CjWizardHelper.prototype.containsDuplicate = function (items) {
        return items.some(function (item, index) {
            return items.indexOf(item) !== index;
        });
    };
    CjWizardHelper.prototype.stepContainsPage = function (step, page) {
        return step.pages.indexOf(page) !== -1;
    };
    /**
    * controlla che (cjCurrentState.currentStepId, cjCurrentState.currentPageId) esista nella cjConfiguration
    */
    CjWizardHelper.prototype.currentStatusValid = function (statusIndexes) {
        return (statusIndexes.stepIndex !== -1 && statusIndexes.pageIndex !== -1);
    };
    /**
     * controlla univocita' coppia (StepId, pageId) all'interno della configurazione dello wizard
     * @return boolean configuration valid
     */
    CjWizardHelper.prototype.configurationValid = function (wizardConfiguration) {
        var _this = this;
        var stepIds = wizardConfiguration.steps.map(function (step) { return step.id; });
        if (this.containsDuplicate(stepIds)) {
            return false;
        }
        var stepsDuplicateStatus = wizardConfiguration.steps.map(function (step) {
            return _this.containsDuplicate(step.pages.map(function (page) {
                return page.id;
            }));
        });
        var result = (stepsDuplicateStatus.reduce(function (acc, curr) {
            return acc || curr;
        }, false));
        return !result;
    };
    /**
     * Recupera l'indice corrente di Page|Step nell'array a partire dall'id dell'elemento
     * @param  {Array<ICjWizardPage|ICjWizardStep>} elems insieme di step o page
     * @param  string                             id    identificativo di Page|Step
     * @return number                                   array index
     */
    CjWizardHelper.prototype.getCurrentStateIndexById = function (elems, id) {
        var currentIndex = -1;
        for (var elemIndex = 0; elemIndex < elems.length; elemIndex++) {
            if (elems[elemIndex].id === id) {
                currentIndex = elemIndex;
                break;
            }
        }
        return currentIndex;
    };
    /**
     * Recupera l'elemento corrente di Page|Step nell'array a partire dall'id dell'elemento
     * @param  {Array<ICjWizardPage|ICjWizardStep>} elems insieme di step o page
     * @param  string                             id    identificativo di Page|Step
     * @return ICjWizardPage|ICjWizardStep        elemento
     */
    CjWizardHelper.prototype.getCurrentStateById = function (elems, id) {
        for (var elemIndex = 0; elemIndex < elems.length; elemIndex++) {
            if (elems[elemIndex].id === id) {
                return elems[elemIndex];
            }
        }
        return null;
    };
    return CjWizardHelper;
}());
CjWizardHelper = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], CjWizardHelper);
export { CjWizardHelper };
