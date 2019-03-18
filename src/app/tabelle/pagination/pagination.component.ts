import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { INbpPaginationConfiguration } from 'cjlib/nbp/nbp-pagination/nbp-pagination.interfaces';
import { PaginationActions } from 'cjlib/nbp/nbp-pagination/nbp-pagination.enums';

interface IPageWindow {
  model: number;
  view: number;
}

interface IPagesWindowLimits {
  min: number;
  max: number;
}

interface IPaginationStatus {
  pageNumber: number;
  pageSize: number;
  totalRecords: number;
}

@Component({
  selector: 'pagination',
  moduleId: module.id,
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnChanges, OnInit {
  /**
   * Configurazione numerica degli stati del paginatore.
   * Di tipo: IPaginationStatus
   * Valore di default: {pageNumber: 1, pageSize: -1, totalRecords: -1};
   */
  @Input() nbpPaginationStatus: IPaginationStatus = { pageNumber: 1, pageSize: -1, totalRecords: -1 };

  /**
   * Configurazione per la visualizzazione dei pulsanti del paginatore.
   * Di tipo : INbpPaginationConfiguration
   * Valore di default: { next: true, prev: true, page: true, last: true, first: true };
   */
  @Input() nbpShowPaginationStatus: INbpPaginationConfiguration = { next: true, prev: true, page: true, last: true, first: true };

  /**
   * Configurazione per la disabilitazione dei pulsanti del paginatore.
   * Di tipo : INbpPaginationConfiguration
   * Valore di default: { next: false, prev: false, page: false, last: false, first: false };
   */
  @Input() nbpDisablePaginationStatus: INbpPaginationConfiguration = { next: false, prev: false, page: false, last: false, first: false };

  /**
   * Proprietà numerica rappresentante la finestra di pagine visualizzate e selezionabili.
   * Valore di default: 3
   */
  @Input() nbpPageWindowSize: number;

  /**
   * Evento di notifica per pagina cambiata
   */
  @Output() nbpOnPageChange: EventEmitter<any> = new EventEmitter();

  /**
  * Evento di notifica per passaggio alla pagina successiva
  */
  @Output() nbpOnNext: EventEmitter<IPaginationStatus> = new EventEmitter<IPaginationStatus>();

  /**
  * Evento di notifica per passaggio ad una pagina qualsiasi
  */
  @Output() nbpOnGoToPage: EventEmitter<IPaginationStatus> = new EventEmitter<IPaginationStatus>();

  /**
  * Evento di notifica per passaggio alla pagina precedente
  */
  @Output() nbpOnPrev: EventEmitter<IPaginationStatus> = new EventEmitter<IPaginationStatus>();

  /**
  * Evento di notifica per passaggio alla prima pagina
  */
  @Output() nbpOnFirst: EventEmitter<IPaginationStatus> = new EventEmitter<IPaginationStatus>();

  /**
  * Evento di notifica per passaggio all'ultima pagina
  */
  @Output() nbpOnLast: EventEmitter<IPaginationStatus> = new EventEmitter<IPaginationStatus>();

  _windowPages: Array<IPageWindow> = [];
  _internalPageNumber: number;
  _paginationActions = PaginationActions;
  private _lastPageModelNumber: number;
  private _showTooltip = false;
  _pageGapSize: number = 5

  constructor() {
    this.updateNbpShowPaginationStatus()
  }

  ngOnInit(): void {
    this.updateNbpShowPaginationStatus()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.nbpPaginationStatus) {
      this.nbpPageWindowSize = this.nbpPageWindowSize ? this.nbpPageWindowSize : 5;
      this._internalPageNumber = changes.nbpPaginationStatus.currentValue.pageNumber - 1;
      if (this._isTotalRecordsProvided() && this.nbpPageWindowSize) {
        this._lastPageModelNumber = this._getTotalPages(this.nbpPaginationStatus.pageSize, this.nbpPaginationStatus.totalRecords) - 1;
        this._evaluateWindowPages(this._internalPageNumber);
      } else {
        this._setShowTooltipCondition();
      }
    }
  }

  private _getTotalPages(pageSize: number, totalSize: number) {
    return Math.trunc(totalSize / pageSize) + (totalSize % pageSize > 0 ? 1 : 0);
  }

  _isTotalRecordsProvided() {
    return this.nbpPaginationStatus && this.nbpPaginationStatus.totalRecords && this.nbpPaginationStatus.totalRecords !== -1;
  }


  private _setShowTooltipCondition(pagesWindowLimits?: IPagesWindowLimits) {
    if (this._isTotalRecordsProvided()) {
      this._showTooltip = (pagesWindowLimits.min >= 999 || pagesWindowLimits.max >= 999) ? true : false;
    } else {
      this._showTooltip = this.nbpPaginationStatus.pageNumber >= 999 ? true : false;
    }
  }

  _evaluateTooltipText(pageNumber: number) {
    return this._showTooltip ? pageNumber : null;
  }

  private _generateRange(pageNumber: number) {
    let min = (Math.floor(pageNumber / this.nbpPageWindowSize) * this.nbpPageWindowSize);
    let max = min + this.nbpPageWindowSize - 1;
    let pagesWindowLimits: IPagesWindowLimits = { min: min, max: max };
    this._setShowTooltipCondition(pagesWindowLimits);
    return pagesWindowLimits;
  }

  private _evaluateWindowPages(pageNumber: number) {
    this._windowPages = [];
    let range = this._generateRange(pageNumber);
    for (let i = range.min; i <= range.max; i++) {
      if (i > this._lastPageModelNumber) { break; }
      this._windowPages.push({ model: i, view: i + 1 });
    }
  }

  _isNextPageWindowButtonVisible() {
    let lastPageFromWindow = this._windowPages.filter(page => page.model === this._lastPageModelNumber);
    return !lastPageFromWindow.length;
  }

  _isPrevPageWindowButtonVisible() {
    let firstPageFromWindow = this._windowPages.filter(page => page.model === 0);
    return !firstPageFromWindow.length;
  }

  private _getPrevPageNumber() {
    let page: number;
    if (this.nbpPaginationStatus.pageNumber !== 1 && this.nbpPaginationStatus.pageNumber) {
      page = this.nbpPaginationStatus.pageNumber - 1;
    } else {
      page = this.nbpPaginationStatus.pageNumber;
    }
    return page;
  }

  private _setPageNumber(windowPage: IPageWindow) {
    this._internalPageNumber = windowPage.model;
    this.nbpPaginationStatus.pageNumber = windowPage.view;
  }


  onNext() {
    this.nbpPaginationStatus.pageNumber = this.nbpPaginationStatus.pageNumber + 1;
    this._internalPageNumber = this.nbpPaginationStatus.pageNumber - 1;
    this._evaluateWindowPages(this._internalPageNumber);
    this.updateNbpShowPaginationStatus();
    this.nbpOnNext.emit(this.nbpPaginationStatus);
    this.nbpOnPageChange.emit();

  }

  onPrev() {
    this.nbpPaginationStatus.pageNumber = this._getPrevPageNumber();
    this._internalPageNumber = this.nbpPaginationStatus.pageNumber - 1;
    this._evaluateWindowPages(this._internalPageNumber);
    this.updateNbpShowPaginationStatus();
    this.nbpOnPrev.emit(this.nbpPaginationStatus);
    this.nbpOnPageChange.emit();
  }

  onLast() {
    this.nbpPaginationStatus.pageNumber = this._getTotalPages(this.nbpPaginationStatus.pageSize, this.nbpPaginationStatus.totalRecords);
    this._internalPageNumber = this.nbpPaginationStatus.pageNumber - 1;
    this._evaluateWindowPages(this._internalPageNumber);

    this.updateNbpShowPaginationStatus();
    this.nbpOnLast.emit(this.nbpPaginationStatus);
    this.nbpOnPageChange.emit();
  }

  onFirst() {
    this.nbpPaginationStatus.pageNumber = 1;
    this._internalPageNumber = 0;
    this._evaluateWindowPages(this._internalPageNumber);
    this.updateNbpShowPaginationStatus();
    this.nbpOnFirst.emit(this.nbpPaginationStatus);
    this.nbpOnPageChange.emit();
  }

  onGoToPage(action: PaginationActions, page?: number) {
    let partialPage: number;
    let currentPageOnWindow: IPageWindow;
    switch (action) {
      case this._paginationActions.ON_WINDOW_NEXT_CLICK:
        partialPage = this._internalPageNumber + this.nbpPageWindowSize;
        this._evaluateWindowPages(partialPage);
        currentPageOnWindow = this._windowPages[0];
        break;
      case this._paginationActions.ON_WINDOW_PREV_CLICK:
        partialPage = this._internalPageNumber - this.nbpPageWindowSize;
        if (partialPage >= 0) {
          this._evaluateWindowPages(partialPage);
          currentPageOnWindow = this._windowPages[this._windowPages.length - 1];
        } else {
          partialPage = this._internalPageNumber;
          this._evaluateWindowPages(partialPage);
          currentPageOnWindow = { model: this._internalPageNumber, view: this.nbpPaginationStatus.pageNumber };
        }
        break;
      case this._paginationActions.ON_PAGE_CLICK:
        currentPageOnWindow = this._windowPages.filter(window => window.model === page)[0];
        partialPage = currentPageOnWindow.model;
        this._evaluateWindowPages(partialPage);
        break;
    }
    this._setPageNumber(currentPageOnWindow);
    this.updateNbpShowPaginationStatus();
    this.nbpOnGoToPage.emit(this.nbpPaginationStatus);
    this.nbpOnPageChange.emit();
  }

  updateNbpShowPaginationStatus() {

    this.nbpDisablePaginationStatus.page = false;
    if (this.nbpPaginationStatus.pageNumber * this.nbpPaginationStatus.pageSize >= this.nbpPaginationStatus.totalRecords)
      this.nbpDisablePaginationStatus.next = true
    else
      this.nbpDisablePaginationStatus.next = false;

    if (this.nbpPaginationStatus.pageNumber == 1)
      this.nbpDisablePaginationStatus.prev = true;
    else
      this.nbpDisablePaginationStatus.prev = false;

  }

}
