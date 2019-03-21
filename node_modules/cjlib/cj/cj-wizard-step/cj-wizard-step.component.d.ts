import { EventEmitter, AfterContentInit } from '@angular/core';
import { ICjWizardStep, ICjWizardPage, ICjWizardState } from './../cj-wizard/cj-wizard.interfaces';
import { CjWizardComponent } from './../cj-wizard/cj-wizard.component';
export declare class CjWizardStepComponent<T> implements AfterContentInit {
    private cjWizard;
    /**
     * Proprietà di tipo stringa che rappresentante l'Id dello step
     */
    id: string;
    /**
     * Proprietà di tipo stringa che rappresenta il name dello step
     */
    name: string;
    /**
     * Proprietà di tipo stringa che rappresenta la label visualizzata dello step
     */
    cjLabel: string;
    /**
     * Evento che viene lanciato quando si entra nello step
     */
    onStepEnter: EventEmitter<any>;
    /**
     * Evento che viene lanciato quando si abbandona lo step
     */
    onStepLeave: EventEmitter<any>;
    _stepInfo: ICjWizardStep;
    _pages: Array<ICjWizardPage>;
    constructor(cjWizard: CjWizardComponent<T>);
    ngAfterContentInit(): void;
    /**
     * Registra una nuoava Page sullo Step
     * @param {ICjWizardPage} page
     */
    addPage(page: ICjWizardPage): void;
    /**
     * [getStepId description]
     * @return {string} [description]
     */
    getStepId(): string;
    /**
     * [getWizardCurrentState description]
     * @return {ICjWizardState} [description]
     */
    getWizardCurrentState(): ICjWizardState;
}
