import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IPaginationStatus } from './../nbp-datasource/nbp-datasource.interfaces';
import { INbpPaginationConfiguration } from './nbp-pagination.interfaces';
import { PaginationActions } from './nbp-pagination.enums';
export interface IPageWindow {
    model: number;
    view: number;
}
export declare class NbpPaginationComponent implements OnChanges {
    /**
     * Configurazione numerica degli stati del paginatore.
     * Di tipo: IPaginationStatus
     * Valore di default: {pageNumber: 1, pageSize: -1, totalRecords: -1};
     */
    nbpPaginationStatus: IPaginationStatus;
    /**
     * Configurazione per la visualizzazione dei pulsanti del paginatore.
     * Di tipo : INbpPaginationConfiguration
     * Valore di default: { next: true, prev: true, page: true, last: true, first: true };
     */
    nbpShowPaginationStatus: INbpPaginationConfiguration;
    /**
     * Configurazione per la disabilitazione dei pulsanti del paginatore.
     * Di tipo : INbpPaginationConfiguration
     * Valore di default: { next: false, prev: false, page: false, last: false, first: false };
     */
    nbpDisablePaginationStatus: INbpPaginationConfiguration;
    /**
     * Proprietà numerica rappresentante la finestra di pagine visualizzate e selezionabili.
     * Valore di default: 3
     */
    nbpPageWindowSize: number;
    /**
     * Evento di notifica per pagina cambiata
     */
    nbpOnPageChange: EventEmitter<any>;
    /**
    * Evento di notifica per passaggio alla pagina successiva
    */
    nbpOnNext: EventEmitter<IPaginationStatus>;
    /**
    * Evento di notifica per passaggio ad una pagina qualsiasi
    */
    nbpOnGoToPage: EventEmitter<IPaginationStatus>;
    /**
    * Evento di notifica per passaggio alla pagina precedente
    */
    nbpOnPrev: EventEmitter<IPaginationStatus>;
    /**
    * Evento di notifica per passaggio alla prima pagina
    */
    nbpOnFirst: EventEmitter<IPaginationStatus>;
    /**
    * Evento di notifica per passaggio all'ultima pagina
    */
    nbpOnLast: EventEmitter<IPaginationStatus>;
    _windowPages: Array<IPageWindow>;
    _internalPageNumber: number;
    _paginationActions: typeof PaginationActions;
    private _lastPageModelNumber;
    private _showTooltip;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    private _getTotalPages(pageSize, totalSize);
    _isTotalRecordsProvided(): boolean;
    private _setShowTooltipCondition(pagesWindowLimits?);
    _evaluateTooltipText(pageNumber: number): number;
    private _generateRange(pageNumber);
    private _evaluateWindowPages(pageNumber);
    _isNextPageWindowButtonVisible(): boolean;
    _isPrevPageWindowButtonVisible(): boolean;
    private _getPrevPageNumber();
    private _setPageNumber(windowPage);
    onNext(): void;
    onPrev(): void;
    onLast(): void;
    onFirst(): void;
    onGoToPage(action: PaginationActions, page?: number): void;
}
