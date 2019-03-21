/**
 * Struttura dati contenente la configurazione del componente NbpWizard
 * name  - nome del wizard
 * id    - identificativo univoco del wizard
 * steps - Array contenente i dati di configurazione di ogni step del wizard
 *
 * Ogni Wizard conterrà un insieme di step, ogni step potrà essere suddivisto in page.
 */
export interface INbpWizardConfigurazion {
    name: string;
    id: string;
    steps: Array<INbpWizardStep>;
}
/**
 * Struttura dati contenente la configurazione di uno step del wizard.
 * name       - nome dello step
 * id         - identificativo dello step
 * pages      - (opzionale) array contene la configurazione delle pagine che comporranno lo step
 * componente - (opzionale) stringa che contiene la definizione del componente da utilizzare per lo step
 *
 * Ogni Wizard sarà composto da un insieme di Step.
 * Uno step potrà essere suddiviso in più Page, nel caso lo step contenga una sola pagina è possibile
 * semplificare la configurazione dello step, non indicando il field pages ed indicando
 * direttamente il nome del componente da utilizzare per lo step.
 */
export interface INbpWizardStep {
    name: string;
    id: string;
    pages?: Array<INbpWizardPage>;
    component?: String;
}
/**
 * Struttura dati contenente la configurazione di una Page (di uno Step)
 * name      - nome della page
 * id        - identificativo della page
 * component - string a che contiene la definizione del componente da utilizzare nella page
 */
export interface INbpWizardPage {
    name: string;
    id: string;
    component: string;
}
/**
 * Struttura dati interna contenente lo stato del Wizard
 */
export interface INbpWizardState {
    id: string;
    stepsState: Array<INbpWizardStepState>;
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
export interface INbpWizardStepState {
    id: string;
    valid: boolean;
    reatyToComplete: boolean;
}
