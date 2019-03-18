import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NbpPipe, INbpTableOptions, NbpAccordionComponent } from 'cjlib';
import { NbpDataSource, NbpTableComponent } from 'cjlib';
import { DemoServiceClientService } from './../../../demo-service-client.service';
import { DemoHttpDataSource } from './../../../demo-http-data-source';
import { INbpDataSource, INbpOnRowActionEvent, INbpOnRowsActionEvent } from 'cjlib';
import { Sorter } from '../../../utils/sort.utils';

import { PaginationComponent } from './../pagination/pagination.component';
import { TableUtilService } from '../tabelle.service';
import { DatiMockTabelleService } from '../dati-mock-tabelle.service';
import { NbpStyle, NbpButtonType, NbpSize } from 'cjlib';
import { CharPaginator } from 'cjlib';


@Component({
  selector: 'app-tabelle-filtrate-pl',
  providers: [DemoServiceClientService, TableUtilService, DatiMockTabelleService],
  templateUrl: './tabelle-filtrate-pl.component.html',
  styleUrls: ['./tabelle-filtrate-pl.component.less']
})

export class TabelleFiltratePLComponent implements OnInit {

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


  /**
   *
   * itemsSeletion elementi su cui avviene la selezione
   * Type : object
   * valori ammessi :
   *
   */
  @Input() itemsSelection: any[];

  /**
   *
   * scrollBar: gestisce lo scroollbar orizzontale della tabella
   * Type : string
   * valori ammessi : ['auto', 'scroll']
   *
   */
  @Input() scrollBar: string;

  /**
   * Se true: utilizza il filtro nbp-index-alphabetic
   * Se false: utilizza il filtro nbp-pagination-letters
   */
  @Input() useIndexAlphabeticFilter: boolean;

  //variabili di conversione scelta scrollBar ad uso interno
  tableScrollbarScroll: boolean = false;
  tableScrollbarAuto: boolean = false;

  @Input() selectedRow: number = -1;

  //------------

  currentPageNumber = 1;

  campi = [
    {
      id: 1,
      label: ['Name', 'Surname', 'Street', 'Ora', 'DATA DI CREAZIONE']
    }
  ];
  colonne = [
    {
      id: 'ID',
      name: 'NAME',
      surname: 'SURNAME',
      info: 'STREET',
      idAuth: 'ID Utente',
      password: 'Password',
      uid: 'Ultimo Accesso'
    }
  ];

  dataTablePL: any = [];
  dataTableFilteredPL: any = [];

  private sorter: Sorter;

  chars: Array<CharPaginator> = [
    {
      label: "A",
    },
    {
      label: "B",
    },
    {
      label: "C",
      disabled: true,
      selected: false
    },
    {
      label: "D",
    },
    {
      label: "E",
      selected: false
    },
    {
      label: "F",
    },
    {
      label: "G",
    },
    {
      label: "H",
    },
    {
      label: "I",
      disabled: true,
    },
    {
      label: "L",
    },
    {
      label: "M",
    },
    {
      label: "N",
    },
    {
      label: "O",
      disabled: true,
    },
    {
      label: "P",
    },
    {
      label: "Q",
    },
    {
      label: "R",
    },
    {
      label: "S",
      disabled: true,
    },
    {
      label: "T",
      disabled: true,
    },
    {
      label: "U",
    },
    {
      label: "V",
    },
    {
      label: "Z",
    },
    {
      label: "#",
      selected: true
    }
  ];

  constructor(
    public _tableUtilServicePL: TableUtilService<any>,
    private datiMockTabelleService: DatiMockTabelleService) {

    this.sorter = new Sorter();

  }

  filterPaginatoreLettera(selectedItems) {

    this.dataTableFilteredPL = this.dataTablePL;

    if (!selectedItems)
      return

    if (selectedItems === '#'){
      this.clearFilter()
    }else if(!!selectedItems){
      this.dataTableFilteredPL = this.dataTablePL.filter(
        el => el.name.toUpperCase().startsWith(selectedItems.toUpperCase())
      );
    }


    this.sorter.sortByCurrentProperties(this.dataTableFilteredPL);


    let currentPageStatus = {
      pageNumber: 1,
      pageSize: 5,
      totalRecords: this.dataTableFilteredPL.length
    }

    this._tableUtilServicePL.setCurrentPageStatus(currentPageStatus);

    // console.log(this.dataTableFilteredPL);
  }

  clearFilter() {

    this.dataTableFilteredPL = this.dataTablePL;

    let currentPageStatus = {
      pageNumber: 1,
      pageSize: 5,
      totalRecords: this.dataTableFilteredPL.length
    }

    this._tableUtilServicePL.setCurrentPageStatus(currentPageStatus);

    this.sorter.sortByCurrentProperties(this.dataTableFilteredPL);
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

    this.getDataTable()

  }

  getDataTable() {

    this.datiMockTabelleService.getAllClients()
      .then(clients => {
        this.dataTablePL = clients;
        this.dataTableFilteredPL = [...clients];

        let currentPageStatus = {
          pageNumber: 1,
          pageSize: 5,
          totalRecords: this.dataTablePL.length
        }

        this._tableUtilServicePL.setCurrentPageStatus(currentPageStatus);
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

  private sortBy(nestedProperties: string): void {

    this.sorter.sortBy(this.dataTableFilteredPL, nestedProperties);
  }
}
