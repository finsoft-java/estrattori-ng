import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge-page',
  templateUrl: './gauge-page.component.html',
  styleUrls: ['./gauge-page.component.less']
})
export class GaugePageComponent implements OnInit {

  chartsData = {
    type: 'tachometer',
    colorTooltip: 'black',
    colorTooltipText: 'white',
    data: {
      title: 'Obiettivo di riserva',
      subtitle: 'Patrimonio investito in riserva',
      actualValue: 25.00,
      simulationValue: 70.00,
      simulationPresence: true,
      labelValue: 'BASSA',
      range: [{
        min: 0.00,
        max: 33.00,
        minLabel: 'BASSA',
        maxLabel: 'MEDIA',
        showMinLabel: true,
        showMaxLabel: false,
        color: '#ff0000',
        tooltipLabel: 'Riserva non adeguata',
      }, {
        min: 33.00,
        max: 66.00,
        minLabel: 'MEDIA',
        maxLabel: 'MEDIA',
        showMinLabel: false,
        showMaxLabel: false,
        color: '#09a900',
        tooltipLabel: 'Eccesso di riserva',
      }, {
        min: 66.00,
        max: 100.00,
        minLabel: 'MEDIA',
        maxLabel: 'ALTA',
        showMinLabel: false,
        showMaxLabel: true,
        color: '#ffa907',
        tooltipLabel: 'Riserva in linea',
      }]
    },
    otherInfo: {
      acronimo: '',
      filename: '',
      path: '',
      width: 1200,
      height: 1200
    }
  };

  chartsData2 = {
    type: 'tachometer',
    colorTooltip: 'black',
    colorTooltipText: 'white',
    data: {
      title: 'Obiettivo di riserva',
      subtitle: 'Patrimonio investito in riserva',
      actualValue: 207753.62,
      simulationValue: 40000.00,
      simulationPresence: true,
      labelValue: '69465.36',
      range: [{
        min: 0,
        max: 15000,
        minLabel: '0.00',
        maxLabel: '15000.00',
        showMinLabel: true,
        showMaxLabel: false,
        color: '#ff0000',
        tooltipLabel: 'Riserva non adeguata',
      }, {
        min: 15000,
        max: 25000,
        minLabel: '15.000,00',
        maxLabel: '25.000,00',
        showMinLabel: true,
        showMaxLabel: false,
        color: '#09a900',
        tooltipLabel: 'Eccesso di riserva',
      }, {
        min: 25000,
        max: 150000,
        minLabel: '25.000,00',
        maxLabel: '150.000,00',
        showMinLabel: false,
        showMaxLabel: true,
        color: '#ffa907',
        tooltipLabel: 'Eccesso di riserva',
      }, {
        min: 150000,
        max: 207753.62,
        minLabel: '150.000,00',
        maxLabel: '207.753,62',
        showMinLabel: false,
        showMaxLabel: true,
        color: '#ffee05',
        tooltipLabel: 'Riserva in linea',
      }]
    },
    otherInfo: {
      acronimo: '',
      filename: '',
      path: '',
      width: 1200,
      height: 1200
    }
  };

  chartsData3 = {
    type: 'tachometer',
    colorTooltip: 'black',
    colorTooltipText: 'white',
    data: {
      title: 'Obiettivo di riserva',
      subtitle: 'Patrimonio investito in riserva',
      actualValue: 50.00,
      simulationValue: 28.00,
      simulationPresence: true,
      labelValue: '47.00',
      range: [{
        min: 0.00,
        max: 15.00,
        minLabel: '0,00',
        maxLabel: '15,00',
        showMinLabel: true,
        showMaxLabel: false,
        color: '#ff0000',
        tooltipLabel: 'Riserva non adeguata',
      }, {
        min: 15.00,
        max: 35.00,
        minLabel: '15,00',
        maxLabel: '35,00',
        showMinLabel: true,
        showMaxLabel: false,
        color: '#09a900',
        tooltipLabel: 'Eccesso di riserva',
      }, {
        min: 35.00,
        max: 50.00,
        minLabel: '35,00',
        maxLabel: '50,00',
        showMinLabel: false,
        showMaxLabel: true,
        color: '#ffa907',
        tooltipLabel: 'Eccesso di riserva',
      }, {
        min: 50.00,
        max: 100.00,
        minLabel: '50,00',
        maxLabel: '100,00',
        showMinLabel: false,
        showMaxLabel: true,
        color: '#ffee05',
        tooltipLabel: 'Riserva in linea',
      }]
    },
    otherInfo: {
      acronimo: '',
      filename: '',
      path: '',
      width: 1200,
      height: 1200
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
