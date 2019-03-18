import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Sorter } from '../../utils/sort.utils';
import { TableUtilService } from '../tabelle/tabelle.service';
import { RowTestataTabellaAccordion, RowDatiTabellaEstrattori, RowTestataTabellaEstrattori } from '../tabelle/dati-mock-tabelle.service';
import { CellaTestata, CellaDato } from '../tabelle/tabelle.interfaces';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
import { Router,NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common/';
import { TabelleCheckBoxComponent } from '../tabelle/tabelle-checkbox/tabelle-checkbox.component';

@Component({
  selector: 'app-elenco-estrattori',
  providers: [ TableUtilService],
  templateUrl: './elenco-estrattori.component.html',
  styleUrls: ['./elenco-estrattori.component.less']
})
export class ElencoEstrattoriComponent {

  //currentUrl: string;
  checkBoxIsActive = new Array();
  fieldsTable: any;
  checkBoxColonne: RowTestataTabellaEstrattori [];
  arrEstrattori: object [];
  checkBoxData: any = [];
  arrEstr: RowDatiTabellaEstrattori [];
  arrayEstrattori: any;
  currentPageStatus: any;
  tableStatusFromJson: any;
  nbpPaginationStatus: any = null;
  currentPageNumber = 0; 

  @ViewChild(TabelleCheckBoxComponent)
  componenteCheckboxTable : TabelleCheckBoxComponent;

  constructor (private httpService: HttpClient, public _myTableUtilService: TableUtilService<any>) {
  }


  ngOnInit () {

    let self = this;
    
    self.checkBoxColonne= [
      new RowTestataTabellaEstrattori(
        new CellaTestata('', 'Descrizione Procedura', '', 0, false, '', "two"),
        new CellaTestata('', 'User Id', '', 0, true),
        new CellaTestata('', 'Data Inizio', '', 0, false),
        new CellaTestata('', 'Data Fine', '', 0, false)
      )
    ]
    
    this.fieldsTable = Object.keys(this.checkBoxColonne[0]) 
    
    this.httpService.get('./assets/Estrattori.json').subscribe(
      data => {
        this.arrEstrattori = data["data"];	 // FILL THE ARRAY WITH DATA.

        for(let contact of data["data"]) {
          var datePipe = new DatePipe('it-IT');
          let dataInizio = datePipe.transform(contact['dataInizio'], 'dd/MM/yyyy H:mm');
          let dataFine = datePipe.transform(contact['dataFine'], 'dd/MM/yyyy H:mm');
          let arrayNew = new RowDatiTabellaEstrattori( 
            new CellaDato('', contact['codProcedura']),
            new CellaDato('', contact['userId']),
            new CellaDato('', dataInizio),
            new CellaDato('', dataFine)
          );

          self.checkBoxData.push(arrayNew);

          
        }
        self.componenteCheckboxTable._tableUtilService.setCurrentPageStatus({
          pageNumber: 1,
          pageSize: 10,
          totalRecords: data["data"].length
        });
        console.log(self.checkBoxData);
      }, 
      (err: HttpErrorResponse) => {
        console.log("sono dentro errore");
        console.log (err.message);
      }
    ); 
      
  }
}