import { Observable } from 'rxjs/Observable';
import { ICjWizardContext } from './../cj-wizard/cj-wizard.interfaces';
/**
 * Interfaccia implementata da context data source del wizard
 */
export interface ICjWizardContextSource<T> {
    getWizardContext(): Observable<ICjWizardContext<T>>;
    updateWizardContext(context: ICjWizardContext<T>): Observable<ICjWizardContext<T>>;
    removeWizardContext(context: ICjWizardContext<T>): Observable<boolean>;
}
