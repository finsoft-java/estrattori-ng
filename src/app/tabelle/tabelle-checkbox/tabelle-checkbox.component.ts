import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Sorter } from '../../../utils/sort.utils';
import { TableUtilService } from '../tabelle.service';
import { INbpTableColumnLib, IPaginationStatus, INbpPaginationConfiguration } from '../tabelle.interfaces';

@Component({
  selector: 'app-tabelle-checkbox',
  providers: [TableUtilService],
  templateUrl: './tabelle-checkbox.component.html',
  styleUrls: ['./tabelle-checkbox.component.less']
})
export class TabelleCheckBoxComponent implements OnInit {

  /**
   * 
   * tipoTab: definisce il tipo di grigliatura della tabella. 
   *          Tre le possibilità: tabella a griglia, tabella a colonne e tabella a righe.  
   *
   * Se il parametro non viene specificato
   * 
   * Type : string 
   * valori ammessi : ['col', 'row', 'grid']
   * 
   */
  @Input() tipoTab: string;

  tabGrid: boolean = false;
  tabRow: boolean = false;
  tabCol: boolean = false;


  /**
   * 
   * scrollBar: gestisce lo scroollbar orizzontale della tabella
   * Type : string 
   * valori ammessi : ['auto', 'scroll']
   * 
   */
  @Input() scrollBar: string;

  /**
   * headerTab: array delle intestazioni colonne della tabella ckeckbox. 
   */
  @Input("headerTab") colonneTabella: [any];
  /**
   * dataTab: array delle righe della tabella. 
   */
  @Input("dataTab") datiTabella: [any];
  /**
   * selectedRows: righe selezionate. 
   */
  @Input("selectedRows") isActive: any = new Array();


  //@Input() tableStatus: IPaginationStatus;


  fieldsTable: any;

  tableScrollbarScroll: boolean = false;
  tableScrollbarAuto: boolean = false;

  currentPageNumber = 1;


  //array field-colonna
  isAllActive = false;

  runIE: any = false;

  sorter: Sorter;

  nbpPaginationStatus: any = null;

  constructor(
    public _tableUtilService: TableUtilService<any>,
  ) {
  }


  ngOnInit() {

    this.fieldsTable = Object.keys(this.colonneTabella[0]) 

    this.runIE = this.detectIE();

    if (this.scrollBar) {
      this.scrollBar = this.scrollBar.toUpperCase()
      if (this.scrollBar == "AUTO")
        this.tableScrollbarAuto = true;
      if (this.scrollBar == "SCROLL")
        this.tableScrollbarScroll = true;
    }

    /* Settaggio Tipo Tabella */
    if (this.tipoTab) {
      this.tipoTab = this.tipoTab.toUpperCase()
      if (this.tipoTab == "GRID")
        this.tabGrid = true;
      if (this.tipoTab == "COL")
        this.tabCol = true;
      if (this.tipoTab == "ROW")
        this.tabRow = true;
    }

    this.sorter = new Sorter();

  }

  private sortBy(isTabBE: boolean, nestedProperties: string): void {
    this.sorter.sortBy(this.datiTabella, nestedProperties);
  }

  setAllActive() {
    for (let i = 0; i < this.isActive.length; i++) {
      if (this.runIE)
        this.isActive[i] = !this.isAllActive
      else
        this.isActive[i] = this.isAllActive
    };
  }

  _onFirstPage($event) {
    this.currentPageNumber = $event.pageNumber;
  }
  _onLastPage($event) {
    this.currentPageNumber = $event.pageNumber;
  }
  _onNextPage($event) {
    this.currentPageNumber = $event.pageNumber;
  }
  _onGoToPage($event) {
    this.currentPageNumber = $event.pageNumber;
  }
  _onPrevPage($event) {
    this.currentPageNumber = $event.pageNumber;
  }
  _onPageChange() {

  }

  /**
   * detect IE
   * ritorna la versione di IE o false se il browser non è Internet Explorer
   */
  detectIE() {
    var ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // IE 12 / Spartan
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge (IE 12+)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 o piu vecchi => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // altri browser
    return false;
  }

}
