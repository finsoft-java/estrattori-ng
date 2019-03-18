import { Component, OnInit, Input } from '@angular/core';
import { TableUtilService } from '../tabelle.service';
import { DatiMockTabelleService } from '../dati-mock-tabelle.service';

@Component({
  selector: 'app-tabelle-selezionabili',
  providers: [TableUtilService, DatiMockTabelleService],
  templateUrl: './tabelle-selezionabili.component.html',
  styleUrls: ['./tabelle-selezionabili.component.less']
})

export class TabelleSelezionabiliComponent implements OnInit {

  /**
 * 
 * scrollBar: gestisce lo scroollbar orizzontale della tabella
 * Type : string 
 * valori ammessi : ['auto', 'scroll']
 * 
 */
  @Input() scrollBar: string;
  tableScrollbarScroll: boolean = false;
  tableScrollbarAuto: boolean = false;

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
  //variabili di conversione scelta tipoTab ad uso interno
  tabGrid: boolean = false;
  tabRow: boolean = false;
  tabCol: boolean = false;


  currentPageNumber = 1;
  radioSelection = 0

  //json intestazione colonne contenente {field-colonna : descrizione-colonna}
  colonneMock: any;
  //array field-colonna
  fieldsTable: any;

  dataTable: any;

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


    this.radioSelection = -1;
    /* Lettura testata tabella */
    let self = this

    this.datiMockTabelleService.getTestataTabella("TabellaSelezionabile")
      .then(value => {
        self.colonneMock = value;
        let objBuffer: any = Object.keys(self.colonneMock[0])
        self.fieldsTable = [];
        objBuffer.forEach(key => {
          if (self.colonneMock[0][key].filter)
            self.fieldsTable.push(key)
        })

      });

    /* Lettura dati tabella */
    this.datiMockTabelleService.getAllClients("TabellaSelezionabile")
      .then(value => {
        self.dataTable = [...value];
      });

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
