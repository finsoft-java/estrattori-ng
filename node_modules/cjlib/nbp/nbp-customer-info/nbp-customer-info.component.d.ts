import { INbpHeaderCustomer } from './../nbp-commons/nbp-commons.interface';
export declare class NbpCustomerInfoComponent {
    /**
     * Oggetto che definisce il cliente.
     */
    nbpCustomer: INbpHeaderCustomer;
    /**
     * Booleano che pilota la visualizzazione iniziale dell’accordion collassato o espanso.
     */
    _isCollapsed: boolean;
    _toggleCollapse(): void;
    constructor();
}
