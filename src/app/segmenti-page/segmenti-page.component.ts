import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'segmenti-page',
  templateUrl: './segmenti-page.component.html',
  styleUrls: ['./segmenti-page.component.less']
})
export class SegmentiPageComponent implements OnInit {

  chartsData = {
    type: 'segment',
    data: [{
        label: 'VENDIBILITA',
        is64: false,
        icon: 'assets/images/Simulazione di Proposta/Percorsi/L/L_ICN_ok.png',
        color: '#00ff00',
    },{
        label: 'LIQUIDITA',
        is64: false,
        icon: 'assets/images/Simulazione di Proposta/Percorsi/L/L_ICN_stop.png',
        color: '#ff0000',
    },{
        label: 'RISCHIO',
        is64: false,
        icon: 'assets/images/Simulazione di Proposta/Percorsi/L/L_ICN_ok.png',
        color: '#00ff00',
    },
    {
        label: 'CONCENTRAZIONE',
        is64: false,
        icon: 'assets/images/Simulazione di Proposta/Percorsi/L/L_ICN_stop.png',
        color: '#ff0000',
    },{
        label: 'INVESTIMENTO DI LUNGO PERIODO',
        is64: false,
        icon: 'assets/images/Simulazione di Proposta/Percorsi/L/L_ICN_ok.png',
        color: '#00ff00',
    },{
        label: 'FREQUENZA',
        is64: false,
        icon: 'N.A.',
        color: '#000000',
    },{
        color: '#00ff00',
    }],
    subtitle: 'La simulazione NON è ADEGUATA al Profilo Finanziario del cliente. Salvando la simulazione verrà generato in automatico il Report selezionato',
}

  constructor() { }

  ngOnInit() {
  }

}
