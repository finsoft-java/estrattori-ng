import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-page',
  templateUrl: './progress-bar-page.component.html',
  styleUrls: ['./progress-bar-page.component.less']
})
export class ProgressBarPageComponent implements OnInit {

  chartsData = {

    type: 'progress',
    min: 0.00,
    max: 100.00,
    color_border: '#04B431',
    color_full: '#04B431',
    color_empty: '#FFFFFF',
    full: {
      label: 'In Portafoglio',
      value: '37000,00',
      percent: 37.16,
      color_border: '#04B431'
    },
    empty: {
      label: 'Importo da allocare',
      value: '1000000,00',
      percent: 100,
      color_border: '#000000'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
