import { Component, OnInit, ViewChild } from '@angular/core';
import { NbpPipe, INbpTableOptions } from 'cjlib';

import { NbpDataSource, NbpTableComponent } from 'cjlib';
import { DemoServiceClientService } from './../../demo-service-client.service';
import { DemoHttpDataSource } from './../../demo-http-data-source';
import { INbpDataSource, INbpOnRowActionEvent, INbpOnRowsActionEvent } from 'cjlib';


@Component({
  selector: 'app-nbp-table',
  providers: [DemoServiceClientService],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  eventData: INbpOnRowActionEvent<Object>;
  selectionMethod = 'single';
  currentPageNumber = 1;
  multiEventData: Array<Object> = new Array<Object>();
  lastMultiEventData: Object = new Object();

  preCheckedFn = (item) => {
    return item.id % 2 === 0;
  };

  checkboxDisabledFn = (item) => {
    return item.id % 2 !== 0;
  };

  mockData = [
    {
      id: 0,
      name: 'Sawyer',
      surname: 'Mckenzie',
      street: 'Agate Court',
      accountInfo: {
        uid: 'd6cc01f2-aad2-4ca1-b4c3-794a846e34d5',
        password: '59391bbd502d1788f2d11e8d',
        accountLastLogin: new Date(),
        idAuth: 0
      }
    },
    {
      id: 1,
      name: 'Mae',
      surname: 'Watkins',
      street: 'Commercial Street',
      accountInfo: {
        uid: 'cc6bc503-341b-410b-83f0-c11912584197',
        password: '59391bbde5ee69bae5fc249a',
        accountLastLogin: new Date(),
        idAuth: 9
      }
    },
    {
      id: 2,
      name: 'Rivers',
      surname: 'Giles',
      street: 'Rutherford Place',
      accountInfo: {
        uid: '3cbb85bd-0be9-4ac2-b1e4-4092f5326ba5',
        password: '59391bbd5b2eec4de4a802f5',
        accountLastLogin: new Date(),
        idAuth: 2
      }
    },
    {
      id: 3,
      name: 'Clements',
      surname: 'Osborn',
      street: 'Calder Place',
      accountInfo: {
        uid: '3e0b6ebe-ba7d-480f-98bf-b7d7697083f9',
        password: '59391bbd36192b641829be54',
        idAuth: 4
      }
    },
    {
      id: 4,
      name: 'Lloyd',
      surname: 'Odonnell',
      street: 'Crawford Avenue',
      accountInfo: {
        uid: '4fa67d9e-60f1-4de0-8e49-5b42fb9d44db',
        password: '59391bbdb1eb94dff9d4932c',
        idAuth: 6
      }
    },
    {
      id: 5,
      name: 'Michelle',
      surname: 'Browning',
      street: 'Seigel Court',
      accountInfo: {
        uid: '72723e25-927e-4f85-bd8d-6b49cfe8f750',
        password: '59391bbd6bbae2385eadc2d4',
        idAuth: 5
      }
    },
    {
      id: 6,
      name: 'House',
      surname: 'Lang',
      street: 'Ide Court',
      accountInfo: {
        uid: '567cb816-1d5c-4277-9975-17506a8afd87',
        password: '59391bbd57eca5109d389b0c',
        idAuth: 3
      }
    },
    {
      id: 7,
      name: 'Toni',
      surname: 'Rhodes',
      street: 'Gerald Court',
      accountInfo: {
        uid: 'ea679837-f033-475b-8a89-4239f14cbddc',
        password: '59391bbd66794eac2c971422',
        idAuth: 10
      }
    },
    {
      id: 8,
      name: 'Ferrell',
      surname: 'Mendez',
      street: 'Aurelia Court',
      accountInfo: {
        uid: '9a0b2959-1a1c-4eaa-82b3-8adfca2f73f8',
        password: '59391bbd6ac90b44cff77576',
        idAuth: 11
      }
    },
    {
      id: 9,
      name: 'Mcdonald',
      surname: 'Swanson',
      street: 'Bergen Court',
      accountInfo: {
        uid: '9f42700b-9a7e-4495-9a0b-21f6df77fca0',
        password: '59391bbd8536a74a9d194124',
        idAuth: 1
      }
    },
    {
      id: 10,
      name: 'Gould',
      surname: 'Mueller',
      street: 'Henderson Walk',
      accountInfo: {
        uid: '273a8e24-50f8-4d63-8a69-33fb99a60ad1',
        password: '59391bbdab515fd3e1692e4e',
        idAuth: 8
      }
    },
    {
      id: 11,
      name: 'Latonya',
      surname: 'Justice',
      street: 'Brooklyn Road',
      accountInfo: {
        uid: '784b75f7-8966-4788-a742-e72f322b4799',
        password: '59391bbd207e257df6071c17',
        idAuth: 7
      }
    }
  ];

  /* Gestione con Observable + Timeout*/
  dynamicDataSource: any;
  @ViewChild('arrayTable')
  arrayTable: NbpTableComponent<Object>;

  gridOptionsDynamic: INbpTableOptions = {
    sortable: true,
    pageSize: 5
  };

  /* Gestione con Observable a partire da dati Statici*/
  gridOptions: INbpTableOptions = {
    sortable: true,
    pageSize: 5,
    disablePagination: false
  };

  gridDataSource: NbpDataSource<Object>;

  @ViewChild('httpTable') httpTable: NbpTableComponent<Object>;

  dynamicDataSourceToCall: INbpDataSource<Object>;

  gridOptionsDynamicToCall: INbpTableOptions = {
    sortable: true,
    pageSize: 5
  };

  nbpPipe: any = NbpPipe;

  constructor(private demoServiceClient: DemoServiceClientService) {
    /* Popolazione datasource statico di array con chiamata funzione getPage del service */

    this.gridDataSource = new NbpDataSource<Object>(this.mockData);
    //dacambiarecamillo
    // this.dynamicDataSourceToCall = new DemoHttpDataSource<Object>(demoServiceClient, 5);
  }

  ngOnInit() {

    /* Generazione datasource Dinamico a partire da uno stream di eventi temporizzati
    this.dynamicDataSource = new Observable((observer: Observer<IDataPage<Object>>) => {
      setTimeout(() => {
        observer.next(this.getPortionData(0, 2));
        console.log('primo evento', new Date());
      }, 2000);

      setTimeout(() => {
        observer.next(this.getPortionData(2, 4));
        console.log('secondo evento', new Date());
      }, 4000);

      setTimeout(() => {
        observer.next(this.getPortionData(4, 6));
        console.log('terzo evento', new Date());
      }, 6000);

      setTimeout(() => {
        observer.complete();
      }, 15000);
    });
  */
    /* Generazione dataSource Dinamico effettuando chiamata ad un servizio Mock */
    // this.dynamicDataSourceToCall = this.demoServiceClient.getPage(this.currentPageNumber);
    // this.dynamicDataSource.subscribe
  }


  bind() {
    this.httpTable.datasourceRead();
  }

  onRowActionEvent(onRowAction: INbpOnRowActionEvent<Object>) {
    if (onRowAction) {
      this.eventData = onRowAction;
    }
  }

  onRowsActionEvent(onRowsAction: INbpOnRowsActionEvent<Object>) {
    if (onRowsAction) {
      this.multiEventData = onRowsAction.items;
      this.lastMultiEventData = onRowsAction.lastSelectedItem;
    }
  }

  onClickRow(onRowAction: INbpOnRowActionEvent<Object>) {
    if (onRowAction) {
      this.eventData = onRowAction;
    }
  }
  resetAll() {
    this.lastMultiEventData = {};
    this.multiEventData = [];
    this.eventData = { item: null, rowIndex: null, action: null };

  }
  /*onNext() {
    this.currentPageNumber += 1;
    this.arrayTable.navigateToPage(this.currentPageNumber);
  }

  onPrev() {
    this.currentPageNumber -= 1;
    this.arrayTable.navigateToPage(this.currentPageNumber);
  }

  onNext2() {
    this.currentPageNumber += 1;
    this.httpTable.navigateToPage(this.currentPageNumber);
  }

  onPrev2() {
    this.currentPageNumber -= 1;
    this.httpTable.navigateToPage(this.currentPageNumber);
  }
  */
}
