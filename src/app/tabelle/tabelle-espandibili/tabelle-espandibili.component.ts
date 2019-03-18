import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { TableUtilService } from '../tabelle.service';


@Component({
  selector: 'app-tabelle-espandibili',
  providers: [TableUtilService],
  templateUrl: './tabelle-espandibili.component.html',
  styleUrls: ['./tabelle-espandibili.component.less']
})
export class TabelleEspandibiliComponent implements OnInit {

  /**
  * scrollBar: scroollbar orizzontale della tabella
  * Type : string 
  * valori ammessi : ['auto', 'scroll']
  */
  @Input() scrollBar: string;

  /**
  * selectedRow: riga pre-selezionata
  * Type : string 
  */
  @Input() selectedRow: number = -1;

  /**
  * Intestazioni colonne tabella:{field-colonna : descrizione-colonna}
  */
  @Input('headingTable') headingTable: any = [];

  /**
   *  array di 2 array. 
   * Il Primo array contiene il nome dei campi livello 0 della tabella headingTable.
   * Il secondo array contiene il nome dei campi livello 1 della tabella headingTable 
   */
  @Input() fieldsTable: [[String], [String]] = [null,null];

  /**
  * array dei dati tabella; E' un array di array che rappresenta 
  * i dati della tabella da visualizzare
  */
  @Input('dataTable') dataTable: any = [];

  /**
   * customRowsTable
   * 
   * Tabella contenente in formato json i dati Custom di visualizzazione delle righe espandibili della Tabella;
   * 
   * Il componente tabella espandibile, nella visualizzazione delle righe espandibili potrà adoperare, in alternativa 
   * ai dati standard, dei dati custom. Tali dati dovranno essere indicati in una tabella custom creata ad hoc.
   * 
   * Il nome di tale tabella dovrà essere essere posta in bind con customRowsTable
   * 
   * esempio: 
   * 
   * [customRowsTable] = "nome_tabella_custom" 
   * 
   * customRowsTable sarà un array di oggetti json : [{},{},{}......].
   * 
   * Ogni oggetto json rappresenta i dati di visualizzazione di una sola riga.
   * 
   * Ogni riga potrà o meno essere associata ad un template.
   * Se associata presenterà la valorizzazione del campo template dell'oggetto json.
   * 
   * I templates da adoperarsi saranno preventivamente definiti all'atto del richiamo del componente 
   *  <app-tabelle-espandibili>;
   * 
   * Esempio:
   *  
   *   <app-tabelle-espandibili [customRowsTable]="customRowsTableGaranzie" [headingTable]="headingTable" [dataTable]="dataTable"
   *                [fieldsTable]="fieldsTable">
   *
   *       <ng-template let-row #template0>
   *          ..................... 
   *          codice html template0
   *          .....................
   *       </ng-template>
   *       <ng-template let-row #template1>
   *          ..................... 
   *          codice html template0
   *          .....................
   *       </ng-template>
   * 
   *      ................
   *      ................
   *      ................
   *   
   *       <ng-template let-row #templateX>
   *          ..................... 
   *          codice html template0
   *          .....................
   *       </ng-template>
   *
   *   </app-tabelle-espandibili>
   * 
   * Come indicato in precedenza l'associazione tra riga e template avverrà all'interno dei dati json.
   * 
   * Esempio:
   * 
   * [{ 'field1':'value1',
   *    'field2':'value2',
   *    ........:........,
   *    'template':'nameTemplate'  
   *  }
   * ]
   * 
   * Il nome dei templates da adoperare è predefinito.
   * 
   * nameTemplate puo assumere solo i valori: template0,template1,template2.....template9 
   * 
   * L'assenza del campo template o una sua scorretta valorizzazione impedirà la visualizzazione dei dati custom 
   * e riporterà il componente al comportamento di default. (visualizzazione dei dati delle tabelle standars)
   * 
   * I templates dovranno essere definiti nel componente padre attraveso la seguente modalità:
   * 
   * <app-tabelle-espandibili [customRowsTable]="customRowsTable" [headingTable]="headingTable" [dataTable]="dataTable" [fieldsTable]="fieldsTable">
   *      
   *      <ng-template #template0>
   *      ........................
   *      </ng-template>
   * 
   *      <ng-template #template1>
   *      ........................
   *      </ng-template>
   *      .
   *      .
   *      .
   *      <ng-template #template9>
   *      ........................
   *      </ng-template>
   *     
   * </app-tabelle-espandibili>
   *  
   */
  @Input() customRowsTable: any = [];

  tableScrollbarScroll: boolean = false;
  tableScrollbarAuto: boolean = false;

  toggle = {};
  currentPageNumber = 1;

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

  @ContentChild('template0') template0;
  @ContentChild('template1') template1;
  @ContentChild('template2') template2;
  @ContentChild('template3') template3;
  @ContentChild('template4') template4;
  @ContentChild('template5') template5;
  @ContentChild('template6') template6;
  @ContentChild('template7') template7;
  @ContentChild('template8') template8;
  @ContentChild('template9') template9;


  constructor(
    public _tableUtilService: TableUtilService<any>) {

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
    this.toggle = {};
  }

}
