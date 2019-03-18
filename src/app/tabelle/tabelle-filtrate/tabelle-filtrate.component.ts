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


@Component({
  selector: 'app-tabelle-filtrate',
  providers: [DemoServiceClientService, TableUtilService, DatiMockTabelleService],
  templateUrl: './tabelle-filtrate.component.html',
  styleUrls: ['./tabelle-filtrate.component.less']
})

export class TabelleFiltrateComponent implements OnInit {

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

  //variabili di conversione scelta scrollBar ad uso interno
  tableScrollbarScroll: boolean = false;
  tableScrollbarAuto: boolean = false;

  @Input() selectedRow: number = -1;

  //------------

  backgroundgray: NbpStyle = NbpStyle.BACKGROUNDGRAY
  backgroundgreen: NbpStyle = NbpStyle.BACKGROUNDGREEN
  check: NbpStyle = NbpStyle.CHECK
  default: NbpStyle = NbpStyle.DEFAULT
  outline: NbpStyle = NbpStyle.OUTLINE
  primary: NbpStyle = NbpStyle.PRIMARY
  profile: NbpStyle = NbpStyle.PROFILE
  secondary: NbpStyle = NbpStyle.SECONDARY

  currentPageNumber = 1;

  inputName: any = '';
  inputSName: any = '';
  inputStreet: any = '';

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

  dataTable: any = []
  dataTableFiltered: any = [];
  opened: Boolean = false;

  private sorter: Sorter;

  toggle() {
    this.opened = !this.opened;
  }

  constructor(
    public _tableUtilService: TableUtilService<any>,
    private datiMockTabelleService: DatiMockTabelleService) {

    this.sorter = new Sorter();

  }


  filterData(selectedItems) {

    this.dataTableFiltered = this.dataTable;

    if (selectedItems.length == 0)
      return

    this.inputName = '';
    this.inputSName = '';
    this.inputStreet = '';

    if (selectedItems[0] && selectedItems[0].value)
      this.inputName = selectedItems[0].value
    if (selectedItems[1] && selectedItems[1].value)
      this.inputSName = selectedItems[1].value
    if (selectedItems[2] && selectedItems[2].value)
      this.inputStreet = selectedItems[2].value


    this.dataTableFiltered = [];

    let self = this;

    if (this.inputName)
      this.dataTableFiltered = this.dataTable.filter(
        el => el.name.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0
      );

    if (this.inputSName)
      this.dataTableFiltered = this.dataTable.filter(
        el => el.surname.toUpperCase().indexOf(this.inputSName.toUpperCase()) >= 0
      );

    if (this.inputStreet)
      this.dataTableFiltered = this.dataTable.filter(el =>
        el.street.toUpperCase().indexOf(this.inputStreet.toUpperCase()) >= 0);

    this.sorter.sortByCurrentProperties(this.dataTableFiltered);


    let currentPageStatus = {
      pageNumber: 1,
      pageSize: 5,
      totalRecords: this.dataTableFiltered.length
    }

    this._tableUtilService.setCurrentPageStatus(currentPageStatus);

    // console.log(this.dataTableFiltered);
  }

  ClearFilter() {
    this.opened = false;
    this.inputName = '';
    this.inputSName = '';
    this.inputStreet = '';

    this.dataTableFiltered = this.dataTable;

    let currentPageStatus = {
      pageNumber: 1,
      pageSize: 5,
      totalRecords: this.dataTableFiltered.length
    }

    this._tableUtilService.setCurrentPageStatus(currentPageStatus);

    this.sorter.sortByCurrentProperties(this.dataTableFiltered);
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
        this.dataTable = clients;
        this.dataTableFiltered = [...clients];

        let currentPageStatus = {
          pageNumber: 1,
          pageSize: 5,
          totalRecords: this.dataTableFiltered.length
        }

        this._tableUtilService.setCurrentPageStatus(currentPageStatus);
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

    this.sorter.sortBy(this.dataTableFiltered, nestedProperties);
  }
}
