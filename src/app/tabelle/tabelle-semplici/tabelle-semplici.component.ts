import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Sorter } from '../../../utils/sort.utils';
import { TableUtilService } from '../tabelle.service';
import { DatiMockTabelleService } from '../dati-mock-tabelle.service';

@Component({
  selector: 'app-tabelle-semplici',
  providers: [TableUtilService, DatiMockTabelleService],
  templateUrl: './tabelle-semplici.component.html',
  styleUrls: ['./tabelle-semplici.component.less']
})
export class TabelleSempliciComponent implements OnInit {

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
   * selectedRow: numero che indica la riga selezionata inizialmente. 
   */
  @Input() selectedRow: number = -1;
  tableScrollbarScroll: boolean = false;
  tableScrollbarAuto: boolean = false;

  currentPageNumber = 1;
  //json intestazione colonne contenente {field-colonna : descrizione-colonna}
  colonneMock: any;
  //array field-colonna
  fieldsTable: any;

  dataTable: any;
  datiTabBE: any;
  datiTabFE: any;
  sorterBE: Sorter;
  sorterFE: Sorter;

  nbpPaginationStatus: any = null;

  constructor(
    public _tableUtilService: TableUtilService<any>,
    private datiMockTabelleService: DatiMockTabelleService) {

  }

  ngOnInit() {

    if (this.scrollBar) {
      this.scrollBar = this.scrollBar.toUpperCase()
      if (this.scrollBar == "AUTO")
        this.tableScrollbarAuto = true;
      if (this.scrollBar == "SCROLL")
        this.tableScrollbarScroll = true;
    }

    if (this.tipoTab) {
      this.tipoTab = this.tipoTab.toUpperCase()
      if (this.tipoTab == "GRID")
        this.tabGrid = true;
      if (this.tipoTab == "COL")
        this.tabCol = true;
      if (this.tipoTab == "ROW")
        this.tabRow = true;
    }

    /* Lettura testata tabella */
    let self = this

    this.datiMockTabelleService.getTestataTabella("TabellaSemplice")
      .then(value => {
        self.colonneMock = value;
        self.fieldsTable = Object.keys(self.colonneMock[0])
      });

    /* Lettura dati tabella */
    this.datiMockTabelleService.getAllClients("TabellaSemplice")
      .then(value => {
        self.dataTable = [...value];
        self.datiTabBE = [...value];
        self.datiTabFE = [...value];
    
        let currentPageStatus = {
          pageNumber: 1,
          pageSize: 5,
          totalRecords: this.dataTable.length
        }
    
        this._tableUtilService.setCurrentPageStatus(currentPageStatus);
      }
    );

    this.sorterBE = new Sorter();
    this.sorterFE = new Sorter();
  }

  // minorDati(){
  //   this.datiMockTabelleService.getAllClients("TabellaSemplice2")
  //     .then(value => {
  //       this.dataTable = [...value];
  //       this.datiTabBE = [...value];
  //       this.datiTabFE = [...value];
    
  //       let currentPageStatus = {
  //         pageNumber: 1,
  //         pageSize: 5,
  //         totalRecords: this.dataTable.length
  //       }
    
  //       this._tableUtilService.setCurrentPageStatus(currentPageStatus);
  //     });
  // }

  /**
   * 
   * TODO: le due tabelle singole dovrebbero essere estratte in un componente a parte
   * Così facendo questo metodo prenderebbe in input solo nestedProperties, qui invece
   * bisogna differenziare i due dati sennò ordiniamo entrambe le due tabelle insieme
   * 
   */
  private sortBy(isTabBE: boolean, nestedProperties: string): void {

    if (isTabBE) {

      this.sorterBE.sortBy(this.datiTabBE, nestedProperties);
    }
    else {

      this.sorterFE.sortBy(this.datiTabFE, nestedProperties);
    }
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

}
