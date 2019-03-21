import { ICjWizardContextSource } from './cj-wizard-context-source.interfaces';
import { ICjWizardContext } from './../cj-wizard/cj-wizard.interfaces';
import { CjCustomContextService } from './../cj-context/cj-custom-context.service';
import { Observable } from 'rxjs/Observable';
export declare class TestCjWizardContextSource<T> implements ICjWizardContextSource<T> {
    private customContextService;
    private wizardId;
    constructor(customContextService: CjCustomContextService<ICjWizardContext<T>>, wizardId: string);
    getWizardContext(): Observable<ICjWizardContext<T>>;
    updateWizardContext(context: ICjWizardContext<T>): Observable<ICjWizardContext<T>>;
    removeWizardContext(context: ICjWizardContext<T>): Observable<boolean>;
}
