import { Observable } from 'rxjs/Observable';
var TestCjWizardContextSource = (function () {
    function TestCjWizardContextSource(customContextService, wizardId) {
        this.customContextService = customContextService;
        this.wizardId = wizardId;
    }
    TestCjWizardContextSource.prototype.getWizardContext = function () {
        var _this = this;
        var wizardContext = this.customContextService.getCustomContextByTokenAndKey(this.wizardId)
            .map(function (customContext) {
            console.groupCollapsed('Recupero contesto del wizard...');
            if (customContext) {
                console.log('Recuperato contesto custom per il wizard: ' + _this.wizardId);
                console.dir(customContext);
            }
            else {
                console.log('Nessun contesto da recuperare per il wizard: ' + _this.wizardId);
            }
            console.groupEnd();
            return customContext;
        });
        return wizardContext;
    };
    TestCjWizardContextSource.prototype.updateWizardContext = function (context) {
        if (context) {
            console.groupCollapsed('Aggiorno contesto del wizard...');
            console.log('Aggiornato sul server contesto custom per il Wizard:  ' + context.id);
            console.dir(context);
            console.groupEnd();
            return this.customContextService.setCustomContextByTokenAndKey(context.id, context);
        }
    };
    TestCjWizardContextSource.prototype.removeWizardContext = function (context) {
        console.log('TestCjWizardContextSource:removeWizardContext()');
        return Observable.of(true);
    };
    return TestCjWizardContextSource;
}());
export { TestCjWizardContextSource };
