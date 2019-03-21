import { EventEmitter } from '@angular/core';
/**
 * Interfaccia contenente gli eventEmitter utilizzati dal componente cjWizard
 */
export interface ICjWizardLifecycleEvent<WIZARD_DATA> {
    cjOnWizardStart: EventEmitter<WIZARD_DATA>;
    cjOnWizardRestore: EventEmitter<WIZARD_DATA>;
    cjOnWizardCancel: EventEmitter<WIZARD_DATA>;
    cjOnWizardComplete: EventEmitter<WIZARD_DATA>;
}
/**
 * Interfaccia contenente gli eventEmitter utilizzati dal componente cjWizard
 */
export interface ICjWizardNavigationEvent<T> {
    cjOnDataChange: EventEmitter<T>;
    cjOnWizardPageChange: EventEmitter<any>;
    cjOnWizardStateChange: EventEmitter<any>;
    cjOnToggleSideBarView: EventEmitter<boolean>;
}
/**
 * Interfaccia che consente al wizard di recuperare i dati
 * la setWizardData è invocata nel momento in cui il wizard esegue il resotre del contesto (emisisone evento cjOnWizardRestore)
 */
export interface ICjWizardDataContainer<WIZARD_DATA> {
    getWizardData(): WIZARD_DATA;
    setWizardData(data: WIZARD_DATA): void;
}
/**
 * Struttura dati contenente la configurazione del componente CjWizard
 * name  - nome del wizard
 * id    - identificativo univoco del wizard
 * steps - Array contenente i dati di configurazione di ogni step del wizard
 *
 * Ogni Wizard conterrà un insieme di step, ogni step potrà essere suddivisto in page.
 */
export interface ICjWizardConfiguration {
    id: string;
    name: string;
    steps: Array<ICjWizardStep>;
}
/**
 * Struttura dati contenente la configurazione di uno step del wizard.
 * name       - nome dello step
 * id         - identificativo dello step
 * pages      - (opzionale) array contene la configurazione delle pagine che comporranno lo step
 *
 * Ogni Wizard sarà composto da un insieme di Step.
 * Uno step potrà essere suddiviso in più Page, nel caso lo step contenga una sola pagina è possibile
 * semplificare la configurazione dello step, non indicando il field pages ed indicando
 * direttamente il nome del componente da utilizzare per lo step.
 */
export interface ICjWizardStep {
    id: string;
    label: string;
    pages: Array<ICjWizardPage>;
}
export interface ICjWizardPageConfiguration {
    cjActionButtonType: 'next' | 'submit';
    cjActionButtonLabel: string;
    cjDisableActionButton: boolean;
    cjDisablePrevButton: boolean;
    cjShowActionButton: boolean;
    cjShowPrevButton: boolean;
    cjContextUpdate: boolean;
}
export interface ICjWizardPageEvents {
    cjOnPageEnter: EventEmitter<ICjWizardPage>;
    cjOnPageLeave: EventEmitter<ICjWizardPage>;
}
/**
 * Struttura dati contenente la configurazione di una Page (di uno Step)
 * name      - nome della page
 * id        - identificativo della page
 * component - string a che contiene la definizione del componente da utilizzare nella page
 */
export interface ICjWizardPage {
    id: string;
    label: string;
    configuration: ICjWizardPageConfiguration;
    events: ICjWizardPageEvents;
}
/**
 * Struttura dati contenente lo stato del wizard
 */
export interface ICjWizardState {
    id: string;
    currentStepId: string;
    currentPageId: string;
    previousStepId: string;
    previousPageId: string;
}
/**
 * Struttura dati interna contenente lo stato del Wizard
 */
export interface ICjWizardStateLib extends ICjWizardState {
    id: string;
    stepsState: Array<ICjWizardStepState>;
    currentStepId: string;
    currentPageNumber: number;
    valid: boolean;
    readyToComplete: boolean;
    canceled: boolean;
    customParams: any;
}
/**
 * Struttura dati interna contenente lo stato dello Step
 */
export interface ICjWizardStepState {
    id: string;
    valid: boolean;
    reatyToComplete: boolean;
}
/**
 * struttura dati utilizzata per mentenere il contesto del componente cjWizard
 */
export interface ICjWizardContext<T> {
    id: string;
    state: ICjWizardState;
    data: T;
}
export interface ICjStateIndex {
    stepIndex: number;
    pageIndex: number;
}
