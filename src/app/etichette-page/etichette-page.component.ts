import { Component, OnInit} from '@angular/core';
import { NbpStyle, NbpButtonType, NbpSize } from 'cjlib';

@Component({
  selector: 'app-etichette-page',
  templateUrl: './etichette-page.component.html',
  styleUrls: ['./etichette-page.component.less']
})
export class EtichettePageComponent implements OnInit {
  primary: NbpStyle = NbpStyle.PRIMARY;
  constructor() { }

  buttonList = ['uno', 'due', 'tre']
  resultCheckButton = ['uno', 'due', 'tre'];
  resultCheckButton2 = ['uno', 'due', 'tre'];
  secondary: NbpStyle = NbpStyle.SECONDARY;
  listaMercati = [{icon:'ico-comuni-c-italia-s',mercato:'italia',select:false},
      {icon:'ico-comuni-c-italia-s',mercato:'italia',select:true}];
  ngOnInit() {
  }
  detectChange = ($event: any, key: string) => {
    console.log(`E cambiato il valore di ${key}`);
  }

  resetFilter = (event: any) => {
    this.buttonList = ['uno', 'due', 'tre'];
    this.resultCheckButton = ['uno', 'due', 'tre'];
    this.resultCheckButton2 = ['uno', 'due', 'tre'];
    this.listaMercati = [{icon:'ico-comuni-c-italia-s',mercato:'italia',select:false},
      {icon:'ico-comuni-c-italia-s',mercato:'italia',select:true},
    ];
  }
  deleteChoise = (key: string) => {
    let idx = this.buttonList.findIndex(k => k == key)
    if (!isNaN(idx)) {
      this.buttonList.splice(idx, 1);
    }
    idx = this.resultCheckButton.findIndex(k => k == key)
    if (!isNaN(idx)) {
      this.resultCheckButton.splice(idx, 1);
    }
  }
  deleteFilter = (key: string) => {

    let idx = this.resultCheckButton2.findIndex(k => k == key)
    if (!isNaN(idx)) {
      this.resultCheckButton2[idx] = '';
      // this.resultCheckButton.splice(idx, 1);
    }
  }

}
