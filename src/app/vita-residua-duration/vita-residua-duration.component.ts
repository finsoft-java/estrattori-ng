import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vita-residua-duration',
  templateUrl: './vita-residua-duration.component.html',
  styleUrls: ['./vita-residua-duration.component.less']
})
export class VitaResiduaDurationComponent implements OnInit {

  /* Charts bar double */
  chartsData = {

    type: 'bar',
    subtype: 'double',
    // title: ‘VITA RESIDUA/DURATION’,

    data: [{
      label: '0 – 2 anni',
      is64: false,
      image: 'assets/images/Analisi Patrimonio/Vita Residua/64/data_scadenza_contr@2x.png',
      value: '30000,23',
      // num: 2000,
      subdata: {
        data: [{
          value: '50000,23'
        }],
        colors: []
      }
    }, {
      label: '2 – 5 anni',
      is64: false,
      image: 'assets/images/Analisi Patrimonio/Vita Residua/64/data_scadenza_contr@2x.png',
      value: '71726,64',
      subdata: {
        data: [{
          value: '41726,64'
        }],
        colors: []
      }
    }, {
      label: '5 – 7 anni',
      is64: false,
      image: 'assets/images/Analisi Patrimonio/Vita Residua/64/data_scadenza_contr@2x.png',
      value: '81726,64',
      subdata: {
        data: [{
          value: '61726,64'
        }],
        colors: []
      }
    }],
    colors: ['#2E9AFE', '#2ECCFA']
  }


  constructor() { }

  ngOnInit() {
  }

}
