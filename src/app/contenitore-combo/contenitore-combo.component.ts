
import {
  Component, Input, Output, Optional, Inject, EventEmitter, forwardRef, OnInit,
  ViewChild, HostBinding, HostListener, ElementRef
} from '@angular/core';
import { NbpPipe } from 'cjlib';
import { NbpDataSource } from 'cjlib';

import { DemoServiceClientService } from './../../demo-service-client.service';
import { DemoHttpDataSource } from './../../demo-http-data-source';
import { INbpDataSource } from 'cjlib';
import { Http, Response } from '@angular/http';
import { NbpStyle } from 'cjlib';



@Component({
  selector: 'app-contenitore-combo',
  moduleId: module.id,
  templateUrl: './contenitore-combo.component.html',
  styleUrls: ['./contenitore-combo.component.less'],
  providers: [DemoServiceClientService]
})
export class ComboComponent implements OnInit {

  disabled: any;
  required: any;
  selectedItem8: any;
  showValidation: boolean= false;

  primary: NbpStyle = NbpStyle.PRIMARY;
  /** Datasources */
  items = ['primo elemento', 'secondo elemento', 'terzo elemento'];
  items2 = [
    {
      id: 11,
      description: 'Titolo del primo elemento'
    },
    {
      id: 12,
      description: 'Titolo del secondo elemento'
    },
    {
      id: 13,
      description: 'Titolo del terzo elemento'
    },
    {
      id: 14,
      description: 'Titolo del quarto elemento'
    },
    {
      id: 15,
      description: 'Titolo del quinto elemento'
    },
    {
      id: 16,
      description: 'Titolo del sesto elemento'
    },
    {
      id: 17,
      description: 'Titolo del settimo elemento'
    }
  ];
  items3 = [
    {
      id: 11,
      content:
        {
          description: 'Titolo del primo elemento'
        }
    },
    {
      id: 12,
      content: {
        description: 'Titolo del secondo elemento'
      }
    },
    {
      id: 13,
      content: {
        description: 'Titolo del terzo elemento'
      }
    }
  ];
  items4 = [
    {
      id: 11,
      description: 'Italia'
    },
    {
      id: 12,
      description: 'Germania'
    },
    {
      id: 13,
      description: 'Francia'
    },
    {
      id: 14,
      description: 'Finlandia'
    },
    {
      id: 15,
      description: 'Spagna'
    },
    {
      id: 16,
      description: 'Svizzera'
    }
  ];

  itemsDataSource: NbpDataSource<string>;
  items2DataSource: NbpDataSource<any>;
  items3DataSource: NbpDataSource<any>;
  items4DataSource: NbpDataSource<any>;

  /* Gestione con Observable + Timeout*/
  dynamicDataSource: NbpDataSource<any>;

  pipes = [
    {
      'id': NbpPipe.LOWERCASE,
      'description': 'lowercase'
    },
    {
      'id': NbpPipe.UPPERCASE,
      'description': 'uppercase'
    }];

  pipesDataSource: NbpDataSource<any>;


  filter = this.pipes[0].id;

  /** models */
  selectedItem = this.items[1];
  selectedItems = null;

  selectedObjectItem2 = this.items2[1];
  selectedObjectItem3: any = undefined;
  selectedObjectItem4 = 11;
  selectedObjectItem5 = this.items3[1];
  selectedObjectItem6 = this.items2[0];
  selectedObjectItem7: any = undefined;
  selectedObjectItem8: any = undefined;

  nextElementCounter = 0;

  itemFromSelect: any = undefined;

  customErrorMessage = 'messaggio di errore custom!!';
  constructor(private demoServiceClient: DemoServiceClientService, private http: Http) {
    this.itemsDataSource = new NbpDataSource<string>(this.items);
    this.items2DataSource = new NbpDataSource<any>(this.items2);
    this.items3DataSource = new NbpDataSource<any>(this.items3);
    this.items4DataSource = new NbpDataSource<any>(this.items4);
    this.pipesDataSource = new NbpDataSource<any>(this.pipes);
  }

  // funzione che invoca l'http.get nel service che mi recupera i dati da un file json
  getComboData() {
    this.demoServiceClient.getComboData().subscribe(
      data => {
        this.dynamicDataSource = new NbpDataSource<any>(data)
        this.selectedObjectItem7 = data[0];
      }
    );
  }

  selectNull() {
    this.selectedItem = null;
  }

  selectNotExisting() {
    this.selectedItem = 'NOT EXISTING';
  }
  selectNext() {
    this.selectedItem = this.items[this.nextElementCounter];

    this.nextElementCounter++;
    this.nextElementCounter = this.nextElementCounter % this.items.length;
  }

  selectNotExistingObject() {
    this.selectedObjectItem2 = undefined;
  }
  selectNextObject() {
    this.selectedObjectItem2 = this.items2[this.nextElementCounter];

    this.nextElementCounter++;
    this.nextElementCounter = this.nextElementCounter % this.items2.length;
  }
  ngOnInit() {
    this.getComboData();
  }
}
