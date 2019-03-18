import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farfalla-page',
  templateUrl: './farfalla-page.component.html',
  styleUrls: ['./farfalla-page.component.less']
})
export class FarfallaPageComponent implements OnInit {

  chartsData = {
    type: 'tornado',
    num_of_elements_displayed: 5,
    more: 'PIU PRODOTTI',
    show_all: 'Vedi tutti',
    button_string: 'DETTAGLI',
    ctv: '200000,00',
    rischio: 9.6,
    total: 'TOTALE PORTAFOGLIO',
    graph_sx: {
      title: 'Peso Percentuale',
      color: '#A9E2F3'
    },
    graph_dx: {
      title: 'Rischio Relativo',
      color: '#2E9AFE'
    },
    data: [{
      label: '0 UNICREDIT ORD',
      percent_sx: 8,
      percent_dx: 23,
      ctv: '16541,63',
      rischio: 23.44,
    }, {
      label: '1 FCA FIAT CHRYSLER',
      percent_sx: 5,
      percent_dx: 16,
      // ctv: '10241,64',
      rischio: 21.00,
    }, {
      label: '2 GENERALI ASS.',
      percent_sx: 5,
      percent_dx: 14,
      ctv: '10477,68',
      rischio: 28.69,
    }, {
      label: '3 BEI 9.625 2019',
      percent_sx: 15,
      percent_dx: 11,
      ctv: '30311,23',
      // rischio: 9.25,
    }, {
      label: '4 NOME MOLTO LUNGO DEVE COMPARIRE IL TOOLTIP',
      percent_sx: 3,
      percent_dx: 8,
      ctv: '6041,83',
      rischio: 35.25,
    }, {
      label: '5 BPMS ORD RAGG',
      percent_sx: 2,
      percent_dx: 7,
      ctv: '4266,76',
      rischio: 35.25,
    }, {
      label: '6 ALTRO NOME MOLTO LUNGO DEVE COMPARIRE IL TOOLTIP',
      percent_sx: 30,
      percent_dx: 40,
      ctv: '16541,63',
      rischio: 23.44,
    }, {
      label: '7 BPMS ORD RAGG',
      percent_sx: 45,
      percent_dx: 75,
      ctv: '16541,63',
      rischio: 23.44,
    }, {
      label: '8 BPMS ORD RAGG',
      percent_sx: 90,
      percent_dx: 25,
      ctv: '16541,63',
      rischio: 23.44,
    }, {
      label: '9 BPMS ORD RAGG',
      percent_sx: 100,
      percent_dx: 50,
      ctv: '16541,63',
      rischio: 23.44,
    }]
  }
  

  constructor() { }

  ngOnInit() {
  }

}
