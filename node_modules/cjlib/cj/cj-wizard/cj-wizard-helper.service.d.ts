import { ICjWizardConfiguration, ICjWizardStep, ICjWizardPage, ICjStateIndex } from './cj-wizard.interfaces';
export declare class CjWizardHelper {
    constructor();
    /**
     * funzione di utility return true se l'array contiene duplicati
     * @param {Array<any>} items set in oggetti in input
     * @return {boolean}         input contains duplicate
     */
    containsDuplicate(items: Array<any>): boolean;
    stepContainsPage(step: ICjWizardStep, page: ICjWizardPage): boolean;
    /**
    * controlla che (cjCurrentState.currentStepId, cjCurrentState.currentPageId) esista nella cjConfiguration
    */
    currentStatusValid(statusIndexes: ICjStateIndex): boolean;
    /**
     * controlla univocita' coppia (StepId, pageId) all'interno della configurazione dello wizard
     * @return boolean configuration valid
     */
    configurationValid(wizardConfiguration: ICjWizardConfiguration): boolean;
    /**
     * Recupera l'indice corrente di Page|Step nell'array a partire dall'id dell'elemento
     * @param  {Array<ICjWizardPage|ICjWizardStep>} elems insieme di step o page
     * @param  string                             id    identificativo di Page|Step
     * @return number                                   array index
     */
    getCurrentStateIndexById(elems: Array<ICjWizardPage | ICjWizardStep>, id: string): number;
    /**
     * Recupera l'elemento corrente di Page|Step nell'array a partire dall'id dell'elemento
     * @param  {Array<ICjWizardPage|ICjWizardStep>} elems insieme di step o page
     * @param  string                             id    identificativo di Page|Step
     * @return ICjWizardPage|ICjWizardStep        elemento
     */
    getCurrentStateById(elems: Array<ICjWizardPage | ICjWizardStep>, id: string): ICjWizardPage | ICjWizardStep;
}
