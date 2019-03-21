import { OnInit } from '@angular/core';
import { INbpBreadcrumbStructure } from './nbp-breadcrumb.interfaces';
export declare class NbpBreadcrumbComponent implements OnInit {
    /**
     * Struttura del breadcrumb da visualizzare nel componente
     */
    nbpBreadcrumbStructure: Array<INbpBreadcrumbStructure>;
    /**
     * Proprietà che identifica la posizione corrente nella struttura del breadcrumb
     */
    nbpCurrentPosition: INbpBreadcrumbStructure;
    constructor();
    ngOnInit(): void;
}
